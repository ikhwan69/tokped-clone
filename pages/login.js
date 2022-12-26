import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layout";
import { AiFillEye, AiFillMail } from 'react-icons/ai'
import styles from '../styles/Form.module.css';
import { signIn, signOut } from 'next-auth/react'
import Image from "next/image";

export default function Login() {
    const [show, setShow] = useState(false)

    //Google Handler function
    async function handleGoogleSignin() {
        signIn('google', {callbackUrl: process.env.URL_CALLBACK})
    }

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full pt-10 px-8 m-auto bg-white  rounded-xl shadow-md lg:max-w-[30%]">
                    <div className="flex justify-between mt-5">
                        <h1 className="text-3xl font-bold tracking-tight">Masuk</h1>
                        <Link href="/register">
                            <p className="font-normal cursor-pointer text-[#03AC0E]">Daftar</p>
                        </Link>
                    </div>
                    <form className="flex flex-col gap-3 my-8">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-500"
                        >
                            Email
                        </label>
                        <div className={styles.input_group}>
                            <input
                                type="email"
                                name='email'
                                className={styles.input_text}
                            />
                            <span className='icon flex items-center px-4'>
                                <AiFillMail className="text-slate-400" size={15} />
                            </span>
                        </div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-500"
                        >
                            Password
                        </label>
                        <div className={styles.input_group}>
                            <input
                                type={`${show ? 'text' : 'password'}`}
                                name='password'
                                className={styles.input_text}
                            />
                            <span
                                className="icon flex items-center px-4"
                                onClick={() => setShow(!show)}
                            >
                                <AiFillEye className="text-slate-400" size={15} />
                            </span>
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green rounded-md hover:bg-green-200 focus:outline-none ">
                                Masuk
                            </button>
                        </div>
                        <p className="text-sm text-center text-slate-400 my-2">atau masuk dengan</p>
                        <div className="input-button ">
                            <button type="button" onClick={handleGoogleSignin} className={styles.button_custom}>
                                <Image
                                    src={`/assets/google.svg`}
                                    width={20}
                                    height={20}
                                />
                                <span className="font-semibold">Google</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
