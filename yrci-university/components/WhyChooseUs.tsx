import Image from 'next/image';
import WCUImage from './../assets/why-choose-us-image-left.png';
import RightImage from './../../assets/pricing.png';

import Heading from '../app/ui/Typography/Heading';
import Button from '../app/ui/Button';
import Paragraph from '../app/ui/Typography/Paragraph';
import Card from '../app/ui/Card';
import Icon from '../assets/icons/card_icon1.png';
import Icon2 from '../assets/icons/card_icon2.png';
import Icon3 from '../assets/icons/card_icon3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ExpandableCard from '../app/ui/ExpandableCard';
import LinkButton from '../app/ui/LinkButton';

const WhyChooseUs = () => {
  return (
    <section className='flex flex-col mt-12 items-center 2xl:justify-around mx-4 md:mx-8 2xl:mx-24'>
        <div className='flex-col sm:flex-row flex justify-center sm:justify-between mb-8'>
            <div className='hidden lg:flex lg:w-2/5 2xl:w-3/5'>
                <Image
                    alt="Why choose us"
                    className='mr-8'
                    src={WCUImage}
                    height={0}
                    width={0}
                />
            </div>
          
            <div className='flex flex-col 2xl:self-center justify-center items-center sm:block w-full lg:w-1/2 sm:mr-8 sm:ml-8 mt-8 sm:mt-0'>
                <Heading className='mb-8 text-4xl md:text-5xl 2xl:text-6xl'>Sharpen your Skills</Heading>
                <Paragraph className='mb-8 h-168 '>Our training programs provide in-depth insights and practical tools to enhance your expertise in key areas of human resources. Whether you're a seasoned HR professional looking to expand your knowledge or a newcomer to the field seeking to build a strong foundation, our courses are tailored to meet your learning needs and objectives.  </Paragraph>
                <LinkButton link="/faq" className='bg-dark-teal sm:bg-muted-turquise self-start mr-8  text-white py-2 px-4 text-center w-6/12 xs:w-1/4 2xl:w-4/12'>FAQ<FontAwesomeIcon className="ml-4" icon={faArrowRight}/></LinkButton>
            </div>
          
        </div>
        <div className='flex lg:flex sm:hidden xl:flex-row flex-col items-center w-full justify-center sm:justify-around mt-8 md:overflow-y-auto xl:overflow-hidden'>
            <ExpandableCard icon icon_img={Icon} title="Sharpen your Skills" className='h-[380.05px] xl:h-[370.05px] xl:mx-0 p-4 border-mustard-yellow  shadow-xl shadow-mustard-shadow  mb-8 sm:mb-0 overflow-hidden' iconClassName='bg-mustard-yellow' >
                <p className='mt-4 text-sm leading-loose'>Earning industry-recognized credentials is a powerful way to validate your expertise and stand out in a competitive job market. Our certification training programs provide you with the opportunity to earn valuable credentials that demonstrate your proficiency and mastery of essential HR concepts and practices. </p>
            </ExpandableCard>

            <ExpandableCard icon icon_img={Icon2} title="Shape your Career" className='h-[380.05px] xl:h-[370.05px] xl:mx-0 p-4 border-yrci-red  shadow-xl shadow-red-shadow-mb  md:shadow-red-shadow mb-8 sm:mb-0 overflow-hidden' iconClassName='bg-yrci-red' >
                <p className='mt-4 text-sm leading-loose'>Whether you're vying for a promotion within your current organization or seeking new career opportunities, our certification training programs can help you achieve your career goals. Elevate your skill set, gain credentials, and pave the way for career advancement. </p>
            </ExpandableCard>

            <ExpandableCard icon icon_img={Icon3} title="Support your Organization" className='h-[380.05px] xl:h-[370.05px] xl:mx-0 p-4 border-muted-turquise shadow-2xl shadow-turquise-shadow mb-8 sm:mb-0 overflow-hidden' iconClassName='bg-muted-turquise' >
                <p className='mt-4 text-sm leading-loose'>HR professionals play a critical role in supporting the operations and strategic objectives of their organizations. By equipping yourself with the skills and knowledge needed to navigate the evolving HR landscape, you'll be better prepared to address the challenges and opportunities facing your organization.</p>
            </ExpandableCard>
        </div>

       
            <div className='lg:flex hidden lg:flex-row flex-col items-center w-full justify-center sm:justify-around mt-8 md:overflow-y-auto xl:overflow-hidden'>
                <Card icon icon_img={Icon} title="Boost Your Credentials" className='h-[380.05px] xl:h-[370.05px] lg:w-[30%]  xl:w-[370px]  2xl:h-[390.05px] xl:mx-0 p-4 border-mustard-yellow mb-8 sm:mb-0 shadow-2xl shadow-mustard-shadow' iconClassName='bg-mustard-yellow'>
                    <Paragraph className='mt-4 text-sm 2xl:text-lg leading-loose'>Earning industry-recognized credentials is a powerful way to validate your expertise and stand out in a competitive job market. Our certification training programs provide you with the opportunity to earn valuable credentials that demonstrate your proficiency and mastery of essential HR concepts and practices. </Paragraph>
                </Card>
                <Card icon icon_img={Icon2} title="Shape your Career" className='h-[380.05px] xl:h-[370.05px]  lg:w-[30%] xl:w-[370px]  2xl:h-[390.05px]   xl:mx-0 p-4 border-yrci-red mb-8 sm:mb-0 shadow-2xl shadow-red-shadow overflow-hidden' iconClassName='bg-yrci-red'>
                    <Paragraph className='mt-4 text-sm 2xl:text-lg leading-loose'>Whether you're vying for a promotion within your current organization or seeking new career opportunities, our certification training programs can help you achieve your career goals. Elevate your skill set, gain credentials, and pave the way for career advancement. </Paragraph>
                </Card>
                <Card icon icon_img={Icon3}  title="Support your Organization" className='h-[380.05px] xl:h-[370.05px] 2xl:h-[390.05px]  lg:w-[30%]  xl:w-[370px]  xl:mx-0 p-4 border-muted-turquise  shadow-2xl shadow-turquise-shadow mb-8 sm:mb-0 overflow-hidden' iconClassName='bg-muted-turquise'>
                    <Paragraph className='mt-4 text-sm 2xl:text-lg leading-loose'>HR professionals play a critical role in supporting the operations and strategic objectives of their organizations. By equipping yourself with the skills and knowledge needed to navigate the evolving HR landscape, you'll be better prepared to address the challenges and opportunities facing your organization.</Paragraph>
                </Card>
            </div>
    </section>
  )
}

export default WhyChooseUs