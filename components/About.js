import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid  grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase tracking-widest text-xl text-purple-500'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600 text-xl'> I am not only developer but also an <span className='font-bold text-red-600'>SEO</span> expert </p>
                <p className='py-2 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nemo ea beatae earum repellendus eligendi nulla deserunt sed fugiat. Enim esse odit officiis neque iusto, sint laudantium ex aliquam obcaecati et iste sed minima, at quam eveniet nihil assumenda? Quisquam!</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est doloribus amet, quae dolor nemo dolorem, vero, ut reprehenderit fuga hic similique iste molestias enim sapiente ducimus assumenda ea voluptates.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-full m-auto shadow-xl shadow-gray-700 rounded-2xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl'  src="/../public/about.jpg" height='500' width='500' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About