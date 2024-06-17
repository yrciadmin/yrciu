// components/CourseCard.tsx
import React from 'react'
import Image from 'next/image'
import LinkButton from '../ui/LinkButton'

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
    <div className='bg-white border-2 border-light-gray flex flex-col rounded-lg p-5 3xl:w-[447px] 4xl:w-[547px]'>
      <div className='aspec aspec relative aspect-[4/3] shrink-0 h-[167px]'>
        <Image src={image} alt={title} fill={true} />
      </div>
      <h1 className='my-3 font-semibold text-lg uppercase border-b border-dark-gray pb-3 flex items-center justify-center md:min-h-[98px] '>{title}</h1>
      <div className='flex flex-col'>
        {time && (
          <div className='flex justify-between'>
            <h1 className='text-neutral-400 text-[13px] 3xl:text-md font-bold capitalize'>Time:</h1>
            <p className='text-right text-black text-[.8rem] 3xl:text-lg font-bold capitalize'>{time}</p>
          </div>
        )}
        {category && (
          <div className='flex justify-between items-center'>
            <h1 className='text-neutral-400 text-[13px] 3xl:text-md font-bold capitalize'>Category:</h1>
            <p className='text-right text-black text-[.8rem] 3xl:text-lg font-bold capitalize'>{category}</p>
          </div>
        )}
        {cost && (
          <div className='flex justify-between'>
            <h1 className='text-neutral-400 text-[13px] 3xl:text-md font-bold capitalize'>Cost:</h1>
            <p className='text-right text-yrci-red text-[.8rem] 3xl:text-lg font-bold capitalize'>{cost}</p>
          </div>
        )}
        <div className='h-[168px] min-h-[174px] mt-4'>
          <p className='text-sm 3xl:text-lg'>{content}</p>
        </div>
      </div>
      <LinkButton link={link} className="w-full h-10 p-2.5 bg-white hover:bg-yrci-red rounded-lg shadow border border-red-600 justify-center items-center gap-2.5 inline-flex hover:text-white text-yrci-red text-base font-bold uppercase 3xl:mt-12">Start Learning</LinkButton>
    </div>
  )
}

export default CourseCard
