import React from 'react'

interface HeadingProps {
    className?: string;
    children: React.ReactNode;
  }

const Heading = ({children, className} : HeadingProps) => {
  return (
    <h1 className={`font-bold sm:text-6xl text-5xl ${className}`}>{children}</h1>
  )
}

export default Heading