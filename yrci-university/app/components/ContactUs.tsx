import React from 'react'
import Heading from '../ui/Typography/Heading'
import Input from '../ui/Forms/Input'
import Paragraph from '../ui/Typography/Paragraph'

//borders border-4 xs:border-orange-500  sm:border-slate-500   md:border-mustard-yellow  lg:border-indigo-500 xl:border-green-500  2xl:border-yrci-red
const ContactUs = () => {
  return (
    <section className='flex items-center bg-muted-turquise md:bg-contact-us bg-no-repeat bg-cover rounded-3xl sm:bg-center justify-center  max-w-[1462px] '>
      <div className=' flex flex-col w-full '>
          <div className='flex justify-center items-center mt-8 mb-4 xs:mt-4 flex-col w-full h-full'>
              <Heading className="text-white text-4xl xs:text-3xl font-bold mb-4 xs:mt-0 xs:mb-2 md:mb-0">Contact Us</Heading>
              <Paragraph className=" text-dark-teal text-center text-lg font-normal lg:mb-2 leading-[30.18px]">Stay up to date on the latest courses and updates from YRCI-U</Paragraph>

              <div className='mt-8 xs:mt-2 sm:mt-0 flex justify-center items-center w-full'>
                <Input/>
              </div>
              <div className='flex pb-4 justify-center'><Paragraph className='text-dark-teal text-sm mt-4 w-11/12 md:w-8/12 text-center'>We're committed to your privacy. YRCI uses the information you provide to us to contact you about our content, products, and services. You may unsubscribe from these communications at any time.</Paragraph></div>
              
          </div>
      </div>
    </section>
  )
}

export default ContactUs