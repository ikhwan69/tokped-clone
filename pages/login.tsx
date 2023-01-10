import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layout";
import { AiFillEye, AiFillMail } from "react-icons/ai";
import styles from "../styles/Form.module.css";
import { signIn, getSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { useFormik, FormikProps } from "formik";
import login_validate from "../lib/validate";
import { useRouter } from "next/router";
import type { NextApiRequest } from "next";
import { FormLogin } from "../type";
import Button from "../components/Button/Button";

export default function Login({ providers }: any) {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const formik: FormikProps<FormLogin> = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values: any) {
    const status: any = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: `${window.location.origin}`
    });
    if (status.ok) {
      setTimeout(() => {
      return (window.location.href = `${process.env.NEXT_PUBLIC_URL}`);

    }, 3000)
      
    }
  }

  //Providers button
  const ProvidersButton = ({ providers }: any) => (
    <div className="grid gap-3 grid-columns">
      {Object.values(providers).map(
        (provider: any) =>
          provider.name !== "Credentials" && (
            <button
              type="button"
              key={provider.name}
              className={styles.button_custom}
              onClick={() => {
                signIn(provider.id, {
                  callbackUrl: `${process.env.NEXT_PUBLIC_URL_CALLBACK}`,
                });
              }}
            >
              <Image
                src={`${provider.name === "Google"
                    ? "/assets/google.svg"
                    : "/assets/github.svg"
                  }`}
                width={20}
                height={20}
                alt="image"
              />
              <span className="font-semibold">{provider.name}</span>
            </button>
          )
      )}
    </div>
  );

  const emailValidate = `${formik.errors.email && formik.touched.email
      ? "border-2 border-rose-600 focus:border-rose-600"
      : ""
    }`;
  const passwordValidate = `${formik.errors.password && formik.touched.password
      ? "border-2 border-rose-600 focus:border-rose-600"
      : ""
    }`;

  return (
    <div className="w-full flex flex-col h-screen bg-gray-50">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col w-full md:p-10 p-6 gap-10 rounded-xl shadow-md bg-white m-auto lg:max-w-[30%]">   
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Masuk</h1>
            <Link href="/register">
              <p className="font-normal cursor-pointer text-[#03AC0E]">
                Daftar
              </p>
            </Link>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-1"
          >
            <label
              htmlFor="email"
              className="block mt-2 text-sm font-semibold text-gray-500"
            >
              Email
            </label>
            <div className={`${styles.input_group} ${emailValidate} }`}>
              <input
                type="email"
                // name='email'
                className={styles.input_text}
                {...formik.getFieldProps("email")}
              />
              <span className="flex items-center px-4 icon">
                <AiFillMail className="text-slate-400" size={15} />
              </span>
            </div>
            {emailValidate && (
              <span className="text-sm text-rose-500">
                {formik.errors.email}
              </span>
            )}
            <label
              htmlFor="password"
              className="block  mt-2 text-sm font-semibold text-gray-500"
            >
              Password
            </label>
            <div className={`${styles.input_group} ${passwordValidate}`}>
              <input
                type={`${show ? "text" : "password"}`}
                // name='password'
                className={styles.input_text}
                {...formik.getFieldProps("password")}
              />
              <span
                className="flex items-center px-4 icon"
                onClick={() => setShow(!show)}
              >
                <AiFillEye className="text-slate-400" size={15} />
              </span>
            </div>
            {passwordValidate && (
              <span className="text-sm text-rose-500">
                {formik.errors.password}
              </span>
            )}
            <div className="mt-6">
           <Button variant="regular" size="regular">Masuk</Button>
            </div>
            <p className="my-2 text-sm text-center text-slate-400">
              ---------- atau masuk dengan ----------
            </p>
            <ProvidersButton providers={providers} />
          </form>
        </div>
      </div>
  );
}

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      providers: await getProviders(),
    },
  };
}
