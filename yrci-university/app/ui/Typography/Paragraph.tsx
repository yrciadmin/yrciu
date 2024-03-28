import React from 'react'

interface ParagraphProps {
    className?: string;
    children: React.ReactNode;
}

const Paragraph = ({children, className}: ParagraphProps) => {
  return (
    <p className={`leading-loose ${className}`}>{children}</p>
  )
}

export default Paragraph