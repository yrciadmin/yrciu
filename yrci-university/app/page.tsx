"use client"
import ContactUs from "./components/ContactUs";
import FeaturedCourses from "./components/FeaturedCourses";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import WhyChooseUs from "./components/WhyChooseUs";
import Instructors from "./components/Instructors";
import Reviews from "./components/Reviews";
import Home from "./landing/page";
import { useEffect } from "react";


export default function App() {
  const sendMessageToParent = () => {
    const height = document.documentElement.scrollHeight;
    console.log("height", height)
    window.parent.postMessage({
      type: 'iframeResize',
      height: height
    }, "*"); // Use a specific domain instead of "*" for better security
  };
  
  // Inside your component or _app.js
  useEffect(() => {
    sendMessageToParent(); // Initial send
    window.addEventListener('resize', sendMessageToParent); // Optional: if you want to update on window resize
    window.addEventListener('load', sendMessageToParent); // Optional: if you want to update on window resize

    // Optional: For content that loads or changes dynamically, ensure to trigger sendMessageToParent appropriately
  
    return () => {
      window.removeEventListener('resize', sendMessageToParent);
    };
  }, [])
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
