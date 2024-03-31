import ContactUs from "./components/ContactUs";
import FeaturedCourses from "./components/FeaturedCourses";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import WhyChooseUs from "./components/WhyChooseUs";
import Instructors from "./components/Instructors";
import "./globals.css"
export default function Home() {
  return (
    <>
     <Hero/>
     <SocialProof/>
     <WhyChooseUs/>
     <FeaturedCourses/>
     <Instructors/>
     {/* <ContactUs/> */}
    </>
    
  );
}
