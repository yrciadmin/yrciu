'use client'
import { useRouter } from 'next/navigation'

interface LinkButtonProps {
    className?: string;
    children: React.ReactNode;
    link: string;
  }

const LinkButton = ({ children, className, link }: LinkButtonProps) => {
    const router = useRouter()

  return (
    <button
        onClick={() => router.push(`${link}`)}
        className={` text-white font-bold py-2 px-4 rounded ${className}`}
  >
    {children}
  </button>
  )
}

export default LinkButton