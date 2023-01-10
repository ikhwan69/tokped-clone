import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../database/mongodb";
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from "../../../database/dbConnect";
import User from '../../../model/User'
import {compare} from 'bcrypt'

export default NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Login
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await dbConnect();

        // Find user with the email
        const user = await User.findOne({
          email: credentials?.email,
        });

        // Email Not found
        if (!user) {
          throw new Error("Email is not registered");
        }

        // Check hased password with DB hashed password
        const isPasswordCorrect = await compare(
          credentials!.password,
          user.hashedPassword
        );

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  adapter: MongoDBAdapter(clientPromise),
 session: {
  strategy: "jwt",
 },
 jwt: {
  secret: process.env.NEXTAUTH_JWT_SECRET,
 },
 secret: process.env.NEXTAUTH_SECRET,
});
