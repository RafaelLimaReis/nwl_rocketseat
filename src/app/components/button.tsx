import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ disabled = false, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={`flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full ${!disabled ? 'cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300' : 'cursor-not-allowed'}`}
        />
    )
}
