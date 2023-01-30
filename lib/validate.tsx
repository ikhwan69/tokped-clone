import { FormRegister } from '../types/type'
import {FormikErrors} from 'formik'

export default function login_validate(values : any) {
    const errors : FormikErrors<FormRegister> = {};

    if(!values.email) {
        errors.email = 'Email harus diisi';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Format email salah';
    }

      // validation for password
      if(!values.password){
        errors.password = "Required";
    } else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "Must be greater then 8 and less then 20 characters long";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid Password";
    }

    return errors;
}

export function registerValidate(values : any){
    const errors : FormikErrors<FormRegister>  = {};

    if(!values.namaLengkap){
        errors.namaLengkap = "Required";
    }else if(values.namaLengkap.includes(" ")){
        errors.namaLengkap = "Invalid Nama Lengkap...!"
    }

    if (!values.email) {
        errors.email = 'Email harus diisi';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Format email salah';
    }

       // validation for password
       if(!values.password){
        errors.password = "Required";
    } else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "Must be greater then 8 and less then 20 characters long";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid Password";
    }

    // validate confirm password
    if(!values.cpassword){
        errors.cpassword = "Required";
    } else if(values.password !== values.cpassword){
        errors.cpassword = "Password Not Match...!"
    } else if(values.cpassword.includes(" ")){
        errors.cpassword = "Invalid Confirm Password"
    }

    return errors;
}