"use client"
import React, { CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from './Card';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paragraph from './Typography/Paragraph';
import LinkButton from './LinkButton';

 interface DataProps {
    id: number;
    title: string;
    image: string;
    content: string; 
    link?: string;
}

interface CarouselProps {
    data: DataProps[]
    button?: boolean
    color: string
}

//TODO: MOVE DATA PROPS TO OWN FILE
const MobileNav = ({data, button, color}: CarouselProps) => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper w-full h-fit p-4 border"
        style={{
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-color": `${color}`,
            "--swiper-pagination-top": "560px",
            "padding-bottom": "50px",

        } as CSSProperties}
      >
          {data.map((card, index) => (
         <SwiperSlide key={index} className='flex justify-center items-center p-4 h-[600px]'>
           
                <Card  icon={false} className='flex flex-col sm:flex-row items-center sm:justify-around  w-full min-h-[519px] p-4'>
                    <div className={`${card.image} bg-center bg-no-repeat  min-w-[300px] h-[128px] bg-cover sm:w-[218px] sm:h-[326.38px] rounded-[13.01px]`}></div>
                    <div className='sm:w-1/2 flex flex-col justify-between'>
                        <div className='hidden sm:flex justify-around mb-4 text-xs w-1/2'>
                            <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                            <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                            <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                            <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                            <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                        </div>
                        <div className='flex flex-col-reverse sm:flex-col '>
                            <Paragraph className='text-xs leading-5 mt-4 sm:mt-0'>{card.content}</Paragraph>
                            <h1 className='border-b-[1px] border-black pb-4 sm:pb-0 sm:border-none text-xl font-bold mt-4'>{card.title}</h1>
                        </div>

                        <div className='flex w-fit items-center justify-between sm:hidden '>
                            <div className='h-8 w-8 flex mr-5 justify-center items-center text-[#FEA914] sm:hidden border rounded-full mt-5'>
                                <div className='w-4 h-4 flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div> 
                            <p className='text-md self-end  font-extrabold'>5.0</p>
                        </div>
                        {card.link && ( <LinkButton link={card.link} className='h-10 p-2.5 bg-white sm:hover:bg-yrci-red rounded-lg shadow border sm:border-red-600 justify-center items-center gap-2.5 inline-flex sm:hover:text-white sm:text-yrci-red text-base sm:font-bold uppercase mt-8 text-dark-teal border-dark-teal font-extrabold w-full'>start leraning</LinkButton>)}

                    </div>
                    
                    </Card>
               
        </SwiperSlide>

         ))}
      </Swiper>
    </>
  );
}

export default MobileNav
// import React, { useState } from 'react';
// import Card from './Card';
// import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Paragraph from './Typography/Paragraph';

//   const cards = [
//     { id: 1, title: 'Cody Wright', image: 'bg-cody-headshot', content: 'Cody Wright is a training specialist with the YRCI-University.  She supports all technical HR and leadership training and brings thirteen years of curriculum design and instructional experience to our dynamic team.  Cody has a B.A. in English from Texas A&M University and a M. Ed in Counseling Psychology from the University of Houston. She also has specialized training in corporate instructional design and adult learning principles through the Applied Instructional Design Academy.' },
//     { id: 2, title: 'Daniel Crane', image: 'bg-dan-headshot', content: 'Daniel Crane is a Sr. Training Specialist at YRCI-U with 15+ years of experience in professional development workshops, including Client Experience, Empowerment, and Federal Government navigation. Previously at the Shakespeare Theatre Company as Resident Teaching Artist, he excelled in communication and engagement strategies. His workshops served notable clients like the National Gallery of Art and the World Bank. Crane holds a BFA from Ithaca College and an MFA from George Washington University.' },
//     { id: 3, title: ' Diane Brundage', image: 'bg-diane-headshot', content: `Diane Brundage has thirty-three years of federal experience in all human resources functional areas. She has worked for the Department of the Air Force, Department of Defense Education Activity, Smithsonian Institution, U.S. Department of Housing & Development, and the Department of Homeland Security (TSA). Diane delivers trainings in all areas of Staffing, Classification, ECQ Writing, and preparation for the DE Certification Exam. Diane is recognized for delivering quality results in the areas of process rigor, discipline, and process improvements.`},
//     { id: 4, title: 'Cris Cedeno-Peralta', image: 'bg-cris-headshot', content: `Cris Cedeno-Peralta has nine years of HR experience in Staffing, Recruitment, Onboarding, and Coding/Processing with agencies like the Department of Commerce, Education, and the USDA. He earned a bachelor's degree from Winthrop University and holds certifications in Federal Staffing and Placement, Processing Federal Personnel Actions from Graduate School USA. Known for his problem-solving skills and expertise in federal regulations and hiring.`},
//     { id: 5, title: 'Tyesha Bennett', image: 'bg-tyesha-headshot', content: `Tyesha Bennett has 30 years of Human Resources experience in Staffing, Recruitment, Classification, Onboarding, and Coding/Processing with the following agencies:  NASA/Goddard Space Flight Center, the Department of Commerce, the Department of Energy, and the US Department of Agriculture/Agricultural Research Service. She is known for providing services that exhibit professionalism, dedication to customer service and extensive human resources expertise.`},
//   ];

