"use client"
import {useState} from 'react'
import Button from '../Button'

const Input = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
      setChecked(!checked);
  };

  //BORDERS border-4 xs:border-orange-500  sm:border-slate-500   md:border-mustard-yellow  lg:border-indigo-500 xl:border-green-500  2xl:border-yrci-red
  return (
    <form className="space-y-4 w-full xs:w-11/12 flex flex-col items-center" aria-labelledby="contact-us">
      <div className='flex flex-col sm:flex-row w-11/12 md:w-fit'>
        <input type="text" id="first-name" name="first-name" aria-label="First Name" className="mb-4 md:mb-0 mr-4 pl-4 w-full md:w-[219px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-dark-teal focus:ring-dark-teal sm:text-sm" placeholder="First Name" />
        <input type="text" id="last-name" name="last-name" aria-label="Last Name" className="pl-4 w-full md:w-[219px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-dark-teal focus:ring-dark-teal sm:text-sm" placeholder="Last Name" />
      </div>
      <div className='w-11/12 md:w-fit'>
        <input type="text" id="email" name="email" aria-label="Email" className="pl-4 w-full md:w-[449px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-dark-teal focus:ring-idark-teal sm:text-sm" placeholder="Email" />
      </div>
      <div className='w-11/12 md:w-fit '>
        <input type="text" id="employer" name="employer" aria-label="Employer" className="pl-4 w-full md:w-[449px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-dark-teal focus:ring-dark-teal sm:text-sm" placeholder="Employer" />
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

export default Input