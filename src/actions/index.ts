"use server"


import { revalidatePath } from "next/cache";
import nodeMailer from 'nodemailer'
import prisma from '@/lib/prisma';
import fs from 'fs'
import bcryptjs from 'bcryptjs'
import path from 'path'
import { courses } from "@/data";

export const submitEnquiry = async (data: FormData) => {
    try {
        const firstname = data.get("firstname")?.valueOf()?.toString() || ""
        const middlename = data.get("middlename")?.valueOf()?.toString() || ""
        const lastname = data.get("lastname")?.valueOf()?.toString() || ""
        const phone = data.get("phone")?.valueOf()?.toString() || ""
        const country = data.get("country")?.valueOf()?.toString() || ""
        const state = data.get("state")?.valueOf()?.toString() || ""
        const email = data.get("email")?.valueOf()?.toString() || ""
        const message = data.get("message")?.valueOf()?.toString() || ""
        const courseId = data.get("course")?.valueOf()?.toString() || ""

        const course = courses.find(course => course.id === courseId)?.title


        // Save in the Database
        await prisma.enquiry.create({
            data: {
                firstname, middlename, lastname, phone, country, state, message, email, courseId
            }
        })
        // console.log({request})

        const html = `
        <section style="max-width: 40rem; width: 100%; margin: 0 auto; padding: 2rem;" className="flex flex-col">
        <h2 style="color: rgb(51,65,85); text-align: center; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem; border-bottom: 1px solid #eee; margin: .5rem; padding: .5rem 1rem;" className="text-slate-700 text-center">New Contact Message!</h2>
        <div className="flex gap-1">
        <div style="background: rgb(33, 150, 243); color: white; text-align: center; border-radius: 5px; padding: .5rem 1rem;" className="h-10 w-10 rounded-full bg-primary flex-shrink-0">Enquiry Details</div>
            <div className="flex flex-col flex-1">
                <h4 style="color: #848484; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem;" className="font-bold text-slate-600 text-lg">From: ${firstname} ${middlename} ${lastname}</h4>
                <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1rem;" className="text-xs text-slate-500">Email: ${email}</p>
                <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1rem;" className="text-xs text-slate-500">Phone Number: ${phone}</p>
                <h4 style="color: #848484; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem;" className="font-bold text-slate-600 text-lg">Course: ${course}</h4>
            </div>
            <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1.25rem;" className="text-sm text-slate-700 text-justify">Message:</p>
            <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1.25rem;" className="text-sm text-slate-700 text-justify">${message}</p>
        </div>
    </section>
      `;
        const transport = nodeMailer.createTransport({
            // host: 'smtp.gmail.com',
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })

        const info = await transport.sendMail({
            // from: `CTTI.com <brunomany1@gmail.com>`,
            from: `CTTI.ng <${process.env.MAIL_FROM}>`,
            // to: ['CTTI Admin <adefredy1@gmail.com>', 'CTTI Admin <admin@ctti.ng>'],
            to: ['CTTI Admin <admin@ctti.ng>'],
            bcc: 'CTTI Admin <adedejifrederickr@gmail.com>',
            replyTo: email,
            subject: 'New Course Enquiry Message from CTTI',
            html
        })
        console.log(`Message sent: ${info.messageId}`)
        console.log({ info })
        revalidatePath("/enquiry")
        return { error: false, message: `Thank you for your enquiry, ${firstname} ${lastname}. Expect a reply as soon as possible.` }
    } catch (err) {
        console.log({ err })
        return { error: true, message: "Something went wrong while attempting to make your request, please, try again." }
    }
}

export const createCourse = async (data: FormData) => {
    try {
        const title = data.get("title")?.valueOf() as string;
        const categoryId = data.get("categoryId")?.valueOf() as string
        const duration = data.get("duration")?.valueOf() as string
        const description = data.get("description")?.valueOf() as string
        const allRequirements = data.get("allRequirements")?.valueOf() as JSON
        const allContents = data.get("allContents")?.valueOf() as JSON
        const image = data.get("image")?.valueOf() as File
        if (image.size) {
            // Save in the Database
            await prisma.course.create({
                data: {
                    title, categoryId, duration, description, requisite: JSON.stringify(allRequirements), contents: JSON.stringify(allContents)
                }
            })
            revalidatePath("/enquiry")
            return { error: true, message: `New Course Created Successfully` }
        }
        else {

            return { error: true, message: `Invalid Image type. Please, choose another and try again` }
        }
    } catch (err) {
        console.log({ err })
        return { error: true, message: "Something went wrong while attempting to make your request, please, try again." }
    }
}