// // interface CardProps {
// //         id: number;
// //         title: string;
// //         image: string;
// //         content: string;
// // }

// // interface CarouselProps {
// //     cards: CardProps[]
// // }
// const MobileCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     };
  
//     const handlePrev = () => {
//         console.log("click")
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//     };
  
//     return (
//       <div className="w-full items-center flex sm:hidden">
//                   <button onClick={handlePrev} className="pl-[.5rem] text-white text-3xl"> 
//                       <FontAwesomeIcon icon={faChevronLeft} />
//                   </button>
  
//         <div className="flex space-x-4 overflow-x-scroll sm:overflow-hidden justify-between">
//           <div className='flex flex-row justify-around w-full'>
//               {cards.slice(currentIndex, currentIndex + 1).map((card) => (
//                <Card icon={false} className='flex flex-col sm:flex-row items-center sm:justify-around  w-full min-h-[581px] h-fit m-8 p-4'>
//                <div className={`${card.image} bg-center bg-no-repeat  min-w-[300px] h-[128px] bg-cover sm:w-[218px] sm:h-[326.38px] rounded-[13.01px]`}></div>
//                <div className='sm:w-1/2 flex flex-col justify-between'>
//                    <div className='hidden sm:flex justify-around mb-4 text-xs w-1/2'>
//                       <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                       <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                       <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                       <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                       <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                    </div>
//                    <div className='flex flex-col-reverse sm:flex-col '>
//                        <Paragraph className='text-xs leading-5 mt-4 sm:mt-0'>{card.content}</Paragraph>
//                        <h1 className='border-b-[1px] border-black pb-4 sm:pb-0 sm:border-none text-xl font-bold mt-4'>{card.title}</h1>
//                    </div>
  
//                    <div className='flex w-fit items-center justify-between sm:hidden '>
//                        <div className='h-8 w-8 flex mr-5 justify-center items-center text-[#FEA914] sm:hidden border rounded-full mt-5'>
//                            <div className='w-4 h-4 flex justify-center items-center'>
//                                <FontAwesomeIcon icon={faStar} />
//                            </div>
//                        </div> 
//                        <p className='text-sm self-end mb-1'>5.0</p>
//                    </div>
//                </div>
//            </Card>
//               ))}
//           </div>
//         </div>
//         {/* <div className="flex justify-center space-x-4 mt-4">
//         </div> */}
//    <button onClick={handleNext} className="pr-[.5rem] text-white text-3xl"> 
//                       <FontAwesomeIcon icon={faChevronRight} />
//                   </button>
//       </div>
//     );
// };

// export default MobileCarousel;

// import { useState } from 'react';
// import { useSwipeable } from 'react-swipeable';
// import Card from './Card';
// import Paragraph from './Typography/Paragraph';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-regular-svg-icons/faStar';

// const cards = [
//     { id: 1, title: 'Cody Wright', image: 'bg-cody-headshot', content: 'Cody Wright is a training specialist with the YRCI-University.  She supports all technical HR and leadership training and brings thirteen years of curriculum design and instructional experience to our dynamic team.  Cody has a B.A. in English from Texas A&M University and a M. Ed in Counseling Psychology from the University of Houston. She also has specialized training in corporate instructional design and adult learning principles through the Applied Instructional Design Academy.' },
//     { id: 2, title: 'Daniel Crane', image: 'bg-dan-headshot', content: 'Daniel Crane is a Sr. Training Specialist at YRCI-U with 15+ years of experience in professional development workshops, including Client Experience, Empowerment, and Federal Government navigation. Previously at the Shakespeare Theatre Company as Resident Teaching Artist, he excelled in communication and engagement strategies. His workshops served notable clients like the National Gallery of Art and the World Bank. Crane holds a BFA from Ithaca College and an MFA from George Washington University.' },
//     { id: 3, title: ' Diane Brundage', image: 'bg-diane-headshot', content: `Diane Brundage has thirty-three years of federal experience in all human resources functional areas. She has worked for the Department of the Air Force, Department of Defense Education Activity, Smithsonian Institution, U.S. Department of Housing & Development, and the Department of Homeland Security (TSA). Diane delivers trainings in all areas of Staffing, Classification, ECQ Writing, and preparation for the DE Certification Exam. Diane is recognized for delivering quality results in the areas of process rigor, discipline, and process improvements.`},
//     { id: 4, title: 'Cris Cedeno-Peralta', image: 'bg-cris-headshot', content: `Cris Cedeno-Peralta has nine years of HR experience in Staffing, Recruitment, Onboarding, and Coding/Processing with agencies like the Department of Commerce, Education, and the USDA. He earned a bachelor's degree from Winthrop University and holds certifications in Federal Staffing and Placement, Processing Federal Personnel Actions from Graduate School USA. Known for his problem-solving skills and expertise in federal regulations and hiring.`},
//     { id: 5, title: 'Tyesha Bennett', image: 'bg-tyesha-headshot', content: `Tyesha Bennett has 30 years of Human Resources experience in Staffing, Recruitment, Classification, Onboarding, and Coding/Processing with the following agencies:  NASA/Goddard Space Flight Center, the Department of Commerce, the Department of Energy, and the US Department of Agriculture/Agricultural Research Service. She is known for providing services that exhibit professionalism, dedication to customer service and extensive human resources expertise.`},
//   ];

