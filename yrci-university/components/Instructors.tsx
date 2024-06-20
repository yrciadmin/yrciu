import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Instructor } from '../util/types'; // Type-only import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const instructors: Instructor[] = [
  { id: 1, title: 'Diane Brundage', image: 'https://yrci.com/wp-content/uploads/diane_headshot.jpg', content: `Diane Brundage has thirty-three years of federal experience in all human resources functional areas. She has worked for the Department of the Air Force, Department of Defense Education Activity, Smithsonian Institution, U.S. Department of Housing & Development, and the Department of Homeland Security (TSA). Diane delivers trainings in all areas of Staffing, Classification, ECQ Writing, and preparation for the DE Certification Exam. Diane is recognized for delivering quality results in the areas of process rigor, discipline, and process improvements.`},
  { id: 2, title: 'Daniel Crane', image: 'https://yrci.com/wp-content/uploads/dan_headshot.jpg', content: 'Daniel Crane is a Sr. Training Specialist at YRCI-U with 15+ years of experience in professional development workshops, including Client Experience, Empowerment, and Federal Government navigation. Previously at the Shakespeare Theatre Company as Resident Teaching Artist, he excelled in communication and engagement strategies. His workshops served notable clients like the National Gallery of Art and the World Bank. Crane holds a BFA from Ithaca College and an MFA from George Washington University.' },
  { id: 3, title: 'Cris Cedeno-Peralta', image: 'https://yrci.com/wp-content/uploads/cris_headshot-scaled.jpg', content: `Cris Cedeno-Peralta has nine years of HR experience in Staffing, Recruitment, Onboarding, and Coding/Processing with agencies like the Department of Commerce, Education, and the USDA. He earned a bachelor's degree from Winthrop University and holds certifications in Federal Staffing and Placement, Processing Federal Personnel Actions from Graduate School USA. Known for his problem-solving skills and expertise in federal regulations and hiring.`},
  { id: 4, title: 'Tyesha Bennett', image: 'https://yrci.com/wp-content/uploads/tyesha_headshot.jpg', content: `Tyesha Bennett has 30 years of Human Resources experience in Staffing, Recruitment, Classification, Onboarding, and Coding/Processing with the following agencies:  NASA/Goddard Space Flight Center, the Department of Commerce, the Department of Energy, and the US Department of Agriculture/Agricultural Research Service. She is known for providing services that exhibit professionalism, dedication to customer service and extensive human resources expertise.`},
  { id: 5, title: 'Cody Wright', image: 'https://yrci.com/wp-content/uploads/cody_headshot-1.jpg', content: 'Cody Wright is a training specialist with the YRCI-University. She supports all technical HR and leadership training and brings thirteen years of curriculum design and instructional experience to our dynamic team. Cody has a B.A. in English from Texas A&M University and a M. Ed in Counseling Psychology from the University of Houston. She also has specialized training in corporate instructional design and adult learning principles through the Applied Instructional Design Academy.' },
];

const Instructors: React.FC = () => {
  return (
    <section className="px-[16px] pt-[1vmax] pb-[6.6vmax] md:px-[4vw]">
      <h1 className="mb-[60px] text-3xl sm:text-6xl text-center font-bold">Meet our talented instructors</h1>
      <div className="grid grid-cols-1 items-stretch gap-[20px] sm:grid-cols-2 md:grid-cols-3 lgr:grid-cols-5">
        {instructors.map((instructor) => (
          <Link 
            key={instructor.id} 
            href={`/instructors/${instructor.id}`} 
            passHref 
            className="flex flex-col rounded-b-[5px] bg-white text-black no-underline shadow-[0px_0px_5px_rgba(0,0,0,.15)] hover:no-underline"
          >
              <div className='relative mb-[9%] aspect-[4/3] shrink-0'>
                <Image className="absolute h-full w-full object-cover" fill={true} src={instructor.image} alt={`${instructor.title}`} />
              </div>
              <div className="flex h-full flex-col px-[6%] pb-[6%]">
                <h3 className="mb-[3%] font-normal leading-[1.25] text-lg">{instructor.title}</h3>
                <div className="flex w-[329px] justify-between items-center">
                  <button type="button" className="flex items-center justify-center border transition duration-200 ease-in-out font-sans font-medium px-4 py-1 bg-red-600 border-red-600 text-white hover:bg-teal-600 hover:border-teal-600 hover:text-white active:bg-teal-600 active:border-teal-600 rounded-full w-max text-sm mt-auto group-hover:bg-light-gray">Read Bio</button>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Instructors;
