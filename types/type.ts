// import { IconType } from "react-icons"

export interface FormLogin {
  email: string
  password: string
}
export interface FormRegister {
  namaLengkap: string
  email: string
  password: string
  cpassword?: string
}

export interface INavigation {
  name: string
  href: string
  current: Boolean
}
export interface IDropdownProfile {
  name: string
  href: string
}

export interface IProvider {
  providers: JSX.Element
}

export interface ICategory {
  id: number
  title: string
}

export interface IDropdownCategory {
  name: string
  href: string
  id: number
}

export interface INavbar {
  name: string
  href: string
}
