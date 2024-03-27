'use client'
import React, { useEffect, useState } from 'react'

const Metrics = () => {
    const [courseCount, setCourseCount] = useState(10);
    const [studentCount, setStudentCount] = useState(200);

    useEffect(() => {
        const interval = setInterval(() => {
          if (courseCount < 50) {
            setCourseCount((prevCount: number) => prevCount + 5);
          }
        }, 200);
        return () => clearInterval(interval);
      }, [courseCount]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          if (studentCount < 1000) {
            setStudentCount((prevCount) => prevCount + 100);
          }
        }, 250); 
        return () => clearInterval(interval);
      }, [studentCount]);

  return (
    <div className='flex flex-col items-center'>
     <div className='w-fit flex flex-col items-center mb-8'>
        <p className='font-bold text-5xl'>{courseCount} <span className='ml-px'>+</span></p>
        <p>Courses Offered</p>
    </div>
    <div className='w-fit flex flex-col items-center'>
        <p className='font-bold text-5xl'>{studentCount} <span className='ml-px'>+</span></p>
        <p>Learners Served</p>
    </div>
    </div>
  )
}

export default Metrics