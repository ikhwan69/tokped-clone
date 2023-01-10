import React from 'react'
import { IProperties } from '../../type';



function classnames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
export default function Button({size, bgColor, textColor, children}:IProperties) {
   
  return (
    <button
        className={classnames(
            `bg-${bgColor} text-${textColor} font-medium w-full px-4 py-2 tracking-wide transition-colors duration-200 transform rounded-md hover:bg-blue-700 focus:outline-none `, {
                "text-xs" : size === 'sm',
                "text-xl" : size === 'lg'
            }
        )}
    >
            {children}
        </button>
  )
}
