import React from 'react'
import InfiniteScroll from '../ui/InfiniteScroll'
import Image from 'next/image'
import AmericorpsLogo from '../../assets/logos/Americorps.png'
import USDAARSLogo from '../../assets/logos/USDA-ARS_white.png'
import CommerceLogo from '../../assets/logos/Department-of-commerce.png'
import NOAALogo from '../../assets/logos/NOAA_white.png'
import TrademarkLogo from '../../assets/logos/US_Patent_and_Trademark_Office_black and white.png'
const SocialProof = () => {
  return (
    <div className="h-40 relative overflow-hidden bg-dark-teal flex items-center mt-8" >
      <div className="absolute whitespace-nowrap animate-scroll-logo sm:animate-none flex w-[550px] sm:justify-around sm:w-full px-0">
      <Image src={AmericorpsLogo} alt="Americorps"  className='w-[221px] h-[50px] mx-3 sm:mr-0'/>
      <Image src={USDAARSLogo} alt="USDAARS" className='w-[221px] h-[50px] mx-3  sm:mr-0'/>
      <Image src={CommerceLogo} alt="Department of Commerce" className=' w-[221px] h-[50px] mx-3 sm:mr-0'/>
      <Image src={NOAALogo} alt="NOAA" className='w-[221px] h-[50px] mx-3  sm:mr-0' />
      
      <Image src={TrademarkLogo} alt="US Patent and Trademark" className='w-[221px] h-[50px] m-0 mx-3 block sm:hidden'/>
      <Image src={AmericorpsLogo} alt="Americorps"  className='w-[221px] h-[50px] m-0 mx-3 block sm:hidden'/>
      <Image src={USDAARSLogo} alt="USDAARS" className='w-[221px] h-[50px] m-0 mx-3 block sm:hidden'/>
      <Image src={CommerceLogo} alt="Department of Commerce" className=' w-[221px] h-[50px] m-0 mx-3 block sm:hidden'/>
      <Image src={NOAALogo} alt="NOAA" className='w-[221px] h-[50px] mx-3 block sm:hidden' />
      <Image src={TrademarkLogo} alt="US Patent and Trademark" className='w-[221px] h-[50px] mx-3 block sm:hidden'/>
      </div>
    </div>
  )
}   

export default SocialProof