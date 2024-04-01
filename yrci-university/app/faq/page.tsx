import React from 'react'
import Heading from '../ui/Typography/Heading'
import { faqs } from './data'
  
const Questions = () => {
  return (
    <section className='flex flex-col items-center justify-center border-yrci-red'>
        <Heading className='mt-8 text-dark-teal sm:text-3xl md:text-4xl xl:text-6xl text-center'>General FAQs YRCI University LMS</Heading>
        <div className='justify-between ml-8'>
            {faqs.map((item, index) => (
                <div className='flex flex-col justify-center m-8'>
                    <h1 className='font-bold text-3xl'>{item.question}</h1>
                    <p>{item.answer}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Questions