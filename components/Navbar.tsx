import { INavigation } from "../type";
import { Disclosure, } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { signOut, useSession } from 'next-auth/react'
import Link from "next/link";
import DropdownProfile from "./DropdownProfile";

const navigation: INavigation[] = [
  { name: "Home", href: "/", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calender", href: "/calender", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function handleSignout() {
  signOut()
}

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile Menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FiMenu className="block w-6 h-6" />
                  ) : (
                    <IoClose className="block w-6 h-6" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <>
                  {!session ? (
                    <>
                      {/* <Link
                        className="flex items-center block gap-2 px-4 py-2 text-sm text-gray-300"
                        href={"/register"}
                      >
                        Daftar
                      </Link> */}
                      <Link
                        className="flex items-center block gap-2 px-4 py-2 text-sm text-gray-300"
                        href={"/login"}
                      >
                        Login
                      </Link>
                    </>
                  ) : (             
                      /* Profile dropdown */
                      <DropdownProfile handleSignout={handleSignout} classNames={classNames} />                
                  )}
                </>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

