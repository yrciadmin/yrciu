'use client'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge';
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
        className={twMerge(` text-white font-bold py-2 rounded px-4 w-6/12  sm:w-44, ${className}`)}
  >
    {children}
  </button>
  )
}

export default LinkButton