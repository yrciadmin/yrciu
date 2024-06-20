// components/Modal.tsx
'use client';

import { FC, useRef, useEffect } from 'react';
import { TermConditionProps } from '../../util/data';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  content: TermConditionProps[];
}

const Modal: FC<ModalProps> = ({ show, onClose, content }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-turquise-shadow rounded-lg shadow-xl w-11/12 md:w-9/12 max-h-full py-8 overflow-hidden">
        <div className="p-4 overflow-y-auto max-h-[80vh] w-11/12 mx-auto bg-white shadow-lg px-8">
                <h3 className="text-sm 3xl:text-md mb-2 text-center">Terms and Conditions - YRCI University</h3>
                <h2 className="text-lg font-semibold mb-4 text-center 3xl:text-2xl">
                    Welcome to YRCI University's E-commerce Website
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                    By accessing or using our website where you can shop for online learning courses and materials offered by YRCI University
                    (referred to as "YRCI"), you agree to be bound by these Terms and Conditions. Please read them carefully.
                </p>
                <div>
                    {content.map((item, index) => (
                    <div key={index} className="mb-4">
                        <h1 className="text-md 3xl:text-xl font-bold mb-4">{item.term}</h1>
                        <p className="text-sm 3xl:text-lg text-gray-600 mb-2">{item.detail}</p>
                        {item.bullets && (
                            <ul className='ml-8'>
                                {item.bullets.map((bullet, index) => (
                                    <li key={index} className='list-disc text-sm 3xl:text-base text-gray-600'>{bullet}</li>
                                ))}
                            </ul>
                        )}
                        
                    </div>
                    ))}
                </div>
                
          </div>
          <div className='flex justify-end w-11/12'>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2  bg-dark-teal text-white rounded w-28"
           >
            Close
        </button>
          </div>
         
      </div>
    </div>
  );
};

export default Modal;
