import React from 'react'
import InfiniteScroll from '../ui/InfiniteScroll'
import Image from 'next/image'
import AmericorpsLogo from '../../assets/logos/Americorps.png'
import USDAARSLogo from '../../assets/logos/USDA-ARS_white.png'
import CommerceLogo from '../../assets/logos/Department-of-commerce.png'
import NOAALogo from '../../assets/logos/NOAA_white.png'
import TrademarkLogo from '../../assets/logos/US_Patent_and_Trademark_Office_black and white.png'
import Heading from '../ui/Typography/Heading'

const images = [
  {src: `${AmericorpsLogo}`, name: "Ameri Corp"},
  {src: `${USDAARSLogo}`, name: "USDA"},
  {src: `${CommerceLogo}`, name: "US Commerce"},
  {src: `${NOAALogo}`, name: "NOAA"},
  {src: `${TrademarkLogo}`, name: "US Trademark"}
]

const SocialProof = () => {
  return (
    <>
    <div className='flex justify-start mt-8 sm:mt-20 pl-2 sm:justify-center'><Heading className='text-2xl font-extrabold text-dark-teal capitalize sm:text-2xl lg:text-4xl'>Elevating Workforce Excellence: <span className='text-yrci-red'>Federal Agencies Choosing YRCI University</span></Heading></div>
    <div className='h-24 xl:h-40  bg-dark-teal mt-8 flex items-center w-full'>
<InfiniteScroll  speed={2000}/>
     {/* <div className="h-40 relative overflow-hidden bg-dark-teal flex items-center mt-8" > */}
      <div className="hidden absolute whitespace-nowrap xl:flex w-[550px] sm:justify-around sm:w-full px-0">
        <Image src={AmericorpsLogo} alt="Americorps"  className='w-[221px] h-[50px] mx-3 sm:mr-0'/>
        <Image src={USDAARSLogo} alt="USDAARS" className='w-[221px] h-[50px] mx-3  sm:mr-0'/>
        <Image src={CommerceLogo} alt="Department of Commerce" className=' w-[221px] h-[50px] mx-3 sm:mr-0'/>
        <Image src={NOAALogo} alt="NOAA" className='w-[221px] h-[50px] mx-3  sm:mr-0' />
      
      </div>
      </div>
      </>
    // </div>
  )
}   

export default SocialProof