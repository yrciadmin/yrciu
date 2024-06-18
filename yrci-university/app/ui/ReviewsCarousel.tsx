"use client"
import React, { CSSProperties, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import Paragraph from './Typography/Paragraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import dots from "./../../assets/dots.png"
import logo from "./../../assets/YRCIU-WhiteSmall.png"

import Image from 'next/image';

interface DataProps {
    id: number;
    title: string;
    image?: string;
    content: string; 
    value?: string;
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

  const handleSwiper = (swiper: any) => {
    // Check if we're at the beginning of the swiper and disable/enable navigation buttons accordingly
    swiper.on('reachBeginning', () => {
      swiper.navigation.prevEl.classList.add('swiper-button-disabled');
    });
    swiper.on('reachEnd', () => {
      swiper.navigation.nextEl.classList.add('swiper-button-disabled');
    });
    swiper.on('fromEdge', () => {
      swiper.navigation.prevEl.classList.remove('swiper-button-disabled');
      swiper.navigation.nextEl.classList.remove('swiper-button-disabled');
    });
  };

  return (
    <>
      <Swiper
        slidesPerView={num_slides || 3.5}
        navigation={true} 
        modules={[Navigation]}
        className="swipers"
        onSwiper={handleSwiper} // Set the Swiper instance
        spaceBetween={30}
        loop
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className='h-[600px] swiper-slide'>
            <div className="w-[352.06px] xl:w-[552.06px] h-[563.29px] rounded-lg flex-col justify-end items-center inline-flex overflow-hidden md:ml-8">
              <div className="w-[374px] h-[605px] relative mb-8">
                <div className={`${cardColorClasses[index % cardColorClasses.length]} w-[352.06px] h-[563.29px] left-0 top-0 absolute rounded-lg`} />
                <Image className="w-[230px] h-[200px] left-[110px] top-[274px] absolute" src={logo} alt={'style'} />
                {/* <div className="w-11/12 h-[69px] left-[17px] top-[487px] absolute text-white text-xl font-semibold font-['Work Sans'] uppercase flex justify-center items-center">
                  {item.title}
                </div>
                <div className="w-[87px] h-[22px] left-[17px] top-[465px] absolute text-yrci-blaxk text-lg font-extrabold font-['Work Sans'] uppercase">Course</div>
                <div className="w-[298px] h-[218px] left-[27px] top-[31px] absolute">
                  <div className="w-[294px] left-[13px] lg:left-[3px] top-[97px] absolute text-white text-base font-normal leading-[30.18px] italic">
                    <p><span className='text-3xl mr-1'>"</span>{item.content}<span className='text-3xl ml-.5'>"</span></p>
                  </div>
                  <div className="w-[298px] h-[52px] left-0 top-[35px] absolute text-white text-[45px] font-bold font-['Work Sans'] leading-[30.18px] uppercase">{item.value}</div>
                  <div className="w-[25px] h-[25px] left-0 top-0 absolute rounded-lg flex-col justify-start items-start inline-flex" />
                </div> */}
                <div className="w-11/12 h-[69px] left-[17px] top-[487px] absolute text-white text-xl font-semibold font-['Work Sans'] uppercase ">
                  {item.title}
                </div>
                <div className="w-[87px] h-[22px] left-[17px] top-[465px] absolute text-yrci-blaxk text-lg font-extrabold font-['Work Sans'] uppercase">Course</div>
                 <div className="text-center h-full z-10 absolute w-[350px] flex flex-col justify-between">
                  <div className='mt-16'>
                    <div className="text-white text-[45px] font-bold font-['Work Sans'] leading-[30.18px] uppercase mt-4">{item.value}</div>
                    <p className="p-4 text-white text-left text-base font-normal leading-[30.18px] italic  mt-8"><span className='text-3xl mr-1'>"</span>{item.content}<span className='text-3xl ml-.5'>"</span></p>
                  </div>
                  {/* <div className="border-2 flex flex-col">
                    <div className="text-yrci-blaxk text-lg font-extrabold font-['Work Sans'] uppercase mt-2 flex">Course</div>
                    <div className="text-white text-xl font-semibold font-['Work Sans'] uppercase flex text-left">{item.title}</div>
                  </div> */}
                </div>
                <Image className="w-[100px] h-[100px] left-[250px] top-[470px] absolute opacity-5" src={dots} width={0} height={0} alt="style" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
