import { useState } from 'react'
import trees from '../public/assets/register_new.png'
import Image from 'next/image'
import { AiFillEye, AiFillMail } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import { useFormik } from 'formik'
import { registerValidate } from '../lib/validate'
import { useRouter } from 'next/router'

export default function Register() {
    const [show, setShow] = useState({ password: false, cpassword: false })
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            namaLengkap: '',
            email: '',
            password: '',
            cpassword: ''
        },
        validate: registerValidate,
        onSubmit
    });

    async function onSubmit(values) {
        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options)
        .then(res => res.json())
        .then((data) => {
            if(data) router.push(`${process.env.NEXTAUTH_URL}`)
        })
    }

    const namaLengkapValidate = `${formik.errors.namaLengkap && formik.touched.namaLengkap ? "border-2 border-rose-600 focus:border-rose-600" : ""}`
    const emailValidate = `${formik.errors.email && formik.touched.email ? "border-2 border-rose-600 focus:border-rose-600" : ""}`
    const passwordValidate = `${formik.errors.password && formik.touched.password ? "border-2 border-rose-600 focus:border-rose-600" : ""}`
    const cpasswordValidate = `${formik.errors.cpassword && formik.touched.cpassword ? "border-2 border-rose-600 focus:border-rose-600" : ""}`

    return (
        <div className='w-full h-screen flex'>
            <div className='  grid grid-cols-1 gap-20 md:grid-cols-2 m-auto  sm:max-w-[950px]'>
                <div className=' hidden md:block'>
                    <Image
                        src={trees}
                        className="mt-24"
                        alt="/"
                    />
                </div>
                <div className='p-4 flex flex-col justify-around rounded-sm  border shadow-custom'>
                    <div className="flex flex-col text-center gap-1 mt-5">
                        <h1 className="text-2xl font-bold">Daftar Sekarang</h1>
                        <p className="font-light  text-slate-500">
                            Sudah punya akun Tokopedia? &nbsp;
                            <span className='cursor-pointer text-[#03AC0E]'>
                                <Link href="/login">Masuk</Link>
                            </span>
                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 my-8 px-10">
                        <label
                            htmlFor="nama"
                            className="block text-sm font-normal  text-gray-500"
                        >
                            Nama Lengkap
                        </label>
                        <div className={` ${styles.input_group} ${namaLengkapValidate}`}>
                            <input
                                type="text"
                                name='nama'
                                className={styles.input_text}
                                {...formik.getFieldProps('namaLengkap')}
                            />
                            <span className='icon flex items-center px-4'>
                                <FaUserAlt className="text-slate-400" size={15} />
                            </span>
                        </div>
                        {namaLengkapValidate && <span className='text-sm text-rose-500'>{formik.errors.namaLengkap}</span>}
                        <label
                            htmlFor="email"
                            className="block text-sm font-normal  text-gray-500"
                        >
                            Email
                        </label>
                        <div className={`${styles.input_group} ${emailValidate}`}>
                            <input
                                type="email"
                                name='email'
                                className={styles.input_text}
                                {...formik.getFieldProps('email')}
                            />
                            <span className='icon flex items-center px-4'>
                                <AiFillMail className="text-slate-400" size={15} />
                            </span>
                        </div>
                        {emailValidate && <span className='text-sm text-rose-500'>{formik.errors.email}</span>}
                        <label
                            htmlFor="password"
                            className="block text-sm font-normal text-gray-500"
                        >
                            Password
                        </label>
                        <div className={` ${styles.input_group} ${passwordValidate}`}>
                            <input
                                type={`${show.password ? 'text' : 'password'}`}
                                name='password'
                                className={styles.input_text}
                                {...formik.getFieldProps('password')}
                            />
                            <span
                                className="icon flex items-center px-4"
                                onClick={() => setShow({ ...show, password: !show.password })}
                            >
                                <AiFillEye className="text-slate-400" size={15} />
                            </span>
                        </div>
                        {passwordValidate && <span className='text-sm text-rose-500'>{formik.errors.password}</span>}
                        <label
                            htmlFor="password"
                            className="block text-sm font-normal text-gray-500"
                        >
                            Confirm Password
                        </label>
                        <div className={`${styles.input_group} ${cpasswordValidate}`}>
                            <input
                                type={`${show.cpassword ? 'text' : 'password'}`}
                                name='cpassword'
                                className={styles.input_text}
                                {...formik.getFieldProps('cpassword')}
                            />
                            <span
                                className="icon flex items-center px-4"
                                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
                            >
                                <AiFillEye className="text-slate-400" size={15} />
                            </span>
                        </div>
                        {cpasswordValidate && <span className='text-sm text-rose-500'>{formik.errors.cpassword}</span>}
                        <div className="mt-6">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green rounded-md hover:bg-green-200 focus:outline-none ">
                                Daftar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}