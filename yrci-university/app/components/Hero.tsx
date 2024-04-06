import Button from '../ui/Button'
import Image from 'next/image'
import HeroImage from '../../assets/hero-right-content.png'
import Metrics from './Metrics'
import Paragraph from '../ui/Typography/Paragraph'
import LinkButton from '../ui/LinkButton'

//TODO: CREATE DESIGN FOR MOBILE METRICS SECTION
const Hero = () => {
  return (
    <section className='flex-col sm:flex-row flex justify-between 2xl:justify-around items-center md:mx-8 2xl:mx-24 flex-grow'>
            <div className='flex flex-col w-full lg:w-1/2 2xl:w-1/2 '>
                <div className='px-4 md:px-0 bg-hero-bg-mobile bg-cover bg-center md:bg-none flex flex-col justify-center 2xl:justify-start h-40 md:h-fit  2xl:flex-row  w-fit  xs:w-full  md:w-fit border-b-2  border-yrci-black md:border-none'>
                    <h1 className='font-bold w-full sm:w-4/5 xs:min-w-[460px] sm:min-w-[488px] md:min-w-[550px] xl:min-w-[730px] 2xl:min-w-[808px] xs:max-w-[460px] sm:max-w-[500px] lg:w-full  md:text-4xl lg:text-[32px] text-3xl xl:text-5xl'>Maximize Your Professional Value <span className='font-bold md:text-4xl lg:text-[32px] text-3xl text-yrci-red mb-8 xl:text-5xl'>with YRCI University</span></h1>
                    {/* <h1 className='font-bold md:text-4xl lg:text-5xl text-3xl text-yrci-red mb-8'>with YRCI University</h1> */}
                </div>
                <Paragraph className='my-8 w-full md:w-8/12 lg:w-11/12 2xl:w-full px-4  md:px-0 pb-4'>Unlock your potential with our tailored training programs for HR professionals. Immerse yourself in a dynamic learning environment featuring self-paced e-learning modules, interactive virtual instructor-led sessions, and collaborative peer learning experiences.</Paragraph>
                <LinkButton link='https://www.yrciuniversity.com/learn' className='self-end text-white text-center text-lg  sm:self-start w-18/12 sm:w-fit  sm:px-8 2xl-h-20 mx-8 sm:mx-4 md:mx-0 xl:mx-0 bg-yrci-red capitalize'>explore catalog</LinkButton>
            </div>
        <div className='hidden lg:flex xl:flex-col lg:w-fit relative'>
            <div className='absolute'>
                <Metrics/>
            </div>
            <Image
                className='mt-8'
                src={HeroImage}
                alt="hero-content"
                width={0}
                height={0}
                style={{height: '637px', width: '460px'}}
            />
        </div>
    </section>
  )
}


export default Hero