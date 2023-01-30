import React from 'react'
import { BsFillTelephoneFill, BsFillQuestionSquareFill } from 'react-icons/bs'
import { IoMdMailUnread } from 'react-icons/io'
import { SiHelpdesk } from 'react-icons/si'

const HeadNew = () => {
    return (
        <div className='bg-red-600 md:flex hidden  py-1 md:py-2 text-gray-50'>
            <div className="w-[1200px] flex mx-auto justify-between">
                <div className='w-3/4'>
                    <div className='md:flex flex items-center md:gap-2 gap-1'>
                        <BsFillTelephoneFill className='w-4 h-4' />
                        <p className='md:text-sm font-light'>+88012 3456 7894</p>
                        <IoMdMailUnread className='w-4 h-4 ml-5' />
                        <p className='md:text-sm font-light'>ahmadarwana@gmail.com</p>
                    </div>
                </div>
                <div className='w-4/4'>
                    <div className='flex items-center gap-2'>
                        <BsFillQuestionSquareFill className='w-4 h-4' />
                        <p className='text-sm'>FAQ</p>
                        <SiHelpdesk className='w-4 h-4 ml-5' />
                        <p className='text-sm'>Butuh bantuan?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadNew