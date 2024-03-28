import Image from 'next/image';
import React from 'react'

interface CardProps {
    className?: string
    iconClassName?: string
    children: React.ReactNode
    icon: boolean
    icon_img: any
}

const Card = ({children, className, icon, icon_img, iconClassName}: CardProps) => {
  return (
    <div className={`w-[344.01px] h-[350.05px] bg-white rounded-[10.06px] shadow border-2 ${className}`}>
        {icon && (
            <div className={`h-16 w-16 rounded-full flex items-center justify-center ${iconClassName}`}>
                <Image
                    src={icon_img}
                    alt="icon"
                    height={56}
                    width={56}
                />
            </div>)}
        {children}
    </div>
  )
}

export default Card