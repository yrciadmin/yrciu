"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import Heading from '../app/ui/Typography/Heading';
import Input from '../app/ui/Forms/Input';
import Paragraph from '../app/ui/Typography/Paragraph';
import Modal from '../app/ui/Modal';
import { termsAndConditions } from '../util/data';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  employer: string;
  groupRates: boolean;
}

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    employer: '',
    groupRates: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', employer: '', groupRates: false });
    } else {
      console.log("error")
    }
  };

  return (
    <section className='flex items-center bg-muted-turquise md:bg-contact-us bg-no-repeat bg-cover rounded-3xl sm:bg-center justify-center max-w-[1462px]'>
      <div className='flex flex-col w-full'>
        <div className='flex justify-center items-center mt-8 mb-4 xs:mt-4 flex-col w-full h-full'>
          <Heading className="text-white text-4xl xs:text-3xl font-bold mb-4 xs:mt-0 xs:mb-2 md:mb-0">Contact Us</Heading>
          <Paragraph className="text-dark-teal text-center text-lg font-normal lg:mb-2 leading-[30.18px]">
            Stay up to date on the latest courses and updates from YRCI-U
          </Paragraph>

          <div className='mt-8 xs:mt-2 sm:mt-0 flex justify-center items-center w-full'>
            {submitted ? (
              <p className="text-green-500">Thank you for your message!</p>
            ) : (
              <Input
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
          <div className='flex pb-4 justify-center'>
            <Paragraph className='text-dark-teal text-sm mt-4 w-11/12 md:w-8/12 text-center'>
              We're committed to your privacy. YRCI uses the information you provide to us to contact 
              you about our content, products, and services. You may unsubscribe from these communications at any time. 
              Please read our 
              <span
                onClick={() => setShowModal(true)}
                className="mx-2 text-[12px] cursor-pointer text-light-gray font-semibold"
              >
                Terms and Conditions
              </span>
              for more information.
            </Paragraph>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} content={termsAndConditions} />
    </section>
  );
}

export default ContactUs;
