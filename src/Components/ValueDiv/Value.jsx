import React from 'react';

import Icon1 from '../../Assets/simplicity.png';
import Icon2 from '../../Assets/skydiving.png';
import Icon3 from '../../Assets/verify.png';

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
        The value that holds us true and to account
      </h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#f3f3ff] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px]
            w-[40px] flex items-center justify-center'>
              <img src={Icon1} alt='' className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className='text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold'>
            Things bring made beautiful simple are at the heart of everything we do.</p>
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#fff3fdae] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f7edf5] h-[40px]
            w-[40px] flex items-center justify-center'>
              <img src={Icon2} alt='' className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className='text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold'>
            We believe in making things better for everyone, even if it is just a little bit.</p>
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px]
            w-[40px] flex items-center justify-center'>
              <img src={Icon3} alt='' className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className='text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold'>
            We work on the basis of creating trust which can be nutured through authencity and transparency</p>
        </div>
      </div>

      <div className='card mt-[2rem] flex justify-between bg-[#e3e3e3] p-[5rem]
      rounded-[10px]'>
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a career?</h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's get started!</h2>
        </div>
          <button className='border-[2px] border-blueColor rounded-[10px] py-[4px] px-[50px]
          text-[10px] font-semibold text-blueColor hover:bg-white border-blueColor'>Get Started</button>
      </div>
    </div>
  )
}

export default Value