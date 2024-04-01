import Image from 'next/image';
import {useState} from 'react'
import { twMerge } from 'tailwind-merge';

interface CardProps {
    className?: string
    iconClassName?: string
    children: React.ReactNode
    icon: boolean
    icon_img?: any
    title?: string
}

const Card = ({children, className, icon, icon_img, iconClassName, title}: CardProps) => {

  return (
    <div className={twMerge(`w-[344.01px] h-[350.05px] bg-white rounded-[10.06px] shadow border-2 border-dark-gray, ${className}`)}>
        {icon && (
            <div className='flex items-center'>
                <div className={`h-16 w-16 rounded-full flex items-center justify-center mr-4 ${iconClassName}`}>
                    <Image
                        src={icon_img}
                        alt="icon"
                        height={56}
                        width={56}
                    />
                </div>
                <h1 className='font-extrabold capitalize'>{title}</h1>
            </div>)}
        {children}
    </div>
  )
}

export default Card