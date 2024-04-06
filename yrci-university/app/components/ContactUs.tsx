import React from 'react'
import Heading from '../ui/Typography/Heading'
import Input from '../ui/Forms/Input'
import Paragraph from '../ui/Typography/Paragraph'

const ContactUs = () => {
  return (
    <section className='flex items-center justify-center w-full'>
      <div className='bg-muted-turquise md:bg-contact-us bg-no-repeat bg-cover sm:bg-center flex flex-col w-full rounded-3xl  h-[650px]  max-w-[1462px]  mt-2 '>
          <div className='flex justify-center items-center mt-10 mb4 sm:mt-70 flex-col width-full h-full'>
              <Heading className="text-white text-5xl font-bold mb-8">Contact Us</Heading>
              <Paragraph className=" text-dark-teal text-center text-lg font-normal  leading-[30.18px]">Stay up to date on the latest courses and updates from YRCI-U</Paragraph>

              <div className='mt-8 flex justify-center items-center w-full'>
                <Input/>
              </div>
              <div className='flex pb-4 justify-center'><Paragraph className='text-dark-teal text-sm mt-4 w-11/12 lg:w-7/12 text-center'>We're committed to your privacy. YRCI uses the information you provide to us to contact you about our content, products, and services. You may unsubscribe from these communications at any time.</Paragraph></div>
              
          </div>
      </div>
    </section>
  )
}

export default ContactUs