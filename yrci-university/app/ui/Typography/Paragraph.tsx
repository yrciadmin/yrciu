import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ParagraphProps {
    className?: string;
    children: React.ReactNode;
}

const Paragraph = ({children, className}: ParagraphProps) => {
  return (
    <p className={twMerge(`leading-loose 2xl:text-2xl 2xl:leading-loose ${className}`)}>{children}</p>
  )
}

export default Paragraph