import React from 'react'
import Heading from '../ui/Typography/Heading'
import Paragraph from '../ui/Typography/Paragraph'
import ReviewsCarouselMobile from '../ui/ReviewsCarouselMobile'
import ReviewsCarousel from '../ui/ReviewsCarousel'

const data = [
    {id: 1, value: "INVALUABLE", content: `This course should TRUMP the courses given by the “Other” company (GS).  It is far more interactive and prepares you for the real exam.`, title: `DE Test Prep`},

    {id: 1, value: "OUTSTANDING", content: `YRCI should be commended for the outstanding training. Over the years I have had OPM/Other Agency training that did not compare to this training. It was TERRIFIC! The trainers are awesome. Love every part of it and it's all necessary and beneficial.`, title: `DE Test Prep`},
    {id: 2, value: "EFFECTIVE", content: `The instructors are very good at explaining the training modules and inquiring about whether we have questions or not. The courses are effective especially when reviewing together.`, title: `Federal Staffing Training`},
    {id: 3, value: `INVALUABLE`, content: `This was the best course EVER! and the resources provided are invaluable!!`, title: `DE Test Prep`},
    {id: 4, value: "MEMORABLE ", content: `The trainer’s delivery, professionalism and knowledge and ability to keep us all focus. Did not want his session to end.  `, title: `Client First: Working with Purpose and Professionalism`},
    {id: 5, value: "EXCELLENT", content: `I love the way the trainer illustrates and explains through each function and breaks it down.`, title: `DE Test Prep`},

    {id: 6, value: "engaging", content: `The instructor engaged the attendees with exercises, which made the workshop lessons learned memorable for practical use.  `, title: `Client First: Working with Purpose and Professionalism`},
    {id: 7, value: "MEMORABLE", content: `I like that the time was taken to give us a refresher and build on the skills we possess. `, title: `DE Test Prep`},
    {id: 8, value: "EXCELLENT" ,content: `The hands on activities really made the topics stick. Additionally, the training was collaborative where participation was encouraged.`, title: `DE Test Prep`},

]

const Reviews = () => {
  return (
    <section className='bg-reviews bg-cover bg-no-repeat flex flex-col xl:pl-16 xl:pb-8  mb-8'>
        <div className='flex flex-col justify-center items-center xl:items-start px-4 md:px-20 xl:px-0'>
            <div className='flex lg:justify-center lg:items-center mt-8'><Heading className='capitalize text-[1.5rem] md:text-4xl xl:text-6xl text-dark-teal sm:text-black'>From Students to Success</Heading></div>
            <Paragraph className='mt-8 w-full xl:w-1/2'>YRCI University (YRCI-U) is a training and re-skilling program developed by YRCI’s own subject matter experts to tackle the expertise shortage in the Federal HR market, driven by the ongoing retirement and departure of seasoned professionals. </Paragraph>
        </div>
        <div className='mt-20 hidden xl:flex justify-self-end'>
            <ReviewsCarousel data={data} num_slides={3}/>
        </div>
        <div className='hidden md:block xl:hidden '>
            <ReviewsCarousel data={data} num_slides={2}/>
        </div>
        <div className='flex md:hidden pl-2'>
            <ReviewsCarouselMobile data={data} color="#134d61"/>
        </div>
    </section>
  )
}

export default Reviews