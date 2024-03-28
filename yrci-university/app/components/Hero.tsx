import Button from '../ui/Button'
import Image from 'next/image'
import HeroImage from '../../assets/hero-right-content.png'
import Metrics from './Metrics'
import Paragraph from '../ui/Typography/Paragraph'

//TODO: CREATE DESIGN FOR MOBILE METRICS SECTION
const Hero = () => {
  return (
    <section className='flex-col sm:flex-row flex justify-between items-center sm:mx-24'>
        <div className='w-full p-8 sm:p-0 sm:w-1/2'>
            <div className='flex flex-col'>
                <h1 className='font-bold sm:text-6xl text-3xl'>Maximize Your Professional Value</h1>
                <h1 className='font-bold sm:text-6xl text-3xl text-yrci-red mb-8'>with YRCI University</h1>
                <Paragraph className='mb-8'>Unlock your potential with our tailored training programs for HR professionals. Immerse yourself in a dynamic learning environment featuring self-paced e-learning modules, interactive virtual instructor-led sessions, and collaborative peer learning experiences.</Paragraph>
                <Button className='self-center w-8/12 text-sm sm:self-start sm:w-fit'>Explore Course Catalog</Button>
            </div>
        </div>
        <div className='hidden sm:block w-2/5 relative'>
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