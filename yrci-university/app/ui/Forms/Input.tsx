"use client"
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../Button';

interface InputProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    employer: string;
    groupRates: boolean;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
}

const Input: React.FC<InputProps> = ({ formData, handleChange, handleSubmit }) => {
  const [checked, setChecked] = useState(formData.groupRates);

  const handleCheckboxChange = () => {
    const event = {
      target: {
        name: 'groupRates',
        type: 'checkbox',
        checked: !checked,
      }
    } as ChangeEvent<HTMLInputElement>;
    handleChange(event);
    setChecked(!checked);
  };

  return (
    <form className="space-y-4 w-full xs:w-11/12 flex flex-col items-center" aria-labelledby="contact-us" onSubmit={handleSubmit}>
      <div className='flex flex-col sm:flex-row w-11/12 md:w-fit'>
        <input
          type="text"
          id="first-name"
          name="firstName"
          aria-label="First Name"
          className="mb-4 md:mb-0 mr-4 pl-4 w-full md:w-[219px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-dark-teal focus:ring-dark-teal sm:text-sm"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="last-name"
          name="lastName"
          aria-label="Last Name"
          className="pl-4 w-full md:w-[219px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-dark-teal focus:ring-dark-teal sm:text-sm"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className='w-11/12 md:w-fit'>
        <input
          type="email"
          id="email"
          name="email"
          aria-label="Email"
          className="pl-4 w-full md:w-[449px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-dark-teal focus:ring-dark-teal sm:text-sm"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='w-11/12 md:w-fit '>
        <input
          type="text"
          id="employer"
          name="employer"
          aria-label="Employer"
          className="pl-4 w-full md:w-[449px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-dark-teal focus:ring-dark-teal sm:text-sm"
          placeholder="Employer"
          value={formData.employer}
          onChange={handleChange}
        />
      </div>
      <div className='flex w-11/12 md:w-[449px] justify-between'>
        <div className='items-center flex justify-end'>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-dark-teal"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2 text-dark-teal text-lg">Group rates?</span>
        </div>
        <Button className='w-[155px] h-[52px] bg-red-600 rounded-lg shadow text-white self-end'>Submit</Button>
      </div>
    </form>
  )
}

export default Input;
