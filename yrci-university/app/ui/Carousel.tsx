"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import Paragraph from './Typography/Paragraph';

interface DataProps {
    id: number;
    title: string;
    image: string;
    content: string; 
}

interface CarouselProps {
    data: DataProps[]
}

const Carousel = ({ data }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2 < data.length ? prevIndex + 2 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : data.length - 2));
  };

  return (
    <div className="w-full display hidden xl:flex">
                <button onClick={handlePrev} className="pl-8  text-white text-6xl"> 
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

      <div className="flex space-x-4 overflow-x-scroll sm:overflow-hidden justify-between w-full">
        <div className='flex flex-row p-5 justify-around w-full'>
            {data.slice(currentIndex, currentIndex + 2).map((card) => (
             <Card key={card.id} icon={false} className='flex flex-col sm:flex-row sm:items-center sm:justify-around w-[350px] h-[519px] sm:w-[601.41px] sm:h-[395px] p-4'>
             <div className={`${card.image} bg-center bg-no-repeat w-[310px] h-[128px] bg-cover sm:w-[218px] sm:h-[326.38px] rounded-[13.01px]`}></div>
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
                     <div className='h-8 w-8 display flex mr-5 justify-center items-center text-[#FEA914] sm:hidden border rounded-full mt-5'>
                         <div className='w-4 h-4'>
                             <FontAwesomeIcon icon={faStar} />
                         </div>
                     </div> 
                     <p className='text-sm self-end mb-1'>5.0</p>
                 </div>
             </div>
         </Card>
            ))}
        </div>
      </div>
 <button onClick={handleNext} className="pr-8 text-white text-6xl"> 
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
    </div>
  );
};

export default Carousel;
