import React from 'react'
import Heading from '../ui/Typography/Heading'
import CourseCard from '../ui/CourseCard'
import MobileCarousel from '../ui/MobileCarousel'
import TabletCarousel from '../ui/TabletCarousel'

const data = [
  { id: 1, title: 'DELEGATED EXAMINING CERTIFICATION PREPARATORY COURSE', image: "https://yrci.com/wp-content/uploads/prep.jpg", link: `https://www.yrciuniversity.com/learn/courses/45/delegated-examining-certification-preparatory-course`, time: '12hrs', category: 'Virtual Instructor, Exam Simulation', cost: '1200.00', content: 'Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.' },
  { id: 2, title: 'EXPLORING THE DELEGATED EXAMINING OPERATIONS HANDBOOK', link: `https://www.yrciuniversity.com/learn/courses/83/exploring-the-delegated-examining-operations-handbook-deoh`, image: "https://yrci.com/wp-content/uploads/exploring.jpg", time: '20hrs', category: 'On-Demand, DEOH', cost: '399.00', content: `Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.` },
  { id: 3, title: 'HIRING AUTHORITIY', image: "https://yrci.com/wp-content/uploads/hiring.jpg", link: `https://www.yrciuniversity.com/learn/courses/8/hiring-authorities`, time: '1hr', category: 'On-Demand , Federal HR', cost: '149.00', content: `Learn about the Federal government's competitive hiring process, hiring authorities in the excepted service, and information for current and former Federal employees. Equip yourself with the knowledge to effectively explain hiring authorities to hiring managers and make informed recommendations for staffing decisions.` },
  { id: 4, title: 'VETERANS’ PREFERENCE', image: "https://yrci.com/wp-content/uploads/vet-pref.jpg", link: `https://www.yrciuniversity.com/learn/courses/90/veterans-preference`, time: '2hrs', category: 'Virtual Instructor, Federal HR', cost: '299.00', content: `Enroll in our instructor-led course to elevate your understanding of Veterans’ Preference in the Federal hiring process. Gain a comprehensive understanding of its benefits, legal framework, and verification techniques.` },
];

const FeaturedCourses: React.FC = () => {
  return (
    <section className='bg-featured-courses bg-cover bg-center mt-32 flex flex-col px-4 pt-4 pb-16 md:px-16 w-full h-full'>
      <div className='flex my-16 h-20 justify-center bg-dark-teal sm:bg-transparent text-white sm:text-black'>
        <Heading className='text-[2.5rem] sm:text-[56px] self-center'>Featured Courses</Heading>
      </div>
      <div className='block md:hidden'>
        <MobileCarousel color={'#134d61'} button data={data} />
     </div>
     <div className='md:block hidden lg:hidden'>
        <TabletCarousel color={'#134d61'} button data={data} num_slides={1.5} />
      </div>
      <div className='hidden lg:grid grid-cols-1 items-stretch gap-[30px] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 place-items-center lg:w-full 4xl:w-5/12 3xl:mx-auto 2xl:pb-60'>
        {data.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedCourses