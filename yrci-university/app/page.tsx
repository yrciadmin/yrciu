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

// Debounce function definition with TypeScript
function debounce(func: (...args: any[]) => void, wait: number, immediate?: boolean): () => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function(this: any, ...args: any[]) {
    const context = this;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout!);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Custom hook for handling debounced resize events
const useDebouncedResize = (callback: () => void, delay: number): void => {
  useEffect(() => {
    const debouncedFn = debounce(callback, delay);
    window.addEventListener('load', debouncedFn); // Initial load

    window.addEventListener('resize', debouncedFn);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedFn);
    };
  }, [delay, callback]);
};

export default function App() {
  const sendMessageToParent = (): void => {
    const height = document.documentElement.scrollHeight;
    console.log("height", height);
    window.parent.postMessage({
      type: 'iframeResize',
      height: height
    }, "*"); // Ensure to replace with the actual origin
  };

  useDebouncedResize(sendMessageToParent, 500); // Using the custom hook with a 500ms debounce
  
  useEffect(() => {
    sendMessageToParent(); // Send initial height
    // Additional logic for detecting dynamic height changes can be implemented here
  }, []);
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
