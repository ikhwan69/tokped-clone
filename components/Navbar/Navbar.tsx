import { useState } from 'react'
import Image from 'next/image'
import { BsCart } from 'react-icons/bs'
import Button from '../Button/Button'
import DropdownCategory from './DropdownCategory'
import Link from 'next/link'
import { INavbar } from '../../types/type'

import { IoMdClose } from 'react-icons/io'
import { RiMenuFill } from 'react-icons/ri'
import { Transition } from '@headlessui/react'

const NavMenu: INavbar[] = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About Us' },
    { href: '/gallery', name: 'Our Gallery' },
    { href: '/blog', name: 'Blog' },
    { href: '/contact', name: 'Contact Us' }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <nav className='shadow-sm fixed w-full'>
            <div className="flex items-center h-16 md:h-20 font-medium justify-around">
                <div className="z-50 p-5 w-full flex justify-between">
                    <Image src="/assets/logo.png" alt='arwana' width={90} height={250} />
                </div>
                <ul className="md:flex hidden items-center gap-8">
                    {NavMenu.map((nav, i) => (
                        <li key={i}>
                            <Link className='inline-block py-7' href={nav.href}>{nav.name}</Link>
                        </li>
                    ))}
                    <DropdownCategory />
                </ul>
                <div className=" gap-2 hidden md:inline-flex">
                    <Button variant='outline' size='small' title="Masuk" />
                    <Button variant='regular' size='small' title="Daftar" />
                </div>
                <div className="mr-10 flex md:hidden ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="border border-red-500 inline-flex items-center justify-center p-2 rounded-md text-red-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-red-500 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg
                                className="block h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-300 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden shadow-md" id="mobile-menu">
                        <div
                            ref={ref}
                            className=" px-5 py-5 sm:px-3"
                        >
                            <ul className='space-y-5 text-sm'>
                                {NavMenu.map((nav, i) => (
                                    <li key={i}>
                                        <Link className='' href={nav.href}>{nav.name}</Link>
                                    </li>
                                ))}
                                <DropdownCategory />
                            </ul>
                        </div>
                    </div>

                )}
            </Transition>
        </nav>
    )
}

export default Navbar