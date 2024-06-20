import React from 'react'
import Image from 'next/image'
import AccentImg from '../../assets/teal-circle-stripes.png'
import Group from '../../assets/group-price.jpg'
import WCUImage from './../../assets/why-choose-us-image-left.png';
import RightImage from './../../assets/pricing.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../app/ui/Card';
import ExpandableCard from '../app/ui/ExpandableCard';
import LinkButton from '../app/ui/LinkButton';
import Heading from '../app/ui/Typography/Heading';
import Paragraph from '../app/ui/Typography/Paragraph';
import ContactUs from './ContactUs';

const GroupPrice = () => {
  return (
    <section className='flex flex-col items-center mt-32 mx-4 md:mx-8 2xl:mx-24  justify-center'>
    <div className='flex flex-col justify-center  mb-8 xl:border-b-4 border-dark-teal'>
      <div className='flex flex-col justify-center items-center w-full xl:mb-8'>
          <Heading className='text-2xl xs:text-3xl sm:text-5xl self-center mb-8'>Interested in Group Rates?</Heading>
          <Paragraph className='w-full  xl:w-4/5 self-center h-168 md:text-xl md:leading-loose'>Unlock exclusive savings with our group rates. Whether you're a small team or a large organization, we provide competitive pricing options tailored to your group size. Maximize your budget and streamline your booking process with our cost-effective solutions. Contact us to learn more about how our group rates can benefit your team. </Paragraph>
      </div>
    </div>
   <ContactUs/>

</section>
//     <div className="w-full flex justify-around h-[805.98px] border">
//     <div className="w-[677.47px] h-[446.11px]  border">
//     <Image
//                 alt="Why choose use"
//                 // className='w-full sm:w-2/6 hidden xl:block'
//                 src={WCUImage}
//                 height={0}
//                 width={0}
//             />
//         {/* <Image width={0} height={0} className="w-[499.53px] h-[446.11px] left-0 top-0 absolute" src={AccentImg} alt=""/>
//         <Image width={0} height={0} className="w-[331.09px] h-[398.53px] left-[346.38px] top-[24.04px] absolute rounded-2xl" src={Group} alt=""/> */}
//     </div>
 
//     <div className="w-[674px] h-[276.55px]  ">
//         <div className="w-[674px] left-0 top-0 absolute text-black text-5xl font-bold">Why choose YRCI? </div>
//         <div className="w-[674px] left-0 top-[80px] absolute text-black text-base font-normal leading-relaxed">Lorem ipsum dolor sit amet consectetur. Volutpat dis condimentum a etiam sit sapien. Aenean laoreet aliquet cum metus fusce eleifend etiam. Ut lacus erat non sapien consectetur. At leo ultrices non suspendisse mattis. Enim erat id risus mi magna semper. Sit diam malesuada tempus sollicitudin nisl a quis. Ridiculus netus dui sagittis elementum venenatis et.</div>
//         <div className="w-[164.87px] h-[38.55px] left-0 top-[238px] absolute">
//             <div className="w-[164.87px] h-[38.55px] left-[-0px] top-[38.55px] absolute bg-slate-500 rounded" />
//             <div className="w-[132.83px] left-[16.46px] top-[8.27px] absolute text-white text-lg font-normal">Learn more</div>
//             <div className="w-[11.23px] h-[8.60px] left-[138.01px] top-[18.92px] absolute">
//                 <div className="w-[10.53px] h-[0px] left-0 top-[4.21px] absolute border-2 border-white"></div>
//                 <div className="w-[5.62px] h-[0px] left-[7.02px] top-0 absolute origin-top-left rotate-[51.34deg] border-2 border-white"></div>
//                 <div className="w-[5.62px] h-[0px] left-[7.72px] top-[8.60px] absolute origin-top-left rotate-[-51.34deg] border-2 border-white"></div>
//             </div>
//         </div>
    
//     </div>
// </div>
  )
}

export default GroupPrice