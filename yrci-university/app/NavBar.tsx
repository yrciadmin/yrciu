import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './../assets/YRCIU-ColorSmall.png'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center pr-16'>
        <Link href="/">
            <Image
                src={Logo}
                alt="YRCI University Logo"
                width={200}
                height={200}
            />
        </Link>
        <ul className='flex w-1/2 justify-between font-bold text-xl'>
            <li> <Link href="/">Who We Are</Link></li>
            <li> <Link href="/">What We Do</Link></li>
            <li> <Link href="/">Work With Us</Link></li>
            <li> <Link href="/">Careers</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar