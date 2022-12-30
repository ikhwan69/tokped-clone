import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../database/mongodb";
// import dbConnect from "../../../database/dbConnect";
// import CredentialsProvider from "next-auth/providers/credentials";
// import User from "../../../model/User";
// import { compare } from "bcrypt";

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
    //Email Password
    // CredentialsProvider({
    //   id: "credentials",
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "text",
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     await dbConnect();

    //     //Find user with the email
    //     const user = await User1.findOne({ email: credentials?.email });

    //     // Email not found
    //     if (!user) {
    //       throw new Error("Email is not registered");
    //     }

    //     //Check hassed password with DB hashed password
    //     const isPasswordCorrect = await compare(
    //       credentials!.password,
    //       user.hashedPassword
    //     );

    //     //Incorrect password
    //     if (!isPasswordCorrect) {
    //       throw new Error("Password is incorrect");
    //     }
    //     return user;
    //   },
    // }),
  ],
//   pages: {
//     signIn: "/auth",
//   },
  debug: process.env.NODE_ENV === "development",
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
});
