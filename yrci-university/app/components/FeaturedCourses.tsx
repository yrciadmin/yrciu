import Image from 'next/image'
import React from 'react'
import DelegatePrep from '../../assets/cardImages/prep.jpg'
import VetPref from '../../assets/cardImages/vet-pref.jpg'
import Hiring from '../../assets/cardImages/hiring.jpg'
import Exploring from '../../assets/cardImages/exploring.png'

import Heading from '../ui/Typography/Heading'
import LinkButton from '../ui/LinkButton'
import MobileCarousel from '../ui/MobileCarousel'
import TabletCarousel from '../ui/TabletCarousel'

// const data = [
//     { id: 1, title: 'DELEGATED EXAMINING CERTIFICATION PREPARATORY COURSE', image: DelegatePrep, link: `https://yrciuniversity.docebosaas.com/learn/courses/45/delegated-examining-certification-preparatory-course`, price: "1200.00", content: 'Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.' },
//     { id: 2, title: 'HIRING AUTHORITIY', image: Hiring, link: `https://yrciuniversity.docebosaas.com/learn/courses/8/hiring-authorities`, price: "145.00",  content: `Learn about the Federal government's competitive hiring process, hiring authorities in the excepted service, and information for current and former Federal employees. Equip yourself with the knowledge to effectively explain hiring authorities to hiring managers and make informed recommendations for staffing decisions.` },
//     { id: 3, title: 'VETERANS’ PREFERENCE',  image: VetPref, link: `https://yrciuniversity.docebosaas.com/lea rn/courses/90/veterans-preference`, price: "300.00", content: `Enroll in our self-guided e-learning course to elevate your understanding of Veterans’ Preference in the Federal hiring process. Gain a comprehensive understanding of its benefits, legal framework, and verification techniques.`},
//     { id: 4, title: 'EXPLORING THE DELEGATED EXAMINING OPERATIONS HANDBOOK', link: `https://yrciuniversity.docebosaas.com/learn/courses/83/exploring-the-delegated-examining-operations-handbook-deoh`, image: Exploring, price: "1200.00", content: `Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.`},
//   ];

  const data = [
    { id: 1, title: 'DELEGATED EXAMINING CERTIFICATION PREPARATORY COURSE', image: `bg-course-1`, link: `https://www.yrciuniversity.com/learn/courses/45/delegated-examining-certification-preparatory-course`, price: "1200.00", content: 'Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.' },
    { id: 2, title: 'HIRING AUTHORITIY', image: `bg-course-2`, link: `https://www.yrciuniversity.com/learn/courses/8/hiring-authorities`, price: "145.00",  content: `Learn about the Federal government's competitive hiring process, hiring authorities in the excepted service, and information for current and former Federal employees. Equip yourself with the knowledge to effectively explain hiring authorities to hiring managers and make informed recommendations for staffing decisions.` },
    { id: 3, title: 'VETERANS’ PREFERENCE',  image: `bg-course-3`, link: `https://www.yrciuniversity.com/learn/courses/90/veterans-preference`, price: "300.00", content: `Enroll in our self-guided e-learning course to elevate your understanding of Veterans’ Preference in the Federal hiring process. Gain a comprehensive understanding of its benefits, legal framework, and verification techniques.`},
    { id: 4, title: 'EXPLORING THE DELEGATED EXAMINING OPERATIONS HANDBOOK', link: `https://www.yrciuniversity.com/learn/courses/83/exploring-the-delegated-examining-operations-handbook-deoh`, image: `bg-course-4`, price: "1200.00", content: `Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.`},
  ];
