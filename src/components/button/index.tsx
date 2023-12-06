import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg' | 'full'
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  className,
  ...props
}) => {
  const baseClasses =
    'rounded-lg font-manrope font-medium transition-all duration-100'

  const sizeClasses = {
    sm: 'text-sm px-[10px] py-[5px]',
    md: 'px-[20px] py-[10px]',
    lg: 'text-lg px-[30px] py-[15px]',
    full: 'w-full px-[20px] py-[10px]',
  }

  const variantClasses = {
    primary:
      'bg-transparent border-gray-500 border-[1.5px] text-gray-300 hover:bg-orange-200 hover:text-white hover:border-orange-200',
    secondary:
      'flex gap-[10px] items-center justify-center border border-orange-200 hover:border-orange-300 bg-orange-200 text-white hover:bg-orange-300',
    tertiary: 'bg-transparent text-black hover:text-orange-200 durantion-300',
  }

  const combinedClasses = `${baseClasses} ${sizeClasses[size || 'md']} ${
    variantClasses[variant || 'primary']
  } ${className}`

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
