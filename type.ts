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

export interface INavigation {
    name: string;
    href: string;
    current: Boolean;
}
export interface IDropdownProfile {
    name: string;
    href: string;
}
