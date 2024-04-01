"use client"
import React, { CSSProperties, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import Paragraph from './Typography/Paragraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';

interface DataProps {
    id: number;
    title: string;
    image?: string;
    content: string; 
}

interface CarouselProps {
    data: DataProps[]
    num_slides?: number
}

const Carousel = ({ data, num_slides }: CarouselProps) => {
  const cardColorClasses = [
    'bg-dark-teal',
    'bg-mustard-yellow',
    'bg-muted-turquise',
  ]

  const swiperParams = {
    navigation: {
        nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }
  return (
    <>
      <Swiper
        slidesPerView={3 || num_slides}
        spaceBetween={30}
        navigation={true} 
        modules={[Navigation]}
        
        // loop={true}
        className="swipers"
        style={{
            "swiper-button-prev": "border 5px solid red"
        } as CSSProperties}
      >
        {data.map((item, index) => (
         <SwiperSlide key={index} className='flex justify-end items-center h-[600px] w-[320px] swiper-slides' style={{display: "flex", justifyContent: "flex-end", width: "320px"}}>
                <Card key={index} icon={false} className={`${cardColorClasses[index % cardColorClasses.length]} shadow-2xl justify-self-end self-end text-white flex flex-col sm:flex-row items-center sm:justify-around  w-[602px] min-h-[519px] p-4`}>
                    <div className='flex flex-col text-white'>
                        <div className='text-6xl mb-4'><FontAwesomeIcon icon={faQuoteLeft}/></div>
                        <Paragraph className='self-center h-80'>{item.content}</Paragraph>
                        <Paragraph className='mt-8 text-lg font-bold'>{item.title}</Paragraph>
                    </div>
                   
                    </Card>
               
        </SwiperSlide>

         ))}
      </Swiper>
    </>
  );
};

export default Carousel;
