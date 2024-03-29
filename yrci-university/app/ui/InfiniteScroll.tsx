import React from 'react'
import AmericorpsLogo from '../../assets/logos/Americorps.png'
import Image from 'next/image'
import USDAARSLogo from '../../assets/logos/USDA-ARS_white.png'
import CommerceLogo from '../../assets/logos/Department-of-Commerce_black and white.png'
import NOAALogo from '../../assets/logos/NOAA_white.png'
import TrademarkLogo from '../../assets/logos/US_Patent_and_Trademark_Office_black and white.png'




interface InfiniteScrollProps {
    images: string[];
    speed: number;
}

const InfiniteScroll = () => {
  return (
    <div className='relative w-full overflow-hidden m-0 p-0'>
        <div className='overflow-hidden h-40 whitespace-nowrap m-0 flex items-center justify-between w-full animate-scroll-logo sm:animate-none'>
            <div className='flex justify-center items-center mx-2 sm:w-36 sm:h-16 sm:mx-4 my-0 sm:my-4'>
                <Image src={AmericorpsLogo} alt="Americorps" />
            </div>
            <div className='flex justify-center items-center mx-2 sm:w-36 sm:h-16 sm:mx-4 my-0 sm:my-4'>        
            <Image src={USDAARSLogo} alt="USDAARS"/>
            </div>
            <div className='flex justify-center items-center mx-2 sm:w-36 sm:h-16 sm:mx-4 my-0 sm:my-4'>
                <Image src={CommerceLogo} alt="Department of Commerce"/>
            </div>
            <div className='flex justify-center items-center mx-2 sm:w-36 sm:h-16 sm:mx-4 my-0 sm:my-4'>
                <Image src={NOAALogo} alt="NOAA" />
            </div>
            <div className='flex justify-center items-center mx-2 sm:w-36 sm:h-16 sm:mx-4 my-0 sm:my-4'>
                <Image src={TrademarkLogo} alt="US Patent and Trademark"/>
            </div>

        </div>
    </div>
  )
}

export default InfiniteScroll