import React from 'react'
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import{BsFillPersonFill} from 'react-icons/bs'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full justify-center items-center mx-auto p-2 flex'>
            <div>
                <p className='text-gray-700 uppercase tracking-widest text-sm'>lets build something together</p>
                <h1 className='py-4 text-gray-700'>
                    Hi I am <span className='text-red-500'>Sahil</span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 m-auto max-w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eaque, alias possimus voluptatibus reprehenderit quo voluptate ratione ipsam tempore quam cupiditate suscipit mollitia ducimus rem aliquam molestias velit nulla fugiat?</p>

                <div className='flex items-center justify-between m-auto py-4 max-w-[360px]'>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                         <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                         <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                         <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                         <BsFillPersonFill/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main