// const MobileCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlers = useSwipeable({
//     onSwipedLeft: () => handleSwipe('LEFT'),
//     onSwipedRight: () => handleSwipe('RIGHT'),
//   });

//   const handleSwipe = (direction: string) => {
//     if (direction === 'LEFT') {
//       setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 4));
//     } else if (direction === 'RIGHT') {
//       setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     }
//   };

//   return (
//     <div {...handlers} className="flex justify-between overflow-hidden sm:hidden">
//       {cards.map((card, index) => (
//         <Card key={index} icon={false} className='flex flex-col sm:flex-row sm:items-center sm:justify-around w-[350px] h-[519px] sm:w-[601.41px] sm:h-[395px] p-4'>
//         <div className={`${card.image} bg-center bg-no-repeat w-[310px] h-[128px] bg-cover sm:w-[218px] sm:h-[326.38px] rounded-[13.01px]`}>
//         </div>
//         <div className='sm:w-1/2 flex flex-col justify-between'>
//             <div className='hidden sm:flex justify-around mb-4 text-xs w-1/2'>
//                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//             </div>
//             <div className='flex flex-col-reverse sm:flex-col '>
//                 <Paragraph className='text-xs leading-5 mt-4 sm:mt-0'>{card.content}</Paragraph>
//                 <h1 className='border-b-[1px] border-black pb-4 sm:pb-0 sm:border-none text-xl font-bold mt-4'>{card.title}</h1>
//             </div>

//             <div className='flex w-fit items-center justify-between sm:hidden '>
//                 <div className='h-8 w-8 display flex mr-5 justify-center items-center text-[#FEA914] sm:hidden border rounded-full mt-5'>
//                     <div className='w-4 h-4'>
//                         <FontAwesomeIcon icon={faStar} />
//                     </div>
//                 </div> 
//                 <p className='text-sm self-end mb-1'>5.0</p>
//             </div>
//         </div>
//     </Card>
//       ))}
//          {/* <Card key={index} icon={false} className='flex flex-col sm:flex-row sm:items-center sm:justify-around w-[350px] h-[519px] sm:w-[601.41px] sm:h-[395px] p-4'>
//          <div className={`${card.image} bg-center bg-no-repeat w-[310px] h-[128px] bg-cover sm:w-[218px] sm:h-[326.38px] rounded-[13.01px]`}>
//          </div>
//          <div className='sm:w-1/2 flex flex-col justify-between'>
//              <div className='hidden sm:flex justify-around mb-4 text-xs w-1/2'>
//                 <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                 <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                 <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                 <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//                 <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
//              </div>
//              <div className='flex flex-col-reverse sm:flex-col '>
//                  <Paragraph className='text-xs leading-5 mt-4 sm:mt-0'>{card.content}</Paragraph>
//                  <h1 className='border-b-[1px] border-black pb-4 sm:pb-0 sm:border-none text-xl font-bold mt-4'>{card.title}</h1>
//              </div>

//              <div className='flex w-fit items-center justify-between sm:hidden '>
//                  <div className='h-8 w-8 display flex mr-5 justify-center items-center text-[#FEA914] sm:hidden border rounded-full mt-5'>
//                      <div className='w-4 h-4'>
//                          <FontAwesomeIcon icon={faStar} />
//                      </div>
//                  </div> 
//                  <p className='text-sm self-end mb-1'>5.0</p>
//              </div>
//          </div>
//      </Card> */}
    
//     </div>
//   );
// };

// export default MobileCarousel;
