"use server"


import { revalidatePath } from "next/cache";
import nodeMailer from 'nodemailer'
import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs'
import { courses } from "@/data";
import { randomUUID } from "crypto";

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

        await prisma.enquiry.create({
            data: {
                firstname, middlename, lastname, phone, country, state, message, email, courseId
            }
        })

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

        await transport.sendMail({
            from: `CTTI.ng <${process.env.MAIL_FROM}>`,
            to: ['CTTI Admin <admin@ctti.ng>'],
            bcc: 'CTTI Admin <adedejifrederickr@gmail.com>',
            replyTo: email,
            subject: 'New Course Enquiry Message from CTTI',
            html
        })
        revalidatePath("/enquiry")
        return { error: false, message: `Thank you for your enquiry, ${firstname} ${lastname}. Expect a reply as soon as possible.` }
    } catch (err) {
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

        await prisma.contactMessage.create({
            data: {
                firstname, middlename, lastname, phone, country, state, message, email
            }
        })
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

        transport.sendMail({
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
        })
        revalidatePath("/contact")
        return { error: false, message: `Thank you for reaching our to us ${firstname} ${lastname}. Expect our reply soonest.` };


    } catch (error) {
        return { error: true, message: `Something went wrong. We could not send the mail...Please, try again` };
    }
}

