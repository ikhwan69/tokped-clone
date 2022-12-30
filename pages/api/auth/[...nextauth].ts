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
    
  ],
  debug: process.env.NODE_ENV === "development",
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
});
