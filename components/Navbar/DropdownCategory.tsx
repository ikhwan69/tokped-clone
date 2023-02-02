import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { IDropdownCategory } from '../../types/type'

const Dropdown: IDropdownCategory[] = [
    { href: '/account-settings', name: 'Arwana Super Red', id: 1 },
    { href: '/support', name: 'Arwana Golden', id: 2 },
    { href: '/license', name: 'Arwana Albino', id: 3 },
]

const DropdownCategory = () => {
    return (

        <Menu as="div" className="relative inline-block">
            <div>
                <Menu.Button className="inline-flex w-full items-center text-gray-700">
                    Catalog
                    <AiOutlineDown
                        className="ml-2 -mr-1 md:h-4 md:w-4 w-3 h-3  text-gray-700"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute  w-56 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {Dropdown.map((item, index) => (
                        <>
                            <div className="px-1 py-1">
                                <Menu.Item >
                                    {({ active }) => (
                                        <button
                                            key={index} className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-3 py-2 text-base`}
                                        >
                                            {item.name}
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default DropdownCategory


