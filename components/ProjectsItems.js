import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import propertyImg from '../public/assets/projects/property.jpg'

const ProjectsItems = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto rounded-xl p-4 w-full shadow-xl shadow-gray-400 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/>
    <div className='hidden group-hover:block absolute'>
        <h3 className='text-2xl text-white text-center tracking-wider'>{title}</h3>
        <p className='pt-2 pb-4 text-white text-center'>By React JS</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectsItems