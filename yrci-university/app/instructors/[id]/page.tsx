// app/instructors/[id]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import type { Instructor } from '../../../util/types';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface InstructorProps {
  params: {
    id: string;
  };
}

const instructors: Instructor[] = [
  { id: 1, title: 'Diane Brundidge', image: 'https://yrci.com/wp-content/uploads/diane_headshot.jpg', content: `Diane Brundidge has thirty-three years of federal experience in all human resources functional areas. She has worked for the Department of the Air Force, Department of Defense Education Activity, Smithsonian Institution, U.S. Department of Housing & Development, and the Department of Homeland Security (TSA). Diane delivers trainings in all areas of Staffing, Classification, ECQ Writing, and preparation for the DE Certification Exam. Diane is recognized for delivering quality results in the areas of process rigor, discipline, and process improvements.`},
  { id: 2, title: 'Daniel Crane', image: 'https://yrci.com/wp-content/uploads/dan_headshot.jpg', content: 'Daniel Crane is a Sr. Training Specialist at YRCI-U with 15+ years of experience in professional development workshops, including Client Experience, Empowerment, and Federal Government navigation. Previously at the Shakespeare Theatre Company as Resident Teaching Artist, he excelled in communication and engagement strategies. His workshops served notable clients like the National Gallery of Art and the World Bank. Crane holds a BFA from Ithaca College and an MFA from George Washington University.' },
  { id: 3, title: 'Cris Cedeno-Peralta', image: 'https://yrci.com/wp-content/uploads/cris_headshot-scaled.jpg', content: `Cris Cedeno-Peralta has nine years of HR experience in Staffing, Recruitment, Onboarding, and Coding/Processing with agencies like the Department of Commerce, Education, and the USDA. He earned a bachelor's degree from Winthrop University and holds certifications in Federal Staffing and Placement, Processing Federal Personnel Actions from Graduate School USA. Known for his problem-solving skills and expertise in federal regulations and hiring.`},
  { id: 4, title: 'Tyesha Bennett', image: 'https://yrci.com/wp-content/uploads/tyesha_headshot.jpg', content: `Tyesha Bennett has 30 years of Human Resources experience in Staffing, Recruitment, Classification, Onboarding, and Coding/Processing with the following agencies:  NASA/Goddard Space Flight Center, the Department of Commerce, the Department of Energy, and the US Department of Agriculture/Agricultural Research Service. She is known for providing services that exhibit professionalism, dedication to customer service and extensive human resources expertise.`},
  { id: 5, title: 'Cody Wright', image: 'https://yrci.com/wp-content/uploads/cody_headshot-1.jpg', content: 'Cody Wright is a training specialist with the YRCI-University. She supports all technical HR and leadership training and brings thirteen years of curriculum design and instructional experience to our dynamic team. Cody has a B.A. in English from Texas A&M University and a M. Ed in Counseling Psychology from the University of Houston. She also has specialized training in corporate instructional design and adult learning principles through the Applied Instructional Design Academy.' },
  { id: 6, title: 'Kimberly Parent', image: 'https://yrci.com/wp-content/uploads/Picture-1-scaled.jpeg', content: `Kimberly joined the YRCI team in 2024 as our new NOAA supervisor. Kimberly holds both a bachelor's and a master's degree in business administration and is pursuing a Ph.D. in Public Administration. Kimberly consistently emphasizes continuous process improvement and team development, nurturing strong working relationships and fostering collaboration throughout her career. \n\nKimberly Parent began her federal career as a Human Resources Assistant in 2008. She became a Human Resources Specialist in the Army and Air Force, followed by the United States Department of Agriculture (USDA). Before joining YRCI, Kimberly was the Branch Chief for the Talent Acquisitions Branch at the USDA Food and Nutrition Service. She oversaw work involving Classification, Staffing, and Processing in this role. In addition to her federal work, Kimberly serves as a Logistics Readiness Officer in the Minnesota Air National Guard.` },
  { id: 7, title: 'Randy Bridges', image: 'https://yrci.com/wp-content/uploads/Randy-Bridges_Headshot_16x9_press-release.png', content: `Randy has been a Human Resources Manager for the past 20 years of his professional career. Randy joined the HRROC Leadership Team in July 2024 as a Deputy Director and currently oversees the Department of Justice (DOJ-ATR), Federal Housing Finance Agency (FHFA), Office of Personnel Management (OPM), and the United States Department of Agriculture, Agricultural Research Service (USDA-ARS) teams at YRCI.  Randy most currently served as Project Manager for the U.S. Department of Agriculture (USDA) Farm Production and Conservation (FPAC) Business Center working a consolidation of effort for Service Level Agreements across 13 Divisions and 4 Mission Agencies.\n\nPrior to his current role, he was the Branch Manager for Workforce Operations within the FPAC Business Center. In this position Randy oversaw 175 personnel and his team was responsible for all hiring actions, benefits and pay, as well as all personnel processing actions within FPAC. Ensuring Federal Regulations are prominent in all human resource activities, he empowers team members to provide the highest level of customer service legally available. \n\nRandy practices a constraints-based management philosophy ensuring any items preventing his team from functioning at the highest levels and engaging to unblock hurdles (constraints) for team members. \n\nBorn in Jackson Tennessee, Randy graduated from the American Military University earning both his master’s degree and bachelor's degree in leadership and human resources management. He began his career as a Human Resources Specialist with the Office of Personnel Management (OPM). As he advanced through his career, he has held positions with the USDA, OPM, Department of the Air Force, Department of the Army, and the Social Security Administration.`},
];

export async function generateStaticParams() {
  return instructors.map(instructor => ({
    id: instructor.id.toString(),
  }));
}

export async function generateMetadata({ params }: InstructorProps): Promise<Metadata> {
  const instructor = instructors.find(inst => inst.id.toString() === params.id);
  return {
    title: instructor ? instructor.title : 'Instructor Not Found',
  };
}

const InstructorPage = ({ params }: InstructorProps) => {
  const instructor = instructors.find(inst => inst.id.toString() === params.id);

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  const contentParagraphs = instructor.content.split('\n\n');

  return (
    <section className="px-[16px] py-[1vmax] md:px-[4vw]">
        <Link href="/">
            <FontAwesomeIcon icon={faArrowLeft} className="text-2xl mb-8"/>
      </Link>
      <div className="flex flex-col md:flex-row md:px-[4vw] items-center justify-center px-[16px] py-[1vmax] ">
      <div className="mb-[4vw] flex w-full justify-center md:mr-[5%] md:mb-0 md:w-[40%]">
        <Image className="h-full max-h-[340px] w-auto md:h-auto md:max-h-full md:w-full xl:px-[4vw]" src={instructor.image} alt={instructor.title} width={300} height={300} />
      </div>
      <div className="md:w-[55%]">
            <h1 className="my-[4vw] font-normal tracking-tight text-2xl md:text-4xl">{instructor.title}</h1>
            {contentParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-[1vw] !leading-7 tracking-tight text-sm md:text-base">
              {paragraph}
            </p>
          ))}
            {/* <p className="mb-[4vw] !leading-7 tracking-tight text-sm md:text-base">{instructor.content}</p> */}
      </div>
      </div>
    </section>
  );
}

export default InstructorPage;
