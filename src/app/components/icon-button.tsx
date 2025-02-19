import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({
    disabled = false,
    className,
    ...props
}: IconButtonProps) {
    return (
        <button
            className={twMerge(
                `p-1.5 bg-gray-500 text-blue rounded-md ${!disabled ? 'cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300' : 'cursor-not-allowed'}`,
                className
            )}
            {...props}
        />
    )
}
