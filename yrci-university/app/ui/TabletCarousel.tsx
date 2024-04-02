"use client"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { CSSProperties } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import LinkButton from './LinkButton';
import Paragraph from './Typography/Paragraph';

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
    num_slides?: number
}

const TabletCarousel = ({data, button, color}: CarouselProps) => {
    return (
        <>
          <Swiper
            slidesPerView={2}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper w-full h-fit p-4"
            style={{
                "--swiper-pagination-bullet-size": "12px",
                "--swiper-pagination-color": `${color}`,
                "--swiper-pagination-top": "680px",
                "padding-bottom": "50px",
    
            } as CSSProperties}
          
          >
              {data.map((card, index) => (
             <SwiperSlide key={index} className='flex justify-center items-center p-4 h-[600px]'>
               
                    <Card  icon={false} className='flex flex-col items-center w-11/12  min-h-[650px] p-4'>
                        <div className={`${card.image} bg-center bg-no-repeat w-full md:w-[300px] md:h-[423px] h-[128px] bg-cover  sm:min-h-[126.38px] rounded-[13.01px]`}></div>
                        <div className='w-11/12 flex flex-col justify-between min-h-[465px]'>
                            <div className='hidden justify-around mb-4 text-xs w-1/2'>
                                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                                <div className='w-5 text-[#FEA914]'><FontAwesomeIcon icon={faStar} /></div> 
                            </div>
                            <div className='flex flex-col-reverse'>
                                <Paragraph className='text-xs md:text-md leading-5 mt-4  min-h-[181px]'>{card.content}</Paragraph>
                                <h1 className='flex items-end border-b-[1px] border-black pb-2 md:pb-0  text-lg font-bold mt-4 min-h-[89px] justify-self-center'>{card.title}</h1>
                            </div>
    
                            <div className='flex w-fit items-center justify-between '>
                                <div className='h-8 w-8 flex mr-5 justify-center items-center text-[#FEA914] border rounded-full mt-5'>
                                    <div className='w-4 h-4 flex justify-center items-center'>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div> 
                                <p className='text-md self-end  font-extrabold'>5.0</p>
                            </div>
                            {card.link && (
                                <div className='flex items-center justify-center'>
                                     <LinkButton link={card.link} className='h-10 p-2.5 bg-white  rounded-lg shadow border justify-center items-center gap-2.5 inline-flex  text-base  uppercase mt-8 text-dark-teal border-dark-teal font-extrabold self-center'>start leraning</LinkButton>
                                     </div>
                                     )}
    
                        </div>
                        
                        </Card>
                   
            </SwiperSlide>
    
             ))}
          </Swiper>
        </>
      
  )
}

export default TabletCarousel