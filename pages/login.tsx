import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layout";
import { AiFillEye, AiFillMail } from 'react-icons/ai'
import styles from '../styles/Form.module.css';
import { signIn, getSession, getProviders } from 'next-auth/react'
import Image from "next/image";
import { useFormik, FormikProps } from "formik";
import login_validate from "../lib/validate";
import { useRouter } from 'next/router'

import { FormLogin } from "../type";

export default function Login({ providers }: any) {
    const [show, setShow] = useState(false)
    const router = useRouter()

    const formik: FormikProps<FormLogin> = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: login_validate,
        onSubmit
    })

    async function onSubmit(values) {
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/dashboard"
        })
        console.log(status)
        if (status.ok) router.push(status.url)
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
                                    callbackUrl: `${process.env.NEXT_PUBLIC_URL_CALLBACK}`
                                })
                            }}
                        >
                            <Image
                                src={`${provider.name === "Google" ? '/assets/google.svg' : '/assets/github.svg'}`}
                                width={20}
                                height={20}
                                alt="image"
                            />
                            <span className="font-semibold">{provider.name}</span>
                        </button>
                    )
            )}
        </div>
    )

    const emailValidate = `${formik.errors.email && formik.touched.email ? 'border-2 border-rose-600 focus:border-rose-600' : ''}`
    const passwordValidate = `${formik.errors.password && formik.touched.password ? 'border-2 border-rose-600 focus:border-rose-600' : ''}`

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full py-6 px-8 md:px-10 m-auto bg-white rounded-xl shadow-md lg:max-w-[30%]">
                    <div className="flex justify-between mt-5">
                        <h1 className="text-3xl font-bold tracking-tight">Masuk</h1>
                        <Link href="/register">
                            <p className="font-normal cursor-pointer text-[#03AC0E]">Daftar</p>
                        </Link>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 my-8">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-500"
                        >
                            Email
                        </label>
                        <div className={`${styles.input_group} ${emailValidate} }`}>
                            <input
                                type="email"
                                name='email'
                                className={styles.input_text}
                                {...formik.getFieldProps('email')}
                            />
                            <span className='flex items-center px-4 icon'>
                                <AiFillMail className="text-slate-400" size={15} />
                            </span>
                        </div>
                        {emailValidate && <span className='text-sm text-rose-500'>{formik.errors.email}</span>}
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-500"
                        >
                            Password
                        </label>
                        <div className={`${styles.input_group} ${passwordValidate}`}>
                            <input
                                type={`${show ? 'text' : 'password'}`}
                                name='password'
                                className={styles.input_text}
                                {...formik.getFieldProps('password')}
                            />
                            <span
                                className="flex items-center px-4 icon"
                                onClick={() => setShow(!show)}
                            >
                                <AiFillEye className="text-slate-400" size={15} />
                            </span>
                        </div>
                        {passwordValidate && <span className='text-sm text-rose-500'>{formik.errors.password}</span>}
                        <div className="mt-6">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-green hover:bg-green-200 focus:outline-none ">
                                Masuk
                            </button>
                        </div>
                        <p className="my-2 text-sm text-center text-slate-400">---------- atau masuk dengan ----------</p>
                        <ProvidersButton providers={providers} />
                    </form>
                </div>
            </div>
        </Layout>
    );
}


export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (session) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false
            }
        }
    }

    return {
        props: {
            session,
            providers: await getProviders()
        }
    }
}

//   export async function getServerSideProps() {
//     return {
//         props: {
//             providers: await getProviders()
//         }
//     }
//   }