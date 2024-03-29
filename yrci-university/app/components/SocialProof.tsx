import React from 'react'
import InfiniteScroll from '../ui/InfiniteScroll'

const SocialProof = () => {
  return (
    <div className='flex justify-center items-center h-fit sm:h-40 w-full bg-dark-teal mt-8'>
        <div className='flex justify-around w-full text-white font-semibold text-xl'>
          <InfiniteScroll/>
            {/* <p>AmeriCorps</p>
            <p>USDA ARS</p>
            <p>U.S. Department of Commerce</p>
            <p>NOAA</p>
            <p>U.S. Patent and Trademark </p> */}
        </div>
    </div>
  )
}   

export default SocialProof