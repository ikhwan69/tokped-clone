import { useState } from "react";
import trees from "../public/assets/register_new.png";
import Image from "next/image";
import { AiFillEye, AiFillMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";
import { toast } from "react-toastify";

import { FormRegister } from "../type";
import axios from "axios";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner";

export default function Register() {

    const [show, setShow] = useState({ password: false, cpassword: false });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const formik = useFormik<FormRegister>({
        initialValues: {
            namaLengkap: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validate: registerValidate,
        onSubmit,
    });

    async function onSubmit(values: FormRegister) {
        setIsLoading(true);
        const res = await axios
            .post("/api/auth/register", values, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then(async () => {
                toast.success('Success');
                setTimeout(() => {
                    setIsLoading(false);
                    return (window.location.href = `${process.env.NEXT_PUBLIC_URL}`);
                }, 3000)
            })
            .catch((error) => {
                toast.error(error.response.data.error)
                setIsLoading(false);
            });
    }

    const namaLengkapValidate = `${formik.errors.namaLengkap && formik.touched.namaLengkap
        ? "border-2 border-rose-600 focus:border-rose-600"
        : ""
        }`;
    const emailValidate = `${formik.errors.email && formik.touched.email
        ? "border-2 border-rose-600 focus:border-rose-600"
        : ""
        }`;
    const passwordValidate = `${formik.errors.password && formik.touched.password
        ? "border-2 border-rose-600 focus:border-rose-600"
        : ""
        }`;
    const cpasswordValidate = `${formik.errors.cpassword && formik.touched.cpassword
        ? "border-2 border-rose-600 focus:border-rose-600"
        : ""
        }`;

    return (
        <div className="flex w-full my-14">
            <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2 m-auto  sm:max-w-[950px]">
                <div className="hidden md:block">
                    <Image src={trees} alt="/" />
                </div>
                <div className="flex flex-col justify-center gap-5 md:p-10 p-6 border rounded-sm shadow-custom">
                    <div className="flex flex-col text-center">
                        <h1 className="text-2xl font-bold">Daftar Sekarang</h1>
                        <p className="font-light text-slate-500">
                            Sudah punya akun Tokopedia? &nbsp;
                            <span className="cursor-pointer text-[#03AC0E]">
                                <Link href="/login">Masuk</Link>
                            </span>
                        </p>
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="flex flex-col gap-1"
                    >
                        <label
                            htmlFor="nama"
                            className="block mt-2 text-sm font-normal text-gray-500"
                        >
                            Nama Lengkap
                        </label>
                        <div className={` ${styles.input_group} ${namaLengkapValidate}`}>
                            <input
                                type="text"
                                // name='nama'
                                className={styles.input_text}
                                {...formik.getFieldProps("namaLengkap")}
                            />
                            <span className="flex items-center px-4 icon">
                                <FaUserAlt className="text-slate-400" size={15} />
                            </span>
                        </div>
                        {namaLengkapValidate && (
                            <span className="text-sm text-rose-500">
                                {formik.errors.namaLengkap}
                            </span>
                        )}
                        <label
                            htmlFor="email"
                            className="block mt-2 text-sm font-normal text-gray-500"
                        >
                            Email
                        </label>
                        <div className={`${styles.input_group} ${emailValidate}`}>
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
                            className="block mt-2 text-sm font-normal text-gray-500"
                        >
                            Password
                        </label>
                        <div className={` ${styles.input_group} ${passwordValidate}`}>
                            <input
                                type={`${show.password ? "text" : "password"}`}
                                // name='password'
                                className={styles.input_text}
                                {...formik.getFieldProps("password")}
                            />
                            <span
                                className="flex items-center px-4 icon"
                                onClick={() => setShow({ ...show, password: !show.password })}
                            >
                                <AiFillEye className="text-slate-400" size={15} />
                            </span>
                        </div>
                        {passwordValidate && (
                            <span className="text-sm text-rose-500">
                                {formik.errors.password}
                            </span>
                        )}
                        <label
                            htmlFor="password"
                            className="block mt-2 text-sm font-normal text-gray-500"
                        >
                            Confirm Password
                        </label>
                        <div className={`${styles.input_group} ${cpasswordValidate}`}>
                            <input
                                type={`${show.cpassword ? "text" : "password"}`}
                                // name='cpassword'
                                className={styles.input_text}
                                {...formik.getFieldProps("cpassword")}
                            />
                            <span
                                className="flex  items-center px-4 icon"
                                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
                            >
                                <AiFillEye className="text-slate-400" size={15} />
                            </span>
                        </div>
                        {cpasswordValidate && (
                            <span className="text-sm text-rose-500">
                                {formik.errors.cpassword}
                            </span>
                        )}
                        <div className="mt-6">
                            <Button isLoading={isLoading} variant="regular" size="regular">
                                {isLoading ? <Spinner /> : "Masuk"}
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
