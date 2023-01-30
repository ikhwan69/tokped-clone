import { useState } from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import DropdownCategory from './DropdownCategory'
import Link from 'next/link'
import { INavbar } from '../../types/type'
import { SlBag } from 'react-icons/sl'
import { Transition } from '@headlessui/react'
import HeadNew from './Head'

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
        <nav className='shadow-sm z-50 fixed w-full'>
            <HeadNew />
            <div className="flex bg-white items-center h-16 md:h-16 font-medium justify-around">
                <div className=" md:w-auto w-full md:ml-0 ml-5 flex justify-between">
                    <Image src="/assets/logo.png" alt='arwana' width={100} quality={100} height={70} />
                </div>
                <ul className="md:flex hidden items-center gap-8">
                    {NavMenu.map((nav, i) => (
                        <li key={i}>
                            <Link className='inline-block py-7' href={nav.href}>{nav.name}</Link>
                        </li>
                    ))}
                    <DropdownCategory />
                </ul>
                <div className=" gap-2 hidden md:inline-flex items-center">
                    <SlBag className='w-6 h-6 text-red-500 cursor-pointer' />
                    <Button variant='outline' size='small' title="Masuk" />
                    <Button variant='regular' size='small' title="Daftar" />
                </div>

                <div className="mr-5 flex md:hidden ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="border border-red-500 inline-flex items-center justify-center p-2 rounded-md text-red-500 focus:outline-none"
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
                    <div className="md:hidden bg-white shadow-md" id="mobile-menu">
                        <div
                            ref={ref}
                            className=" px-5 py-5 sm:px-3"
                        >
                            <ul className='space-y-5 text-sm font-medium'>
                                {NavMenu.map((nav, i) => (
                                    <li key={i}>
                                        <Link className='' href={nav.href}>{nav.name}</Link>
                                    </li>
                                ))}
                                <DropdownCategory />
                                <div className="py-3 space-x-3">
                                    <Button variant='outline' size='small' title="Masuk" />
                                    <Button variant='regular' size='small' title="Daftar" />
                                </div>
                            </ul>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}

export default Navbar