export const handleContactMessage = async (data: FormData) => {
    try {
        const firstname = data.get("firstname")?.valueOf()?.toString() || "";
        const middlename = data.get("middlename")?.valueOf()?.toString() || "";
        const lastname = data.get("lastname")?.valueOf()?.toString() || "";
        const email = data.get("email")?.valueOf()?.toString() || "";
        const phone = data.get("phone")?.valueOf()?.toString() || "";
        const country = data.get("country")?.valueOf()?.toString() || "";
        const state = data.get("state")?.valueOf()?.toString() || "";
        const message = data.get("message")?.valueOf()?.toString() || "";

        // Save to Database
        // const contactMessage = await prisma.contact.create({data: {
        //     firstname, lastname, email, phone: phone || null, message
        // }})
        await prisma.contactMessage.create({
            data: {
                firstname, middlename, lastname, phone, country, state, message, email
            }
        })
        // console.log({contactMessage})
        // console.log({ firstname, lastname, email, phone, message })
        const html = `
                <section style="max-width: 40rem; width: 100%; margin: 0 auto; padding: 2rem;" className="flex flex-col">
                    <h2 style="color: rgb(51,65,85); text-align: center; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem; border-bottom: 1px solid #eee; margin: .5rem; padding: .5rem 1rem;" className="text-slate-700 text-center">New Contact Message!</h2>
                    <div className="flex gap-1">
                    <div style="background: rgb(33, 150, 243); color: white; text-align: center; border-radius: 5px; padding: .5rem 1rem;" className="h-10 w-10 rounded-full bg-primary flex-shrink-0">Contact Details</div>
                        <div className="flex flex-col flex-1">
                            <h4 style="color: #848484; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem;" className="font-bold text-slate-600 text-lg">From: ${firstname} ${middlename} ${lastname}</h4>
                            <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1rem;" className="text-xs text-slate-500">Email: ${email}</p>
                            <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1rem;" className="text-xs text-slate-500">Phone Number: ${phone}</p>
                        </div>
                        <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1.25rem;" className="text-sm text-slate-700 text-justify">Message:</p>
                        <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1.25rem;" className="text-sm text-slate-700 text-justify">${message}</p>
                    </div>
                </section>
            `;
        const transport = nodeMailer.createTransport({
            // host: 'smtp.gmail.com',
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })

        // const userMail = typeof(email) === 'string' ? email.toString() || "invalidmail@gmail.com"

        const info = transport.sendMail({
            // from: `CTTI.com <brunomany1@gmail.com>`,
            from: `CTTI.ng <${process.env.MAIL_FROM}>`,
            to: ['CTTI Admin <admin@ctti.ng>'],
            bcc: 'CTTI Admin <adedejifrederickr@gmail.com>',
            replyTo: email?.toString(),
            subject: 'New Contact Message from CTTI',
            html
        }, (err, info) => {
            if (err) {
                return { error: true, message: `Something went wrong. We could not send the mail...Please, try again` };
            }
            console.log(`Message sent: ${info?.messageId}`)
        })
        // console.log({ info })
        revalidatePath("/contact")
        return { error: false, message: `Thank you for reaching our to us ${firstname} ${lastname}. Expect our reply soonest.` };


    } catch (error) {
        console.log({ error })
        return { error: true, message: `Something went wrong. We could not send the mail...Please, try again ${error}` };
    }
}

export const handleSignup = async (data: FormData) => {
    try {
        const firstname = data.get("firstname")?.valueOf() as string
        const middlename = data.get("middlename")?.valueOf()?.toString() || ""
        const lastname = data.get("lastname")?.valueOf() as string
        const phone = data.get("phone")?.valueOf() as string
        const country = data.get("country")?.valueOf() as string
        const state = data.get("state")?.valueOf() as string
        const email = data.get("email")?.valueOf() as string
        const plainPassword = data.get("password")?.valueOf() as string
        const salt = await bcryptjs.genSalt(10)
        const password = await bcryptjs.hash(plainPassword, salt)
        console.log({ firstname, middlename, lastname, phone, country, state, password })
        const user = await prisma.user.create({
            data: {
                firstname, middlename, lastname, phone, email: email.toLowerCase(), password
            }
        })
        console.log({ user })
        // if(user)
        revalidatePath("/admin/signup")
        return { error: false, message: `Welcome, ${firstname} ${middlename} ${lastname}. Please, check your email for your account verification.` }
    } catch (err) {
        console.log({ err })
        return { error: true, message: "Something went wrong while attempting to make your request, please, try again. " }
    }
}