export const handleReply = async (data: FormData) => {
    "use server"
    try {
      const email = data.get("email")?.valueOf()?.toString() || "";
      const subject = data.get("subject")?.valueOf()?.toString() || "";
      const id = data.get("id")?.valueOf()?.toString() || "";
      const message = data.get("message")?.valueOf()?.toString() || "";
      const type = data.get("type")?.valueOf()?.toString() || "enquiry";
        
      if(type === "contact") {
          await prisma.contactMessage.update({ where: {id}, data: { status: "Read" }  })
      }
  
      const html = `
              <section style="max-width: 40rem; width: 100%; margin: 0 auto; padding: 2rem;" className="flex flex-col">
                  <div className="flex gap-1">
                  <div style="background: rgb(33, 150, 243); font-size: 2rem; font-weight: bold; color: white; text-align: center; padding: 2rem 1rem;" className="h-10 w-10 rounded-full bg-primary flex-shrink-0">Response from CTTI</div>
                      <div style="padding: 1rem;" className="flex flex-col flex-1">
                        <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1.8;" className="text-xs text-slate-500">${message}</p>
                          <a href='https://ctti.ng/courses' target="_blank" style="background: rgb(33, 150, 243); padding: .51rem 1rem; width: max-content; display: block; margin: 1rem auto 0; color: white; font-size: .95rem; text-decoration: none; line-height: 1.6;" className="font-bold text-slate-600 text-lg">View our Top Courses</a>
                      </div>
                      <p style="color: rgb(100,116,139); font-size: .65rem; padding: 1rem; text-align:center; line-height: 1.25rem;" className="text-xs text-slate-700 text-center py-2">You received this message because you sent one on the <a href='https://ctti.ng/courses' target="_blank" style="color: inherit; text-decoration: underline;" className="text-inherit">CTTI Website</a>. If you did NOT initiated this message, kindly ignore this message and you will not get a further message from us.</p>
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
        to: email,
        // bcc: 'CTTI Admin Response <adedejifrederickr@gmail.com>',
        replyTo: email?.toString(),
        subject,
        html
      }, (err, info) => {
        if (err) {
          return { error: true, message: `Something went wrong. We could not send the mail...Please, try again` };
        }
        console.log(`Message sent: ${info?.messageId}`)
      })
      // console.log({ info })
      revalidatePath("/dashboard/messages")
      return { error: false, message: `Your Reply has been sent to ${email}` };
  
  
    } catch (error) {
      return { error: true, message: `Something went wrong. We could not send the mail...Please, try again` };
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
        await prisma.user.create({
            data: {
                firstname, middlename, lastname, phone, email: email.toLowerCase(), password, country, state
            }
        })
        revalidatePath("/admin/signup")
        return { error: false, message: `Welcome, ${firstname} ${middlename} ${lastname}. Please, check your email for your account verification.` }
    } catch (err) {
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
        // revalidatePath("/")
        return { error: false, message: `Thank you for your enquiry, ${email}. Expect a reply as soon as possible.` }
    } catch (err) {
        return { error: true, message: "Something went wrong while attempting to make your request, please, try again." }
    }
}

export const handleUpload = async (data: FormData) => {
    try {
        const file = data.get("file") as string
        const id = data.get("id") as string
        await prisma.user.update({ where: { id }, data: { image: file } })
        return { error: false, message: `Image Uploaded successfully` }
    } catch (error) {
        return { error: true, message: `Something went wrong. We are unable to process handle your upload, please try again.` }
    }
}

export const handleReset = async (email: string) => {
    const validMail = await prisma.user.findFirst({ where: { email } })
    if (!validMail) return { error: true, message: `We do not have an account with this email...Please, confirm and try again` };
    try {
        const token = randomUUID()
        const html = `
                <section style="max-width: 40rem; width: 100%; margin: 0 auto; padding: 2rem;" className="flex flex-col">
                    <div className="flex gap-1">
                    <div style="background: rgb(33, 150, 243); font-size: 2rem; color: white; text-align: center; padding: 2rem 1rem;" className="h-10 w-10 rounded-full bg-primary flex-shrink-0">Password Reset</div>
                        <div style="padding: 1rem;" className="flex flex-col flex-1">
                        <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1.8;" className="text-xs text-slate-500">We have received your request to reset your password. If you indeed initiated the action, click the link below:</p>
                            <a href='https://ctti.ng/reset?email=${email}&token=${token}' target="_blank" style="background: rgb(33, 150, 243); padding: 1rem 2rem; width: max-content; margin: 0 auto; color: white; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem;" className="font-bold text-slate-600 text-lg">View our Trending Courses</a>
                        </div>
                        <p style="color: rgb(100,116,139); font-size: .65rem; padding: 1rem; text-align:center; line-height: 1.25rem;" className="text-xs text-slate-700 text-center py-2">If you did not initiate this action. Simply ignore this message.</p>
                    </div>
                </section>
            `;
        const transport = nodeMailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })

        transport.sendMail({
            from: `CTTI.ng <${process.env.MAIL_FROM}>`,
            to: email,
            bcc: 'CTTI Password Reset <adedejifrederickr@gmail.com>',
            replyTo: 'CTTI No Reply <no-reply@ctti.ng>',
            subject: 'CTTI Password Reset Request',
            html
        }, (err, info) => {
            if (err) {
                return { error: true, message: `Something went wrong. We could not send the mail...Please, try again` };
            }
        })
        await prisma.user.update({
            where: { email },
            data: { token }
        })
        revalidatePath("/login")
        return { error: false, message: `Password Reset Link has been sent to your email...` };
    } catch (error) {
        return { error: true, message: `Something went wrong. We could not send the mail...Please, try again` };
    }
}

export const handlePasswordReset = async (data: FormData) => {
    const email = data.get("email")?.valueOf() as string
    const plainPassword = data.get("password")?.valueOf() as string
    const salt = await bcryptjs.genSalt(10)
    const password = await bcryptjs.hash(plainPassword, salt)
    const validMail = await prisma.user.findFirst({ where: { email } })
    if (!validMail) return { error: true, message: `We do not have an account with this email...Please, confirm and try again` };
    try {
        await prisma.user.update({
            where: { email },
            data: { password, token: "" }
        })
        revalidatePath("/reset")
        return { error: false, message: `Password Reset Link was successfully.` };
    } catch (error) {
        return { error: true, message: `Something went wrong. We could not complete your request...Please, try again` };
    }
}

export const handleTokenVerification = async(email: string, token: string) => {
    try {
        const validMail = await prisma.user.findFirst({ where: { email, token } })
        if (!validMail) return { error: true, message: `We do not have an account with these details...Perhaps, this is an old link` };
        else return { error: false, message: `Success! Please, complete the process by choosing a new password` };
    } catch (error) {
        return { error: true, message: `Something went wrong. We could not complete your request...Please, try again` };
    }
}

export const updateAccount = async (data: FormData) => {
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


// DELETE ACTIONS
export const deleteAction = async (data: FormData) => {
    const id = data.get("deleteId")?.valueOf() as string
    try {
        await prisma.$transaction([
            prisma.user.update({ where: { id }, data: { image: "" } }),
        ])
        return { error: false, message: `Image has been successfully deleted` }
    }
    catch (err) {
        return { error: true, message: `Something went wrong while attempting to make your request, please, try again.` }
    }
    finally {
        revalidatePath("/dashboard/profile")
    }
}