import React from 'react'
import Heading from '../ui/Typography/Heading'
import CourseCard from '../ui/CourseCard'
import MobileCarousel from '../ui/MobileCarousel'
import TabletCarousel from '../ui/TabletCarousel'

const data = [
  {  title: 'DELEGATED EXAMINING CERTIFICATION PREPARATORY COURSE', image: "https://yrci.com/wp-content/uploads/prep.jpg", link: `https://www.yrciuniversity.com/learn/courses/45/delegated-examining-certification-preparatory-course`, time: '12hrs', category: 'Virtual Instructor, Exam Simulation', cost: '1200.00', content: 'Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.' },
//   {  title: 'EXPLORING THE DELEGATED EXAMINING OPERATIONS HANDBOOK', link: `https://www.yrciuniversity.com/learn/courses/83/exploring-the-delegated-examining-operations-handbook-deoh`, image: "https://yrci.com/wp-content/uploads/exploring.jpg", time: '20hrs', category: 'On-Demand, DEOH', cost: '399.00', content: `Pass the DE Certification Exam with our prep course designed to guide participants through a variety of DEU scenarios and effective study techniques. Engage in hands-on activities and carefully crafted practice quizzes to solidify your grasp of essential DEU concepts.` },
//   {  title: 'HIRING AUTHORITIY', image: "https://yrci.com/wp-content/uploads/hiring.jpg", link: `https://www.yrciuniversity.com/learn/courses/8/hiring-authorities`, time: '1hr', category: 'On-Demand , Federal HR', cost: '149.00', content: `Learn about the Federal government's competitive hiring process, hiring authorities in the excepted service, and information for current and former Federal employees. Equip yourself with the knowledge to effectively explain hiring authorities to hiring managers and make informed recommendations for staffing decisions.` },
  {  title: 'VETERANS’ PREFERENCE', image: "https://yrci.com/wp-content/uploads/vet-pref.jpg", link: `https://www.yrciuniversity.com/learn/courses/90/veterans-preference`, time: '2hrs', category: 'On-Demand', cost: '249.00', content: `Elevate your understanding of Veterans’ Preference in the Federal hiring process in this comprehensive self-guided on-demand course. Gain a comprehensive understanding of the advantages and considerations associated with Veterans’ Preference in both the competitive and excepted service.` },
  {  title: 'Classification 101: Basic Classification Principles, Roles & Responsibilities', image: "https://yrci.com/wp-content/uploads/YRCI-Thumbnails-39.jpg", link: `https://www.yrciuniversity.com/learn/courses/123/classification-101-basic-classification-principles-roles-responsibilities-vilt`, time: '12hrs', category: 'Virtual Instructor, Federal HR', cost: '1140.00', content: `Explore the core principles, roles, and responsibilities that form the backbone of successful classification practices.` },
  {  title: 'Prohibited Personnel Practices, Merit System Principles, and Uniform Guidelines', image: "https://yrci.com/wp-content/uploads/YRCI-Thumbnails-9.jpg", link: `https://www.yrciuniversity.com/learn/courses/104/prohibited-personnel-practices-merit-system-principles-and-uniform-guidelines-vilt`, time: '4hrs', category: 'Virtual Instructor, Federal HR', cost: '449.00', content: `Through practical exercises, participants will learn how to identify both unacceptable and acceptable actions in workforce management, empowering them to ensure fairness, transparency, and adherence to ethical practices.` },
  {  title: 'Client First: Working with Purpose and Professionalism', image: "https://yrci.com/wp-content/uploads/YRCI-Thumbnails-31.jpg", link: `https://www.yrciuniversity.com/learn/courses/139/client-first-working-with-purpose-and-professionalism-vilt`, time: '2hrs', category: 'Virtual Instructor, Federal HR', cost: '299.00', content: `The Client First training is designed to give participants the mindset and focus to create a client experience that is professional, purposeful, and solution oriented.` },
  {  title: 'Power Presentations: Maximizing your Impact with PowerPoint', image: "https://yrci.com/wp-content/uploads/YRCI-Thumbnails-15.jpg", link: `https://www.yrciuniversity.com/learn/courses/140/power-presentations-maximizing-your-impact-with-powerpoint-vilt`, time: '2hrs', category: 'Virtual Instructor, Federal HR', cost: '299.00', content: `Using time-tested strategies from a wide range of industries, gain the power to design, build, and deliver your perfect presentation.` },

];

const FeaturedCourses: React.FC = () => {
  return (
    <section className='bg-featured-courses bg-cover bg-center mt-32 flex flex-col px-4 pt-4 pb-16 md:px-16 w-full h-full'>
      <div className='flex my-16 h-20 justify-center bg-dark-teal sm:bg-transparent text-white sm:text-black'>
        <Heading className='text-[2rem] sm:text-[56px] self-center'>Featured Courses</Heading>
      </div>
      <div className='block md:hidden'>
        <MobileCarousel color={'#134d61'} button data={data} />
     </div>
     <div className='md:block hidden lg:hidden'>
        <TabletCarousel color={'#134d61'} button data={data} num_slides={1.5} />
      </div>
      <div className='hidden lg:grid grid-cols-1 items-stretch gap-[30px] md:grid-cols-2 xxl:grid-cols-3 place-items-center lg:w-full  3xl:mx-auto 2xl:pb-60'>
        {data.map(course => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedCourses