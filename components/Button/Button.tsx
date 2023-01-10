
import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

type buttonVariant = "regular" | "outline" | "ghost" | "link"
type buttonSize = "regular" | "large" | "small"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: buttonSize
  variant?: buttonVariant
  children: ReactNode
  isLoading?: boolean
}

const Button = ({
  size = "regular",
  variant = "regular",
  children,
  className,
  isLoading,
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
        " text-white hover:bg-blue-700 disabled:hover:bg-blue-500 bg-blue-500",
        isLoading === true && "cursor-not-allowed"
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
