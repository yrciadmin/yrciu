import React from 'react'
import Heading from '../../ui/Typography/Heading'
import { faqs } from './data'
import QA from './QA'
import Paragraph from '../../ui/Typography/Paragraph'
  
const Questions = () => {
  return (
    <section className='flex flex-col items-center justify-center '>
        <Heading className='mt-8 text-dark-teal sm:text-3xl md:text-4xl xl:text-6xl text-center'>Frequently Asked Questions</Heading>
        <Paragraph className='text-muted-turquise text-center'>The answers to your questions about YRCI University</Paragraph>

        <QA faqData={faqs}/>
        {
        /* <div className='justify-between ml-8'>
            {faqs.map((item, index) => (
                <div key={index} className='flex flex-col justify-center m-8'>
                    <h1 className='font-bold text-3xl'>{item.question}</h1>
                    <p>{item.answer}</p>
                </div>
            ))}
        </div> */}
    </section>
  )
}

export default Questions