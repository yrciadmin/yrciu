"use client"
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AmericorpsLogo from '../../assets/logos/Americorps.png'
import USDAARSLogo from '../../assets/logos/USDA-ARS_white.png'
import CommerceLogo from '../../assets/logos/Department-of-commerce.png'
import NOAALogo from '../../assets/logos/NOAA_white.png'
import TrademarkLogo from '../../assets/logos/US_Patent_and_Trademark_Office_black and white.png'




interface BannerPorps {
    images?: {
      src: string;
      name: string;
    }[];
    speed: number;
  }
  
 const InfiniteScroll = ({  speed }: BannerPorps) => {
  
    const images = [
        {src: AmericorpsLogo, name: "Ameri Corp"},
        {src: USDAARSLogo, name: "USDA"},
        {src: CommerceLogo, name: "US Commerce"},
        {src: NOAALogo, name: "NOAA"},
        {src: TrademarkLogo, name: "US Trademark"},
        {src: AmericorpsLogo, name: "Ameri Corp"},
        {src: USDAARSLogo, name: "USDA"},
        {src: CommerceLogo, name: "US Commerce"},
        {src: NOAALogo, name: "NOAA"},
        {src: TrademarkLogo, name: "US Trademark"}
      ]


    return (
        <div className="block w-full h-fit xl:hidden">
        <Swiper
             effect='slide'
             slidesPerView={2} 
           
             loop={true}
             autoplay={{
                 "delay": 1000,
                 "stopOnLastSlide": false,
                 "waitForTransition": true
             }}
             modules={[Autoplay]}
        >
            <div className="border-8">
        {images.map((item, index) => 
        <SwiperSlide key={index}>
            <div  className="mx-4">
                <Image width={0} height={0} src={item.src} alt={item.name}/>
            </div>
        </SwiperSlide>)}
        </div>
        </Swiper>
        </div>
    )
    // return (
    //   <div className='images' style={imagesStyle}>
    //     {images.map(({ src, name }) => (
    //       <div className='image'>
    //         <img src={src} alt={name} />
    //       </div>
    //     ))}
    //   </div>
    // );
  }
  
  export default InfiniteScroll;
