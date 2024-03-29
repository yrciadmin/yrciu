import Image from 'next/image'
import React from 'react'
import Course1 from '../../assets/cardImages/couseImage1.png'
import Heading from '../ui/Typography/Heading'
import LinkButton from '../ui/LinkButton'

//TODO: FIX CARDS SO TITLE AND PARAGRAPH LINES UP IN EACH CARD
const FeaturedCourses = () => {
  return (
    <section className='bg-featured-courses bg-center w-full mt-16 flex flex-col'>
        <div className='flex justify-center'><Heading className='mb-8 text-4xl self-center'>Featured Courses</Heading></div>
        
        <div className='flex flex-col sm:flex-row flex-wrap justify-center mt-8'>

            <div className='w-11/12 sm:w-[430px] py-8 px-5 bg-white border-2 border-light-gary flex flex-col rounded-lg m-4 sm:m-10'>
                <Image
                    src={Course1}
                    alt="Course One"
                />
                <h1 className='my-3 font-semibold text-xl uppercase sm:w-[390px] border-b border-dark-gray pb-3'>Delegated Examining Certification Preparatory Course</h1>
                <div className='flex flex-col sm:w-[390px]'>
                    <div className='flex justify-between'>
                        <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Time:</h1>
                        <p className='w-[160.49px] text-right text-black text-lg font-boldcapitalize'>17hr 43min</p>
                    </div>
                        <div className='flex justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Category:</h1>
                            <p className='w-[160.49px] text-right text-black text-lg font-bold capitalize'>UX, CX</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Cost:</h1>
                            <p className='w-[160.49px] text-right text-yrci-red text-lg font-bold capitalize'>1200</p>
                        </div>
                        <div className='sm:w-[390px]'>
                            <p>Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.</p>
                        </div>
                </div>
                <LinkButton  link="https://yrciuniversitysandbox.docebosaas.com/learn/courses/45/delegated-examining-certification-preparatory-course" className="sm:w-[390px] h-10 p-2.5 bg-white hover:bg-yrci-red rounded-lg shadow border border-red-600 justify-center items-center gap-2.5 inline-flex hover:text-white text-yrci-red text-base font-bold uppercase mt-8">Start Learning</LinkButton>
            </div>

              <div className='w-11/12 sm:w-[430px] py-8 px-5 bg-white border-2 border-light-gary flex flex-col rounded-lg m-4 sm:m-10'>
                <Image
                    src={Course1}
                    alt="Course One"
                />
                <h1 className='my-3 font-semibold text-xl uppercase sm:w-[390px] border-b border-dark-gray pb-3'>Hiring Authorities</h1>
                <div className='flex flex-col sm:w-[390px]'>
                    <div className='flex justify-between'>
                        <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Time:</h1>
                        <p className='w-[160.49px] text-right text-black text-lg font-bold capitalize'>30 Days</p>
                    </div>
                        <div className='flex justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Category:</h1>
                            <p className='w-[160.49px] text-right text-black text-lg font-bold capitalize'>UX, CX</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Cost:</h1>
                            <p className='w-[160.49px] text-right text-yrci-red text-lg font-bold capitalize'>250</p>
                        </div>
                        <div className='sm:w-[390px]'>
                            <p>Learn about the Federal government's competitive hiring process, hiring authorities in the excepted service, and information for current and former Federal employees. Equip yourself with the knowledge to effectively explain hiring authorities to hiring managers and make informed recommendations for staffing decisions.</p>
                        </div>
                </div>
                <LinkButton link="https://yrciuniversitysandbox.docebosaas.com/learn/courses/110/hiring-authorities" className="sm:w-[390px] h-10 p-2.5 bg-white hover:bg-yrci-red rounded-lg shadow border border-red-600 justify-center items-center gap-2.5 inline-flex hover:text-white text-yrci-red text-base font-bold uppercase mt-8">Start Learning</LinkButton>
            </div>

            <div className='w-11/12 sm:w-[430px] py-8 px-5 bg-white border-2 border-light-gary flex flex-col rounded-lg m-4 sm:m-10'>
                <Image
                    src={Course1}
                    alt="Course One"
                />
                <h1 className='my-3 font-semibold text-xl uppercase sm:w-[390px] border-b border-dark-gray pb-3'>Veterans’ Preference</h1>
                <div className='flex flex-col sm:w-[390px]'>
                    <div className='flex justify-between'>
                        <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Time:</h1>
                        <p className='w-[160.49px] text-right text-black text-lg font-boldcapitalize'>17hr 43min</p>
                    </div>
                        <div className='flex justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Category:</h1>
                            <p className='w-[160.49px] text-right text-black text-lg font-bold capitalize'>UX, CX</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Cost:</h1>
                            <p className='w-[160.49px] text-right text-yrci-red text-lg font-bold capitalize'>1399.99</p>
                        </div>
                        <div className='sm:w-[390px]'>
                            <p>Enroll in our self-guided e-learning course to elevate your understanding of Veterans’ Preference in the Federal hiring process. Gain a comprehensive understanding of its benefits, legal framework, and verification techniques.</p>
                        </div>
                </div>
                <LinkButton  link="https://yrciuniversity.docebosaas.com/learn/courses/90/veterans-preference" className="sm:w-[390px] h-10 p-2.5 bg-white hover:bg-yrci-red rounded-lg shadow border border-red-600 justify-center items-center gap-2.5 inline-flex hover:text-white text-yrci-red text-base font-bold uppercase mt-8">Start Learning</LinkButton>
            </div>

            <div className='w-11/12 sm:w-[430px] py-8 px-5 bg-white border-2 border-light-gary flex flex-col rounded-lg m-4 sm:m-10'>
                <Image
                    src={Course1}
                    alt="Course One"
                />
                <h1 className='my-3 font-semibold text-xl uppercase sm:w-[390px] border-b border-dark-gray pb-3'>Exploring the Delegated Examining Operations Handbook (DEOH)</h1>
                <div className='flex flex-col sm:w-[390px]'>
                    <div className='flex justify-between'>
                        <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Time:</h1>
                        <p className='w-[160.49px] text-right text-black text-lg font-boldcapitalize'>17hr 43min</p>
                    </div>
                        <div className='flex justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Category:</h1>
                            <p className='w-[160.49px] text-right text-black text-lg font-bold capitalize'>UX, CX</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Cost:</h1>
                            <p className='w-[160.49px] text-right text-yrci-red text-lg font-bold capitalize'>1399.99</p>
                        </div>
                        <div className='sm:w-[390px]'>
                            <p>Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.</p>
                        </div>
                </div>
                <LinkButton link="https://yrciuniversitysandbox.docebosaas.com/learn/courses/83/exploring-the-delegated-examining-operations-handbook-deoh" className="sm:w-[390px] h-10 p-2.5 bg-white hover:bg-yrci-red rounded-lg shadow border border-red-600 justify-center items-center gap-2.5 inline-flex hover:text-white text-yrci-red text-base font-bold uppercase mt-8">Start Learning</LinkButton>
            </div>

        </div>
    </section>
  )
}

export default FeaturedCourses