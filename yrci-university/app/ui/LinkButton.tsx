'use client'
import Link from 'next/link';
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
    <Link href={link} target="_blank" className={twMerge(`text-white font-bold py-2 rounded px-4 w-6/12 text-center flex items-center justify-center 2xl:text-2xl 2xl:h-16 2xl:rounded-md ${className}`)}>
      {/* <button
          // onClick={() => router.push(`${link}`)}
          className={twMerge(` text-white font-bold py-2 rounded px-4 w-6/12  sm:w-44, ${className}`)}
    > */}
      {children}
    {/* </button> */}
  </Link>
  )
}

export default LinkButton