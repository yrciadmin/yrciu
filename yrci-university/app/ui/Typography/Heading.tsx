import React from 'react'
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
    className?: string;
    children: React.ReactNode;
  }

const Heading = ({children, className} : HeadingProps) => {
  return (
    <h1 className={twMerge(`font-bold sm:text-6xl text-3xl ${className}`)}>{children}</h1>
  )
}

export default Heading