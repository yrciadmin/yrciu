import React from 'react'
import Heading from '../ui/Typography/Heading'
import Paragraph from '../ui/Typography/Paragraph'
import ReviewsCarouselMobile from '../ui/ReviewsCarouselMobile'
import ReviewsCarousel from '../ui/ReviewsCarousel'

const data = [
    {id: 1, content: `I thoroughly appreciate and value the training received. The instructors and digital training environment were excellent. My only recommendation, which has already been suggested in training, is to definitely implement the reference to material (i.e. This is found in chapter #, section # of the DEOH or Vet Guide) into the SCORM and test portion of the syllabus. `, title: `DE Test Prep`},
    {id: 2, content: `The trainers are awesome. Love every part of it and it's all necessary and beneficial.`, title: `DE Test Prep`},
    {id: 3, content: `The instructors are very good at explaining the training modules and inquiring about whether we have questions or not. The courses are effective especially when reviewing together.`, title: `Federal Staffing Training`},
    {id: 4, content: `This was the best course EVER! and the resources provided are invaluable!!`, title: `DE Test Prep`},
    {id: 5, content: `The trainer’s delivery, professionalism and knowledge and ability to keep us all focus. Did not want his session to end.  `, title: `Client First: Working with Purpose and Professionalism`},
    {id: 6, content: `I love the way the trainer illustrates and explains through each function and breaks it down.`, title: `DE Test Prep`},
]

const Reviews = () => {
  return (
    <section className='bg-reviews flex flex-col xl:pl-16 xl:pb-8'>
        <div className='flex flex-col justify-center items-center xl:items-start px-4 md:px-20 xl:px-0'>
            <div className='flex lg:justify-center lg:items-center mt-8'><Heading className='capitalize text-[1.5rem] md:text-4xl xl:text-6xl text-dark-teal sm:text-black'>From Students to Success</Heading></div>
            <Paragraph className='mt-8 w-full xl:w-1/2'>The YRCI University (YRCI-U) is a training and re-skilling program designed by YRCI’s own subject matter experts to address an expertise shortage in the Federal HR market as Baby Boomers continue to retire and leave the workforce.</Paragraph>
        </div>
        <div className='mt-20 hidden lg:flex md:ml-10 lg:mr-40 justify-self-end w-full'>
            <ReviewsCarousel data={data}/>
        </div>
        <div className='mt-20 hidden md:flex md:ml-10 lg:mr-40 justify-self-end w-full'>
            <ReviewsCarousel data={data} num_slides={2}/>
        </div>
        <div className='flex md:mx-20 md:hidden'>
            <ReviewsCarouselMobile data={data} color="#134d61"/>
        </div>
    </section>
  )
}

export default Reviews