const FeaturedCourses = () => {
  return (
    <section className='bg-featured-courses bg-cover bg-center bg-no-repeat mt-32 flex flex-col h-fit w-full'>
        <div className='flex mt-10 h-20 justify-center bg-dark-teal sm:bg-transparent text-white sm:text-black'><Heading className='text-[2.5rem] sm:text-4xl self-center'>Featured Courses</Heading></div>
        <div className='block md:hidden'><MobileCarousel color={'#134d61'} button data={data}/></div>
        <div className=' md:block hidden lg:hidden '><TabletCarousel color={'#134d61'} button data={data} num_slides={1.5}/></div>

        <div className='hidden lg:flex flex-col sm:flex-row flex-wrap justify-center mt-8  md:w-full'>
            <div className='w-11/12 sm:w-[430px] py-8 px-5 bg-white border-2 border-light-gary flex flex-col rounded-lg m-4 sm:m-10'>
                <Image
                    src={DelegatePrep}
                    alt="Course One"
                />
                <h1 className='my-3 font-semibold text-xl uppercase sm:w-[390px] border-b border-dark-gray pb-3 min-h-[69px] min-w-full flex self-end'>Delegated Examining Certification Preparatory Course</h1>
                <div className='flex  flex-col sm:w-[390px]'>
                    <div className='hidden sm:flex justify-between'>
                        <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Time:</h1>
                        <p className='w-[160.49px] text-right text-black text-lg font-boldcapitalize'>12hrs</p>
                    </div>
                        <div className='hidden sm:flex  justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Category:</h1>
                            <p className='text-right text-black text-lg font-bold capitalize w-full'>Virtual Instructor, Exam Simulation</p>
                        </div>
                        <div className='hidden sm:flex  justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Cost:</h1>
                            <p className='w-[160.49px] text-right text-yrci-red text-lg font-bold capitalize'>1299.00</p>
                        </div>
                        <div className='sm:w-[390px] min-h-[168px]'>
                            <p>Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.</p>
                        </div>
                </div>
                <LinkButton link="https://www.yrciuniversity.com/learn/courses/45/delegated-examining-certification-preparatory-course" className="sm:w-[390px] w-full h-10 p-2.5 bg-white sm:hover:bg-yrci-red rounded-lg shadow border sm:border-red-600 justify-center items-center gap-2.5 inline-flex sm:hover:text-white sm:text-yrci-red text-base sm:font-bold uppercase mt-8 text-dark-teal border-dark-teal font-extrabold">Start Learning</LinkButton>

                {/* <LinkButton  link="https://yrciuniversity.docebosaas.com/learn/courses/45/delegated-examining-certification-preparatory-course" className="h-10 p-2.5 bg-white sm:hover:bg-yrci-red rounded-lg shadow border sm:border-red-600 justify-center items-center gap-2.5 inline-flex sm:hover:text-white sm:text-yrci-red text-base sm:font-bold uppercase mt-8 text-dark-teal border-dark-teal font-extrabold w-full border-8">Start Learning</LinkButton> */}
            </div>

              <div className='w-11/12 sm:w-[430px] py-8 px-5 bg-white border-2 border-light-gary flex flex-col rounded-lg m-4 sm:m-10'>
                <Image
                    src={Hiring}
                    alt="Course One"
                />
                <h1 className='my-3 font-semibold text-xl uppercase sm:w-[390px] border-b border-dark-gray pb-3 min-h-[69px] min-w-full flex self-end'>Hiring Authorities</h1>
                <div className='flex flex-col sm:w-[390px]'>
                    <div className='hidden sm:flex justify-between'>
                        <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Time:</h1>
                        <p className='w-[160.49px] text-right text-black text-lg font-bold capitalize'>1hr</p>
                    </div>
                        <div className='hidden sm:flex  justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Category:</h1>
                            <p className='w-full text-right text-black text-lg font-bold capitalize'>E-Learning, Federal HR</p>
                        </div>
                        <div className='hidden sm:flex  justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Cost:</h1>
                            <p className='w-[160.49px] text-right text-yrci-red text-lg font-bold capitalize'>145.00</p>
                        </div>
                        <div className='sm:w-[390px] min-h-[168px]'>
                            <p>Learn about the Federal government's competitive hiring process, hiring authorities in the excepted service, and information for current and former Federal employees. Equip yourself with the knowledge to effectively explain hiring authorities to hiring managers and make informed recommendations for staffing decisions.</p>
                        </div>
                </div>
                <LinkButton link="https://www.yrciuniversity.com/learn/courses/8/hiring-authorities" className="sm:w-[390px] w-full h-10 p-2.5 bg-white sm:hover:bg-yrci-red rounded-lg shadow border sm:border-red-600 justify-center items-center gap-2.5 inline-flex sm:hover:text-white sm:text-yrci-red text-base sm:font-bold uppercase mt-8 text-dark-teal border-dark-teal font-extrabold">Start Learning</LinkButton>
            </div>

            <div className='w-11/12 sm:w-[430px] py-8 px-5 bg-white border-2 border-light-gary flex flex-col rounded-lg m-4 sm:m-10'>
                <Image
                    src={VetPref}
                    alt="Course One"
                />
                <h1 className='my-3 font-semibold text-xl uppercase sm:w-[390px] border-b border-dark-gray pb-3 min-h-[69px] min-w-full flex self-end'>Veterans’ Preference</h1>
                <div className='flex flex-col sm:w-[390px]'>
                    <div className='hidden sm:flex justify-between'>
                        <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Time:</h1>
                        <p className='w-[160.49px] text-right text-black text-lg font-boldcapitalize'>2hrs</p>
                    </div>
                        <div className='hidden sm:flex  justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Category:</h1>
                            <p className='w-full text-right text-black text-lg font-bold capitalize'>Virtual Instructor, Federal HR</p>
                        </div>
                        <div className='hidden sm:flex justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Cost:</h1>
                            <p className='w-[160.49px] text-right text-yrci-red text-lg font-bold capitalize'>299.00</p>
                        </div>
                        <div className='sm:w-[390px] min-h-[168px]'>
                            <p>Enroll in our self-guided e-learning course to elevate your understanding of Veterans’ Preference in the Federal hiring process. Gain a comprehensive understanding of its benefits, legal framework, and verification techniques.</p>
                        </div>
                </div>
                <LinkButton  link="https://www.yrciuniversity.com/learn/courses/90/veterans-preference" className="sm:w-[390px] w-full h-10 p-2.5 bg-white sm:hover:bg-yrci-red  rounded-lg shadow border  sm:border-red-600 justify-center items-center gap-2.5 inline-flex sm:hover:text-white  sm:text-yrci-red text-base sm:font-bold uppercase mt-8 text-dark-teal border-dark-teal font-extrabold">Start Learning</LinkButton>
            </div>

            <div className='w-11/12 sm:w-[430px] py-8 px-5 bg-white border-2 border-light-gary flex flex-col rounded-lg m-4 sm:m-10'>
                <Image
                    src={Exploring}
                    alt="Course One"
                />
                <h1 className='my-3 font-semibold text-xl uppercase sm:w-[390px] border-b border-dark-gray pb-3 min-h-[69px] min-w-full flex self-end'>Exploring the Delegated Examining Operations Handbook (DEOH)</h1>
                <div className='flex flex-col sm:w-[390px]'>
                    <div className='hidden sm:flex  justify-between'>
                        <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Time:</h1>
                        <p className='w-[160.49px] text-right text-black text-lg font-boldcapitalize'>20hrs</p>
                    </div>
                        <div className='hidden sm:flex  justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Category:</h1>
                            <p className='w-[160.49px] text-right text-black text-lg font-bold capitalize'>E-Learning, DEOH</p>
                        </div>
                        <div className='hidden sm:flex  justify-between'>
                            <h1 className='w-[81.11px] text-neutral-400 text-[13px] font-bold capitalize'>Cost:</h1>
                            <p className='w-[160.49px] text-right text-yrci-red text-lg font-bold capitalize'>1200.00</p>
                        </div>
                        <div className='sm:w-[390px] min-h-[168px]'>
                            <p>Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.</p>
                        </div>
                </div>
                <LinkButton link="https://www.yrciuniversity.com/learn/courses/83/exploring-the-delegated-examining-operations-handbook-deoh" className="sm:w-[390px] w-full h-10 p-2.5 sm:bg-white sm:hover:bg-yrci-red rounded-lg shadow border sm:border-red-600 justify-center items-center gap-2.5 inline-flex sm:hover:text-white sm:text-yrci-red text-base sm:font-bold uppercase mt-8 text-dark-teal border-dark-teal font-extrabold">Start Learning</LinkButton>
            </div>

        </div>
    </section>
  )
}

export default FeaturedCourses