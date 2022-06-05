import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import propertyImg from '../public/assets/projects/property.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectsItems from './ProjectsItems'

const Projects = () => {
  return (
    <div id='project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl uppercase tracking-widest text-purple-500 '>Projects</p>
            <h2 className='py-4'>What I have Build</h2>

            <div className='grid md:grid-cols-2 gap-8'>

               <ProjectsItems title="Property Finder" 
               backgroundImg = {propertyImg}
                projectUrl = "/property"
                />
                 <ProjectsItems title="Crypto App" 
               backgroundImg = {cryptoImg}
                projectUrl = "/crypto"
                />
                 <ProjectsItems title="Netflix Clone" 
               backgroundImg = {netflixImg}
                projectUrl = "/netflix"
                />
                 <ProjectsItems title="Twitter Clone" 
               backgroundImg = {twitchImg}
                projectUrl = "/twitch"
                />

            </div>
        </div>
        
    </div>
  )
}

export default Projects