export const handleSubscription = async (data: FormData) => {
    try {
        const email = data.get("email")?.valueOf()?.toString() || ""

        // console.log({ firstname, middlename, lastname, phone, country, state, message, })

        // Save in the Database
        // await prisma.subcription.create({
        //     data: {
        //          email
        //     }
        // })
        // // console.log({request})

        // const html = `
        //     <section className="flex flex-col">
        //         <h2 style="color: rgb(51,65,85); text-align: center; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem; border-bottom: 1px solid #eee; margin: .5rem; padding-bottom: .5rem;" className="text-slate-700 text-center">We got a New Enquiry!</h2>
        //         <div className="flex gap-1">
        //         <div style="background: rgb(33, 150, 243); color: white; text-align: center; border-radius: 5px;" className="h-10 w-10 rounded-full bg-primary flex-shrink-0">Enquiry Details</div>
        //         <div className="flex flex-col flex-1">
        //             <h4 style="color: #848484; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem;" className="font-bold text-slate-600 text-lg">${firstname} ${middlename} ${lastname}</h4>
        //             <p style="color: rgb(100,116,139); font-size: 0.75rem; line-height: 1rem;" className="text-xs text-slate-500">Email: ${email}</p>
        //             <p style="color: rgb(100,116,139); font-size: 0.75rem; line-height: 1rem;" className="text-xs text-slate-500">Phone Number: ${phone}</p>
        //         </div>
        //         <p style="color: rgb(100,116,139); font-size: 0.875rem; line-height: 1.25rem;" className="text-sm text-slate-700 text-justify">${message}</p>
        //         </div>
        //     </section>
        // `;
        // const transport = nodeMailer.createTransport({
        //     // host: 'smtp.gmail.com',
        //     host: process.env.MAIL_HOST,
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: process.env.MAIL_USERNAME,
        //         pass: process.env.MAIL_PASSWORD
        //     }
        // })

        // const info = await transport.sendMail({
        //     // from: `CTTI.com <brunomany1@gmail.com>`,
        //     from: `CTTI.ng <${process.env.MAIL_FROM}>`,
        //     // to: ['CTTI Admin <adefredy1@gmail.com>', 'CTTI Admin <admin@ctti.ng>'],
        //     to: ['CTTI Admin <adefredy1@gmail.com>'],
        //     bcc: 'CTTI Admin <adedejifrederickr@gmail.com>',
        //     replyTo: email,
        //     subject: 'New Contact Message from CTTI',
        //     html
        // })
        // console.log(`Message sent: ${info.messageId}`)
        // console.log({ info })
        // revalidatePath("/")
        return { error: false, message: `Thank you for your enquiry, ${email}. Expect a reply as soon as possible.` }
    } catch (err) {
        console.log({ err })
        return { error: true, message: "Something went wrong while attempting to make your request, please, try again." }
    }
}

export const updateAccount = async (data: FormData) => {
    console.log({ data })
    try {
        const id = data.get("id")?.valueOf() as string
        const firstname = data.get("firstname")?.valueOf() as string
        const middlename = data.get("middlename")?.valueOf()?.toString() || ""
        const lastname = data.get("lastname")?.valueOf() as string
        const phone = data.get("phone")?.valueOf() as string
        const country = data.get("country")?.valueOf() as string
        const state = data.get("state")?.valueOf() as string
        const address = data.get("address")?.valueOf() as string
        const email = data.get("email")?.valueOf() as string
        const confirmPassword = data.get("confirm-password")?.valueOf() as string
        const plainPassword = data.get("password")?.valueOf() as string
        const currentPassword = data.get("extra")?.valueOf() as string
        // Confirm Password
        const matchPassword = bcryptjs.compareSync(confirmPassword, currentPassword)
        if (!matchPassword) return { error: true, message: "Invalid user confirmation password supplied. This must match your current password" }
        else {
            const findSimilarUser = await prisma.user.findUnique({
                where: { email: email.toLowerCase(), phone, NOT: { id } },
            })
            if (findSimilarUser) return { error: true, message: "Sorry. There is a user with that email or phone number. Please, try another" }
            const salt = await bcryptjs.genSalt(10)
            const password = plainPassword.trim() === "" ? currentPassword : await bcryptjs.hash(plainPassword, salt)
            await prisma.user.update({
                where: { id },
                data: {
                    firstname, middlename, lastname, phone, email: email.toLowerCase(), password, country, state, address
                }
            })
            revalidatePath("/dashboard/profile")
        }
        return { error: false, message: `Profile Updated Successfully.` }
    } catch (err) {
        return { error: true, message: "Something went wrong while attempting to make your request, please, try again." }
    }
}

export const handleUpload = async (data: FormData) => {
    try {
        const file = data.get("image")?.valueOf() as File
        let imageName;
        if (file.size) {
            let fileName = file?.name;
            const extension = fileName?.split(".").pop();
            fileName = fileName.replaceAll(" ", "-").replaceAll("_", "-").replaceAll("'", "").replaceAll("&", "").replaceAll("%", "").replaceAll("@", "").replaceAll("(", "").replaceAll(")", "");
            imageName = `${fileName.replaceAll(`.${extension}`, "")}-${Date.now()}.${extension ?? "jpg"}`; // file.name;
            // fileName = imageName;
            const imagePath = path.join(`./public/users/`, imageName);
            const imageStream = fs.createWriteStream(imagePath);
            imageStream.write(Buffer.from(await file.arrayBuffer()));
            imageStream.end();
            return { error: false, message: "Image uploaded successfully." }
        }
        else return { error: true, message: "It appears this file is not a valid image extension. Only valid jpg, jpeg or png are allowed." }

    } catch (error) {
        return { error: true, message: "Something went wrong while attempting to upload your picture. Please, try again." }
    }
}