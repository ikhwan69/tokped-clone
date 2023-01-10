import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { AiFillEye, AiFillMail } from "react-icons/ai";
import styles from "../styles/Form.module.css";
import { signIn, getSession, getProviders } from "next-auth/react";
import { useFormik, FormikProps } from "formik";
import login_validate from "../lib/validate";
import type { NextApiRequest } from "next";
import { FormLogin } from "../type";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import ProviderButton from "../components/Button/ProviderButton";
import { IProvider } from "../type";

interface IDivicerProps {
  word?: string;
}
const Divider = ({ word }: IDivicerProps) => {
  return (
    <>
      <div className="flex w-100 items-center justify-center gap-3 my-4">
        <div className="w-full border border-b-1 rounded-full"></div>
        <p className="text-sm font-semibold text-gray-500">{word}</p>
        <div className="w-full border border-b-1 rounded-full"></div>
      </div>
    </>
  )

}

export default function Login({ providers }: IProvider) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik: FormikProps<FormLogin> = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values: any) {
    setIsLoading(true)
    const status: any = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: `${window.location.origin}`
    });
    if (status.error === null) {
      toast.success('Success');
      setTimeout(() => {
        window.location.href = `${status.url}`;
        setIsLoading(false)
      }, 2000)
    } else {
      console.log(status)
      toast.error(status.error);
      setIsLoading(false)
    }
  }

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
            <Button isLoading={isLoading} variant="regular" size="regular">
              {isLoading ? <Spinner /> : "Masuk"}
            </Button>
          </div>
          <Divider word="Atau" />
          <ProviderButton providers={providers} />
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
