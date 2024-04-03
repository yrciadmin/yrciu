import Button from '../ui/Button'
import Image from 'next/image'
import HeroImage from '../../assets/hero-right-content.png'
import Metrics from './Metrics'
import Paragraph from '../ui/Typography/Paragraph'
import LinkButton from '../ui/LinkButton'

//TODO: CREATE DESIGN FOR MOBILE METRICS SECTION
const Hero = () => {
  return (
    <section className='flex-col sm:flex-row flex justify-between items-center lg:mx-24'>
        <div className='w-full sm:p-0 xl:w-1/2 flex items-center'>
            <div className='flex flex-col'>
                <div className='px-4 xl:px-0 bg-hero-bg-mobile bg-cover bg-center md:bg-none flex flex-col justify-center h-40 md:h-fit md:px-8'>
                    <h1 className='font-bold md:text-4xl lg:text-5xl text-3xl'>Maximize Your Professional Value</h1>
                    <h1 className='font-bold md:text-4xl lg:text-5xl text-3xl text-yrci-red mb-8'>with YRCI University</h1>
                </div>

                <Paragraph className='mb-8 md:w-8/12 xl:w-full 2xl:w-full px-4 md:px-8 xl:px-0 pb-4 '>Unlock your potential with our tailored training programs for HR professionals. Immerse yourself in a dynamic learning environment featuring self-paced e-learning modules, interactive virtual instructor-led sessions, and collaborative peer learning experiences.</Paragraph>
                <LinkButton link='https://www.yrciuniversity.com/learn' className='self-end text-white text-center text-lg sm:self-start w-18/12 sm:w-fit sm:px-8 mx-8 xl:mx-0 bg-yrci-red capitalize'>explore course catalog</LinkButton>
            </div>
        </div>
        <div className='hidden xl:flex xl:flex-col lg:w-3/5 xl:w-2/5 relative'>
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