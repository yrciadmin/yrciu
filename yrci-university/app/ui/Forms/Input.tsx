"use client"
import {useState} from 'react'
import Button from '../Button'

const Input = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
      setChecked(!checked);
  };
  return (
    <form className="space-y-4 w-full md:w-fit flex flex-col items-center " aria-labelledby="form-heading">
    
    <div className='flex flex-row w-11/12 md:w-fit'>
      <input type="text" id="first-name" name="first-name" aria-label="First Name" className="mb-4 md:mb-0 mr-4 pl-4 w-full md:w-[219px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="First Name" />
      <input type="text" id="last-name" name="last-name" aria-label="Last Name" className="pl-4 w-full md:w-[219px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Last Name" />
    </div>

   

    <div className='w-11/12 md:w-fit'>
    <input type="text" id="email" name="email" aria-label="Email" className="pl-4 w-full md:w-[449px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Email" />
    </div>

    <div className='w-11/12 md:w-fit '>
      <input type="text" id="employer" name="employer" aria-label="Employer" className="pl-4 w-full md:w-[449px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Employer" />
    </div>
<div>
 
     
</div>
 
 <div className='flex w-full justify-around'>
  <div className='items-center flex justify-end'>
      <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 border"
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