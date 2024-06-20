// components/CourseCard.tsx
import React from 'react'
import Image from 'next/image'
import LinkButton from '../ui/LinkButton'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface CourseCardProps {
  title: string;
  image: string; // Using string for URLs
  link: string;
  time?: string;
  category?: string;
  cost?: string;
  content: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, image, link, time, category, cost, content }) => {
  return (
  
    // <div className="w-[900px] h-[1268.31px]grid grid-cols-1 items-stretch gap-[30px] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 place-items-center left-0 top-[85px] absolute border-8">
    <div className="w-[430px] h-fit px-5 py-[30px]  bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start gap-[19px] inline-flex">
      <div className="w-[390px] relative h-[200px] min-h-[200px] rounded-md shadow-inner border-2">
        <Image
          src={image}
          alt={"title"}
          fill={true}
          className='w-full h-full rounded-md object-cover' 
          />
      </div>
      <div>
        <div className="w-[390px] h-16 min-h-16 text-black text-xl flex items-center font-semibold uppercase mb-8">
            {title}      
        </div>
        <div className="w-[390px] h-[0px] border border-neutral-400 mb-4"></div>
        </div>
      <div className="w-[390px] h-[100px] min-h-[100px] relative">
        <div className="w-[390px] h-[22px] left-0 top-0 absolute">
          <div className="w-[81.11px] left-0 top-0 absolute text-neutral-400 text-[13px] font-bold capitalize">
            Time:
          </div>
          <div className="w-[160.49px] left-[229.51px] top-0 absolute text-right text-black text-lg font-semibold capitalize">
            {time}
          </div>
        </div>
        <div className="w-[390px] h-[22px] left-0 top-[28.69px] absolute">
          <div className="w-[309px] left-[81px] top-0 absolute text-right text-black text-lg font-semibold capitalize">
            {category}{" "}
          </div>
          <div className="w-[158.76px] left-0 top-[1.31px] absolute text-neutral-400 text-[13px] font-bold capitalize">
            Category:
          </div>
        </div>
        <div className="w-[390px] h-[22px] left-0 top-[59px] absolute">
          <div className="w-[113.89px] left-[276.11px] top-0 absolute text-right text-red-600 text-lg font-semibold capitalize">
            {cost}
          </div>
          <div className="w-[158.76px] left-0 top-0 absolute text-neutral-400 text-[13px] font-bold capitalize">
            Cost:
          </div>
        </div>
      </div>
      <div className="w-[390px] text-black text-[13px] h-[78px] min-h-[74px] font-normal">
       {content}
      </div>
      <div className="justify-start items-center gap-2.5 inline-flex my-4">
        <div className="w-[25px] h-[25px] bg-zinc-300/opacity-0 rounded-full border border-gray-200 flex items-center justify-center" >
            <FontAwesomeIcon icon={faStar} className='text-[12px] text-yellow-400'/>
        </div>
        <div className="w-[12.50px] h-[12.60px] relative" />
        <div className="w-[22.55px] text-black text-[13px] font-semibold ">
          5.0
        </div>
      </div>
      {/* <LinkButton link={link} className="w-[390px] text-yrci-red text-base p-2.5 bg-white rounded-lg shadow border border-yrci-red justify-center items-center gap-2.5 inline-flex">Start Learning</LinkButton> */}

      <Link href={link} target='_blank' className="w-[390px] shadow-lg shadow-red-shadow text-yrci-red hover:text-white p-2.5 bg-white rounded-lg  border hover:bg-yrci-red  border-yrci-red justify-center items-center gap-2.5 inline-flex">
        <div className="text-base uppercase ">
          Start Learning
        </div>
      </Link>
    </div>

 

    // <div className='bg-white border-2 border-light-gray flex flex-col rounded-lg p-5 w-[430px] h-[613px] 3xl:w-[447px] 4xl:w-[547px]'>
    //   <div className='aspec aspec relative aspect-[4/3] shrink-0 h-[167px]'>
    //     <Image src={image} alt={title} fill={true} />
    //   </div>
    //   <h1 className='w-[390px] text-black text-xl font-semibold  uppercase my-3   border-b border-dark-gray pb-3 flex items-center justify-center md:min-h-[98px] '>{title}</h1>
    //   <div className='flex flex-col'>
    //     {time && (
    //       <div className='flex justify-between'>
    //         <h1 className='text-neutral-400 text-[13px] 3xl:text-md font-bold capitalize'>Time:</h1>
    //         <p className='text-right text-black text-[.8rem] 3xl:text-lg font-bold capitalize'>{time}</p>
    //       </div>
    //     )}
    //     {category && (
    //       <div className='flex justify-between items-center'>
    //         <h1 className='text-neutral-400 text-[13px] 3xl:text-md font-bold capitalize'>Category:</h1>
    //         <p className='text-right text-black text-[.8rem] 3xl:text-lg font-bold capitalize'>{category}</p>
    //       </div>
    //     )}
    //     {cost && (
    //       <div className='flex justify-between'>
    //         <h1 className='text-neutral-400 text-[13px] 3xl:text-md font-bold capitalize'>Cost:</h1>
    //         <p className='text-right text-yrci-red text-[.8rem] 3xl:text-lg font-bold capitalize'>{cost}</p>
    //       </div>
    //     )}
    //     <div className='h-[168px] min-h-[174px] mt-4'>
    //       <p className='text-sm 3xl:text-lg'>{content}</p>
    //     </div>
    //   </div>
    //   <LinkButton link={link} className="w-full h-10 p-2.5 bg-white hover:bg-yrci-red rounded-lg shadow border border-red-600 justify-center items-center gap-2.5 inline-flex hover:text-white text-yrci-red text-base font-bold uppercase 3xl:mt-12">Start Learning</LinkButton>
    // </div>
  )
}

export default CourseCard
