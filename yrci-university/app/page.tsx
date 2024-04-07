"use client"
import ContactUs from "./components/ContactUs";
import FeaturedCourses from "./components/FeaturedCourses";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import WhyChooseUs from "./components/WhyChooseUs";
import Instructors from "./components/Instructors";
import Reviews from "./components/Reviews";
import Home from "./landing/page";
import { useEffect, useState } from "react";


export default function App() {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const currentHeight = document.documentElement.scrollHeight;
    if (contentHeight !== currentHeight) {
      setContentHeight(currentHeight);
      window.parent.postMessage({ iframeHeight: currentHeight }, '*');
    }
  }, [contentHeight]);
  console.log("height", contentHeight)

  
  return (
    <>
    <Home/>
     {/* <Hero/>
     <SocialProof/>
     <WhyChooseUs/>
     <FeaturedCourses/>
     <Instructors/>
     <Reviews/>
     <ContactUs/> */}
    </>
    
  );
}
