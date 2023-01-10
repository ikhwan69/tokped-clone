// import React from 'react'
// import { IProperties } from '../../type';

// export default function Button({ className="", isLoading, children }: IProperties) {

//   return (
//     <button
//       className={`font-medium w-full px-4 py-2 tracking-wide transition-colors duration-200 transform rounded-md hover:bg-blue-700 focus:outline-none ${isLoading && 'opacity-25'
//         }` + className}
//         disabled={isLoading}
//     >
//       {children}
//     </button>
//   )
// }


import {type ButtonHTMLAttributes, type ReactNode} from 'react'
import clsx from 'clsx'


type buttonVariant = "regular" | "outline" | "ghost" | "link"
type buttonSize = "regular" | "large" | "small"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: buttonSize
  variant?: buttonVariant
  children: ReactNode
}

const Button = ({
  size = "regular",
  variant="regular",
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        "font-medium w-full tracking-wide transition-colors duration-200 transform rounded-md hover:bg-blue-700",
        className,
        size === "large" && "px-5 py-3 text-base",
        size === "regular" && "px-4 py-2 text-base",
        size === "small" && "px-2 py-2",
        variant === "regular" && 
          "bg-blue-500 text-white hover:bg-blue-700 disabled:hover:bg-blue-500"
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
