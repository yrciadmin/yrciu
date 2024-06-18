"use client"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface FAQ {
    question: string
    answer: string
}
interface QAProps {
   faqData: FAQ[]
}

const QA = ({ faqData } : QAProps) => {
  const [activeIndex, setActiveIndex] = useState <number | null> (null);

  const toggleAccordion = (index: number ) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };


  const toggleFAQ = (index : number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="overflow-hidden border-b border-yrci-black ">
              <button
                className="w-full flex justify-between px-4 py-5 text-left text-2xl md:text-3xl font-extrabold text-yrci-black focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <FontAwesomeIcon icon={faChevronDown}  className={`w-4 h-4 text-dark-teal mr-10 transition-transform transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}/>
                {/* <svg
              className={`w-4 h-4 transition-transform transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a.75.75 0 0 0 .53-.22l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 10.94 6.28 7.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 .53.22z"
                clipRule="evenodd"
              />
            </svg> */}
              </button>
              <div className={`${activeIndex === index ? 'block' : 'hidden'} px-4 pb-5`}>
                <p className="text-lg 2xl:text-2xl  text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
//   return (
//     <div className="max-w-2xl mx-auto">
//       {faqData.map((item, index) => (
//         <div key={index} className="mb-4">
//           <button
//             className="flex items-center justify-between w-full py-2 px-4 bg-gray-200 rounded-md text-left focus:outline-none"
//             onClick={() => toggleAccordion(index)}
//             aria-expanded={activeIndex === index}
//             aria-controls={`faq-${index}`}
//           >
//             <span>{item.question}</span>
//             <svg
//               className={`w-4 h-4 transition-transform transform ${
//                 activeIndex === index ? 'rotate-180' : ''
//               }`}
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 12a.75.75 0 0 0 .53-.22l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 10.94 6.28 7.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 .53.22z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//           <div
//             id={`faq-${index}`}
//             className={`${
//               activeIndex === index ? 'block' : 'hidden'
//             } mt-2 text-gray-700`}
//           >
//             {item.answer}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
};

export default QA;
