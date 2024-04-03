import React from 'react'
import Heading from '../ui/Typography/Heading'
import Carousel from '../ui/Carousel'
import MobileCarousel from '../ui/MobileCarousel'
import TabletCarousel from '../ui/TabletCarousel';
import DanHeadShot from '../../assets/headshots/dan_headshot.jpg';
import DianHeadShot from '../../assets/headshots/diane_headshot.jpg';
import CrisHeadShot from '../../assets/headshots/cris_headshot.jpg';
import TyeshaHeadShot from '../../assets/headshots/tyesha_headshot.jpg';
import CodyHeadShot from '../../assets/headshots/cody_headshot.jpg';


// const data = [
//     { id: 1, title: 'Daniel Crane', image: DanHeadShot, content: 'Daniel Crane is a Sr. Training Specialist at YRCI-U with 15+ years of experience in professional development workshops, including Client Experience, Empowerment, and Federal Government navigation. Previously at the Shakespeare Theatre Company as Resident Teaching Artist, he excelled in communication and engagement strategies. His workshops served notable clients like the National Gallery of Art and the World Bank. Crane holds a BFA from Ithaca College and an MFA from George Washington University.' },
//     { id: 2, title: ' Diane Brundage', image: DianHeadShot, content: `Diane Brundage has thirty-three years of federal experience in all human resources functional areas. She has worked for the Department of the Air Force, Department of Defense Education Activity, Smithsonian Institution, U.S. Department of Housing & Development, and the Department of Homeland Security (TSA). Diane delivers trainings in all areas of Staffing, Classification, ECQ Writing, and preparation for the DE Certification Exam. Diane is recognized for delivering quality results in the areas of process rigor, discipline, and process improvements.`},
//     { id: 3, title: 'Cris Cedeno-Peralta', image: CrisHeadShot, content: `Cris Cedeno-Peralta has nine years of HR experience in Staffing, Recruitment, Onboarding, and Coding/Processing with agencies like the Department of Commerce, Education, and the USDA. He earned a bachelor's degree from Winthrop University and holds certifications in Federal Staffing and Placement, Processing Federal Personnel Actions from Graduate School USA. Known for his problem-solving skills and expertise in federal regulations and hiring.`},
//     { id: 4, title: 'Tyesha Bennett', image: TyeshaHeadShot, content: `Tyesha Bennett has 30 years of Human Resources experience in Staffing, Recruitment, Classification, Onboarding, and Coding/Processing with the following agencies:  NASA/Goddard Space Flight Center, the Department of Commerce, the Department of Energy, and the US Department of Agriculture/Agricultural Research Service. She is known for providing services that exhibit professionalism, dedication to customer service and extensive human resources expertise.`},
//     { id: 5, title: 'Cody Wright', image: CodyHeadShot, content: 'Cody Wright is a training specialist with the YRCI-University.  She supports all technical HR and leadership training and brings thirteen years of curriculum design and instructional experience to our dynamic team.  Cody has a B.A. in English from Texas A&M University and a M. Ed in Counseling Psychology from the University of Houston. She also has specialized training in corporate instructional design and adult learning principles through the Applied Instructional Design Academy.' },

//   ];

  const data = [
    { id: 1, title: ' Diane Brundage', image: 'bg-diane-headshot', content: `Diane Brundage has thirty-three years of federal experience in all human resources functional areas. She has worked for the Department of the Air Force, Department of Defense Education Activity, Smithsonian Institution, U.S. Department of Housing & Development, and the Department of Homeland Security (TSA). Diane delivers trainings in all areas of Staffing, Classification, ECQ Writing, and preparation for the DE Certification Exam. Diane is recognized for delivering quality results in the areas of process rigor, discipline, and process improvements.`},
    { id: 2, title: 'Daniel Crane', image: 'bg-dan-headshot', content: 'Daniel Crane is a Sr. Training Specialist at YRCI-U with 15+ years of experience in professional development workshops, including Client Experience, Empowerment, and Federal Government navigation. Previously at the Shakespeare Theatre Company as Resident Teaching Artist, he excelled in communication and engagement strategies. His workshops served notable clients like the National Gallery of Art and the World Bank. Crane holds a BFA from Ithaca College and an MFA from George Washington University.' },
    { id: 3, title: 'Cris Cedeno-Peralta', image: 'bg-cris-headshot', content: `Cris Cedeno-Peralta has nine years of HR experience in Staffing, Recruitment, Onboarding, and Coding/Processing with agencies like the Department of Commerce, Education, and the USDA. He earned a bachelor's degree from Winthrop University and holds certifications in Federal Staffing and Placement, Processing Federal Personnel Actions from Graduate School USA. Known for his problem-solving skills and expertise in federal regulations and hiring.`},
    { id: 4, title: 'Tyesha Bennett', image: 'bg-tyesha-headshot', content: `Tyesha Bennett has 30 years of Human Resources experience in Staffing, Recruitment, Classification, Onboarding, and Coding/Processing with the following agencies:  NASA/Goddard Space Flight Center, the Department of Commerce, the Department of Energy, and the US Department of Agriculture/Agricultural Research Service. She is known for providing services that exhibit professionalism, dedication to customer service and extensive human resources expertise.`},
    { id: 5, title: 'Cody Wright', image: 'bg-cody-headshot', content: 'Cody Wright is a training specialist with the YRCI-University.  She supports all technical HR and leadership training and brings thirteen years of curriculum design and instructional experience to our dynamic team.  Cody has a B.A. in English from Texas A&M University and a M. Ed in Counseling Psychology from the University of Houston. She also has specialized training in corporate instructional design and adult learning principles through the Applied Instructional Design Academy.' },

  ];

const Instructors = () => {
  return (
    <div className='bg-instructors-mobile sm:bg-instructors-tablet xl:bg-instructors bg-cover bg-center flex flex-col bg-no-repeat mb-8 h-full'>
        <div className='flex justify-center bg-instructors-title bg-center bg-cover xl:bg-none bg-no-repeat'><Heading className='capitalize mb-8 md:text-4xl self-center text-white mt-11 text-[1.5rem]'>Meet our talented instructors</Heading></div>
        <Carousel data={data}/>
        <section className='block md:hidden'>
            <MobileCarousel color={'#ce2129'} data={data}/>
        </section>
        <section className='xl:hidden md:block hidden'>
            <TabletCarousel color={'#ce2129'} data={data} num_slides={1.5}/>
        </section>
        
    </div>
  )
}

export default Instructors