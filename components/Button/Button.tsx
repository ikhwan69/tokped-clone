
import { type ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import Spinner from '../Spinner'
import style from '../../styles/Button.module.css'

type buttonVariant = "regular" | "outline"
type buttonSize = "regular" | "large" | "small"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  size?: buttonSize
  variant?: buttonVariant
  fullWidth?: boolean
  isLoading?: boolean
  onClick?: () => void
}

const Button = ({
  size = "regular",
  variant = "regular",
  title,
  fullWidth,
  isLoading,
  onClick,
  ...props
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `${style.button}`,
        fullWidth ? 'w-full' : 'w-auto',
        size === 'large' ? 'px-5 py-3' : size === 'regular' ? 'px-4 py-3' : size === 'small' && 'px-4 py-1.5',
        variant === "regular" && `${style.button_reguler}`,
        variant === 'outline' && `${style.button_outline}`,
        isLoading && "cursor-not-allowed"
      )}
      {...props}
    >
      {isLoading ? <Spinner /> : `${title}`}

    </button>
  )
}

export default Button
