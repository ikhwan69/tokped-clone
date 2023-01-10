// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../database/dbConnect";
import User from "../../../model/User";
import bcrypt from "bcrypt";

interface ResponseData {
  error?: string;
  msg?: string;
}

const validateEmail = (email: string): boolean => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regEx.test(email);
};

const validateForm = async (
  namaLengkap: string,
  email: string,
  password: string
) => {
  if (namaLengkap.length < 3) {
    return { error: "Full Name must have 3 or more characters" };
  }
  if (!validateEmail(email)) {
    return { error: "Email is invalid" };
  }

  await dbConnect();
  const emailUser = await User.findOne({ email: email });

  if (emailUser) {
    return { error: "Email sudah terdaftar" };
  }

  if (password.length < 5) {
    return { error: "Password must have 5 or more characters" };
  }

  return null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // validate if it is a POST
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }

  // get and validate body variables
  const { namaLengkap, email, password } = req.body;

  const errorMessage = await validateForm(namaLengkap, email, password);
  if (errorMessage) {
    return res.status(400).json(errorMessage as ResponseData);
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // create new User on MongoDB
  const newUser = new User({
    namaLengkap: namaLengkap,
    email,
    hashedPassword,
  });

  newUser
    .save()
    .then(() =>
      res.status(200).json({ msg: "Successfuly created new User: " + newUser })
    )
    .catch((err: string) =>
      res.status(400).json({ error: "Error on '/api/register': " + err })
    );
}
