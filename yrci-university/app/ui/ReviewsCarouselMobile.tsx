"use client"
import React, { CSSProperties, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import Paragraph from './Typography/Paragraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import LinkButton from './LinkButton';
import Heading from './Typography/Heading';

interface DataProps {
    id: number;
    title: string;
    image?: string;
    content: string; 
}

interface CarouselProps {
    data: DataProps[]
    color: string;
}

const ReviewsCarouselMobile = ({ data, color }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 < data.length ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 2 : data.length - 1));
  };

  const cardColorClasses = [
    'bg-dark-teal',
    'bg-mustard-yellow',
    'bg-muted-turquise',
  ]

  
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper w-full h-fit p-4"
        style={{
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-color": `${color}`,
            "--swiper-pagination-top": "560px",
            "padding-bottom": "50px",

        } as CSSProperties}
      >
          {data.map((item, index) => (
         <SwiperSlide key={index} className='flex justify-center items-center p-4 h-[600px] swiper-slide'>
                <Card key={index} icon={false} className={`${cardColorClasses[index % cardColorClasses.length]} flex flex-col sm:flex-row items-center sm:justify-around  w-[329px] sm:w-[429px] min-h-[519px] p-4`}>
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

export default ReviewsCarouselMobile;
