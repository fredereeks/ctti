import { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from "@/lib/prisma"
import { User } from '@prisma/client';
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'youremail@email.com'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '*******'
                },
            },
            async authorize(credentials) {
                if (!credentials) return null;
                const { email, password } = credentials;

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })
                // const user = {email: 'fredericks@gmail.com', password: 'Fredericks', id: '89347345'}
                if (!user) return null;
                if(user.status === "Pending") {
                    throw new Error("Your account is NOT yet activated. Please, check contact the admin for account activation. If not, your account will be automatically deleted after 3days")
                }
                else if(user.status === "Suspended") {
                    throw new Error("Oh No! Your account has been suspended. If you believe this is an error, contact the admin")
                }
                else{
                    const matchPassword = bcryptjs.compareSync(password, user.password)
                    if (!matchPassword) return null
                    return user
                }
                // return {
                //     id: user.id.toString(),
                //     email: user.email!,
                //     image: user.image
                // };
            },
        })
    ],
    pages: {
        signIn: "/auth/signin",
    },
    secret: process.env.JWT,
    jwt: {
        async encode({ secret, token }) {
            if (!token) throw new Error("No token to encode")
            return jwt.sign(token, secret)
        },
        async decode({ secret, token }) {
            if (!token) throw new Error("No token to decode")
            const decodedToken = jwt.verify(token, secret)
            if(typeof decodedToken === "string"){
                return JSON.parse(decodedToken)
            }
            else return decodedToken;
        },
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
    callbacks: {
        session({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id
                }
            };
        },
        jwt({ token, user }) {
            if (user) {
                const currentUser = user as unknown as User
                return {
                    ...token,
                    id: currentUser.id,
                    email: currentUser.email,
                    image: currentUser.image,
                    fullname: `${currentUser.firstname} ${currentUser.middlename} ${currentUser.lastname}`,
                    type: currentUser.type
                }
            }

            return token;
        },
    }
}