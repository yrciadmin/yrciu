"use client"
import { icon } from '@fortawesome/fontawesome-svg-core'
import { title } from 'process'
import {useState} from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image';

interface CardProps {
    className?: string
    iconClassName?: string
    children: React.ReactNode
    icon: boolean
    icon_img?: any
    title?: string
}
const ExpandableCard = ({children, className, icon, icon_img, iconClassName, title}: CardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
      setIsExpanded(!isExpanded);
    };
      
    return (
    <div 
    className={twMerge(`block md:hidden w-[344.01px] h-[350.05px] bg-white rounded-[10.06px] shadow border-2 border-dark-gray overflow-hidden, ${className}`)}
    style={{
        height: isExpanded ? '350px' : '190px',
        width: '345px',
        transition: 'width 0.3s ease-in-out',
        cursor: 'pointer',
      }}
    //   onMouseEnter={handleExpand} // Expand on hover
    //   onMouseLeave={handleExpand} // Revert on mouse leave
      onClick={handleExpand} // Also expand/revert on click
      >
    {icon && (
        <div className='flex items-center'>
            <div className={`h-16 w-16 rounded-full flex items-center justify-center mr-8 ${iconClassName}`}>
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
</div>  )
}

export default ExpandableCard