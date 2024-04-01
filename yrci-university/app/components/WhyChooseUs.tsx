import Image from 'next/image';
import WCUImage from './../../assets/why-choose-us-image-left.png';
import Heading from '../ui/Typography/Heading';
import Button from '../ui/Button';
import Paragraph from '../ui/Typography/Paragraph';
import Card from '../ui/Card';
import Icon from '../../assets/icons/card_icon1.png';
import Icon2 from '../../assets/icons/card_icon2.png';
import Icon3 from '../../assets/icons/card_icon3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
  return (
    <section className='flex flex-col mt-12 items-center'>
        <div className='flex-col sm:flex-row flex justify-center sm:justify-between mb-8 ml-8 xl:ml-0'>
            <Image
                alt="Why choose use"
                className='w-full sm:w-2/6 hidden xl:block'
                src={WCUImage}
                height={0}
                width={0}
            />
            <div className='flex flex-col justify-center items-center sm:block w-full xl:w-1/2 sm:mr-8 mt-8 sm:mt-0'>
                <Heading className='mb-8 text-5xl'>Why Choose Us</Heading>
                <Paragraph className='mb-8 w-4/5 h-168'>Our training programs provide in-depth insights and practical tools to enhance your expertise in key areas of human resources. Whether you're a seasoned HR professional looking to expand your knowledge or a newcomer to the field seeking to build a strong foundation, our courses are tailored to meet your learning needs and objectives.  </Paragraph>
                <Button className='bg-dark-teal sm:bg-muted-turquise self-end mr-8  sm:w-fit text-white py-2'>Learn More <FontAwesomeIcon className="ml-2" icon={faArrowRight}/></Button>
            </div>
        </div>
            <div className='flex xl:flex md:hidden xl:flex-row flex-col items-center w-full justify-center sm:justify-around mt-8 md:overflow-y-auto xl:overflow-hidden'>
                <Card icon icon_img={Icon} className='h-[380.05px] xl:h-[370.05px] xl:mx-0 p-4 border-mustard-yellow  shadow-xl shadow-mustard-shadow mb-8 sm:mb-0' iconClassName='bg-mustard-yellow'>
                    <p className='mt-4 text-sm leading-loose'>Earning industry-recognized credentials is a powerful way to validate your expertise and stand out in a competitive job market. Our certification training programs provide you with the opportunity to earn valuable credentials that demonstrate your proficiency and mastery of essential HR concepts and practices. </p>
                </Card>
                <Card icon icon_img={Icon2} className='h-[380.05px] xl:h-[370.05px] xl:mx-0 p-4 border-yrci-red mb-8 sm:mb-0 shadow-xl shadow-red-shadow' iconClassName='bg-yrci-red'>
                    <p className='mt-4 text-sm leading-loose'>Whether you're vying for a promotion within your current organization or seeking new career opportunities, our certification training programs can help you achieve your career goals. By expanding your skill set, earning valuable credentials, and demonstrating your commitment to professional development, you'll position yourself for success and open doors to new and exciting career opportunities.</p>
                </Card>
                <Card icon icon_img={Icon3} className='h-[380.05px] xl:h-[370.05px] xl:mx-0 p-4 border-muted-turquise  shadow-xl shadow-turquise-shadow mb-8 sm:mb-0' iconClassName='bg-muted-turquise'>
                    <p className='mt-4 text-sm leading-loose'>HR professionals play a critical role in supporting the operations and strategic objectives of their organizations. By equipping yourself with the skills and knowledge needed to navigate the evolving HR landscape, you'll be better prepared to address the challenges and opportunities facing your organization.</p>
                </Card>
            </div>
    </section>
  )
}

export default WhyChooseUs