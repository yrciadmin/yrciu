import React from 'react'
import Button from '../Button'

const Input = () => {
  return (
    <form className="space-y-4 w-full md:w-fit flex flex-col items-center " aria-labelledby="form-heading">
    
    <div className='flex flex-row w-11/12 md:w-fit'>
      <input type="text" id="first-name" name="first-name" aria-label="First Name" className="mb-4 md:mb-0 mr-4 pl-4 w-full md:w-[219px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="First Name" />
      {/* <div> */}
      <input type="text" id="last-name" name="last-name" aria-label="Last Name" className="pl-4 w-full md:w-[219px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Last Name" />
    {/* </div> */}
    </div>

   

    <div className='w-11/12 md:w-fit'>
    <input type="text" id="email" name="email" aria-label="Email" className="pl-4 w-full md:w-[449px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Email" />
    </div>

    <div className='w-11/12 md:w-fit '>
      <input type="text" id="employer" name="employer" aria-label="Employer" className="pl-4 w-full md:w-[449px] h-[52px] bg-white rounded-lg border border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Employer" />
    </div>
    <Button className='w-[155px] h-[52px] bg-red-600 rounded-lg shadow text-white self-end'>Submit</Button>
    {/* <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Submit
    </button> */}
  </form>
  )
}

export default Input