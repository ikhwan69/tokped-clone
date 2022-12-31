export interface FormLogin {
    email: string;
    password: string;
}

export interface FormRegister {
    namaLengkap: string;
    email: string;
    password: string;
    cpassword?: string;
}