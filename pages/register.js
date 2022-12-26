import { useState } from 'react'
import trees from '../public/assets/register_new.png'
import Image from 'next/image'
import { AiFillEye, AiFillMail } from 'react-icons/ai'
import styles from '../styles/Form.module.css';
import Link from 'next/link';

export default function Register() {
    const [show, setShow] = useState(false)

    return (
        <div className='w-full h-screen flex'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 m-auto  sm:max-w-[900px]'>
                <div className='w-full flex align-center hidden md:block'>
                    <Image                 
                        src={trees}
                        alt="/"
                    />
                </div>
                <div className='p-4 flex flex-col justify-around rounded-sm  border shadow-custom'>
                    <div className="flex flex-col text-center gap-1 mt-5">
                        <h1 className="text-2xl font-bold">Daftar Sekarang</h1>
                        <p className="font-light  text-slate-500">
                            Sudah punya akun Tokopedia? &nbsp;
                            <span className='cursor-pointer text-[#03AC0E]'>
                                <Link href="/register">Masuk</Link>
                            </span>
                        </p>
                    </div>
                    <form className="flex flex-col gap-3 my-8 px-10">
                        <label
                            htmlFor="email"
                            className="block text-sm font-normal  text-gray-500"
                        >
                            Nama Lengkap
                        </label>
                        <div className={styles.input_group}>
                            <input
                                type="text"
                                name='nama'
                                className={styles.input_text}
                            />
                            <span className='icon flex items-center px-4'>
                                <AiFillMail className="text-slate-400" size={15} />
                            </span>
                        </div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-normal  text-gray-500"
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
                            className="block text-sm font-normal text-gray-500"
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
                    </form>
                </div>
            </div>
        </div>
    )
}