import Button from '../ui/Button'
import Image from 'next/image'
import HeroImage from '../../assets/hero-right-content.png'
import Metrics from './Metrics'
import Paragraph from '../ui/Typography/Paragraph'
import LinkButton from '../ui/LinkButton'

//TODO: CREATE DESIGN FOR MOBILE METRICS SECTION
const Hero = () => {
  return (
    <section className='flex-col sm:flex-row flex justify-between items-center md:mx-8 lg:mx-24'>
        <div className='w-full p-8 sm:p-0 xl:w-1/2'>
            <div className='flex flex-col'>
                <h1 className='font-bold sm:text-6xl text-3xl'>Maximize Your Professional Value</h1>
                <h1 className='font-bold sm:text-6xl text-3xl text-yrci-red mb-8'>with YRCI University</h1>
                <Paragraph className='mb-8'>Unlock your potential with our tailored training programs for HR professionals. Immerse yourself in a dynamic learning environment featuring self-paced e-learning modules, interactive virtual instructor-led sessions, and collaborative peer learning experiences.</Paragraph>
                <LinkButton link='https://yrciuniversity.docebosaas.com/learn' className='text-white self-end w-8/12 text-lg sm:self-start sm:w-fit sm:px-8 bg-yrci-red'>Learn More</LinkButton>
            </div>
        </div>
        <div className='hidden xl:block w-2/5 relative'>
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

{/* <section className='flex justify-between items-center mx-24'>
<div className='w-1/2'>
    <h1 className='font-bold text-6xl'>Maximize Your Professional Value</h1>
    <h1 className='font-bold text-6xl text-yrci-red mb-8'>with YRCI University</h1>
    <p className='mb-8'>Unlock your potential with our tailored training programs for HR professionals. Immerse yourself in a dynamic learning environment featuring self-paced e-learning modules, interactive virtual instructor-led sessions, and collaborative peer learning experiences.</p>
    <Button>Explore Course Catalog</Button>
</div>
<div className='w-2/5 relative'>
    <div className='absolute'>
        <Metrics/>
    </div>
    <Image
        className='mt-8'
        src={HeroImage}
        alt="hero-content"
        width={460}
        height={637}
    />
</div>
</section> */}
export default Hero