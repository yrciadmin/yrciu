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

const TabletCarousel = ({data, button, color, num_slides}: CarouselProps) => {
    return (
        <>
          <Swiper
            slidesPerView={num_slides}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper w-full h-fit p-4"
            style={{
                "--swiper-pagination-bullet-size": "12px",
                "--swiper-pagination-color": `${color}`,
                "--swiper-pagination-top": "950px",
                "paddingBottom": "50px",
    
            } as CSSProperties}
          
          >
              {data.map((card, index) => (
             <SwiperSlide key={index} className='flex justify-center items-center p-4 h-[600px]'>
            
                    <Card  icon={false} className='w-11/12 sm:w-[430px] py-8 px-5 bg-white border-2 border-light-gary flex flex-col  items-center rounded-lg m-4 sm:m-10 h-fit'>
                        <div className={`${card.image} bg-center bg-no-repeat w-[350px]  h-[323px] bg-cover `}></div>
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
    
                            <div className='flex w-fit items-center justify-between md:hidden '>
                                <div className='h-8 w-8 flex mr-5 justify-center items-center text-[#FEA914] border rounded-full mt-5'>
                                    <div className='w-4 h-4 flex justify-center items-center'>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div> 
                                <p className='text-md self-end  font-extrabold'>5.0</p>
                            </div>
                            {card.link && (
                                <div className='flex items-center justify-center'>
                                <LinkButton link="https://yrciuniversity.docebosaas.com/learn/courses/45/delegated-examining-certification-preparatory-course" className="sm:w-[390px] w-full h-10 p-2.5 bg-white lg:hover:bg-yrci-red rounded-lg shadow border lg:border-red-600 justify-center items-center gap-2.5 inline-flex  lg:text-yrci-red text-base sm:font-bold mt-8 text-dark-teal border-dark-teal font-extrabold">Start Learning</LinkButton>

                                     {/* <LinkButton link={card.link} className='h-10 p-2.5 bg-white  rounded-lg shadow border justify-center items-center gap-2.5 inline-flex  text-base  uppercase mt-8 text-dark-teal border-dark-teal font-extrabold self-center'>start leraning</LinkButton> */}
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