import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {BsHouseDoor} from 'react-icons/bs'
import {BiLocationPlus} from 'react-icons/bi'

const Search = () => {

    const [ inputValue, setInputValue ] = useState('');

    const handleCancel = () => {
        setInputValue('');
    }

  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
        <form action=''>
            <div className='firstDiv flex justify-between items-center rounded-[8px] 
            gap-[10px] bg-white p-5 shadow-lg shadow-greyish-700'>
                <div className='flex gap-3 items-center'>
                    <AiOutlineSearch className='text-[20px] icon'/>
                    <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='bg-transparent text-blue-500 
                    focus:outline-none w-[100%]' placeholder='Search For Jobs'/>
                    <button type='submit' onClick={handleCancel}>
                        <AiOutlineCloseCircle className='text-[20px] text-[#a5a6a6] 
                        icon hover:text-textColor'/>
                    </button>
                </div>
                <div className='flex gap-3 items-center'>
                    <BsHouseDoor className='text-[20px] icon'/>
                    <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='bg-transparent text-blue-500 
                    focus:outline-none w-[100%]' placeholder='Search by Companies'/>
                    <button type='submit' onClick={handleCancel}>
                        <AiOutlineCloseCircle className='text-[20px] text-[#a5a6a6] 
                        icon hover:text-textColor'/>
                    </button>
                </div>
                <div className='flex gap-3 items-center'>
                    <BiLocationPlus className='text-[20px] icon'/>
                    <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='bg-transparent text-blue-500 
                    focus:outline-none w-[100%]' placeholder='Search by Location'/>
                    <button type='submit' onClick={handleCancel}>
                        <AiOutlineCloseCircle className='text-[20px] text-[#a5a6a6] 
                        icon hover:text-textColor'/>
                    </button>
                </div>

                <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white  hover:bg-blue-400'>Search</button>
            </div>
        </form>

        <div className='secDiv flex items-center gap-10 justify-center'>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by:</label>

                <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                    <option value=''>Relevance</option>
                    <option value=''>Inclusive</option>
                    <option value=''>Starts With</option>
                    <option value=''>Contains</option>
                </select>
            </div>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor='type' className='text-[#808080] font-semibold'>Type:</label>

                <select name='' id='type' className='bg-white rounded-[3px] px-4 py-1'>
                    <option value=''>Full-time</option>
                    <option value=''>Remote</option>
                    <option value=''>Contract</option>
                    <option value=''></option>
                </select>
            </div>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor='level' className='text-[#808080] font-semibold'>Sort by:</label>

                <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                    <option value=''>Senior</option>
                    <option value=''>Beginner</option>
                    <option value=''>Intermediate</option>
                    <option value=''>Advocate</option>
                </select>
            </div>
            <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
        </div>
    </div>
  )
}

export default Search