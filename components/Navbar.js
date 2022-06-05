import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import{BsFillPersonFill} from 'react-icons/bs'
import { useRouter } from 'next/router';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();


    useEffect(() => {
        if (
          router.asPath === '/property' ||
          router.asPath === '/crypto' ||
          router.asPath === '/netflix' ||
          router.asPath === '/twitch'
        ) {
          setNavBg('transparent');
          setLinkColor('#ecf0f3');
        } else {
          setNavBg('#ecf0f3');
          setLinkColor('#1f2937');
        }
      }, [router]);


    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect(() => {
      const handleShadow =() =>{
          if(window.scrollY >=90){
              setShadow(true)
          }
          else{
              setShadow(false)
          }
      }
      window.addEventListener("scroll",handleShadow)
    }, [])
    

  return (
    
    <div
    style={{ backgroundColor: `${navBg}` }}
     className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20  z-[100]"}>
        <div className='flex justify-between items-center w-full h-full px2 2xl:px-16'>
            <Link href="/">
            <Image className='cursor-pointer' src="/../public/assets/asif.png" height='200' width='200' alt=''/>
            </Link>
            <div>
                <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href="/#about">
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href="/#skill">
                        <li className='ml-10 text-sm uppercase hover:border-b'>skills</li>
                    </Link>
                    <Link href="/#project">
                        <li className='ml-10 text-sm uppercase hover:border-b'>projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li className='ml-10 text-sm uppercase hover:border-b'>contacts</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    {/* <AiOutlineClose/> */}
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed w-full top-0 left-0 h-screen bg-black/70' : ''}>
            <div className={nav? 'fixed  top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': 'fixed  top-0 left-[-100%]  p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/../public/assets/asif.png' width='150' height='150' alt=''/>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 mx-9 p-0 font-bold text-red-500 text-lg'>
                            <p className='w-[85%] md:w-[90%]  py-4'>Lets build something together</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm mx-10 '>Home</li>
                            </Link> 
                             <Link href='/#about'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm mx-10 '>About</li>
                            </Link> 
                             <Link href='/#skill'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm mx-10 '>Skills</li>
                            </Link> 
                             <Link href='/#project'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm mx-10 '>Projects</li>
                            </Link> 
                             <Link href='/#contact'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm mx-10 '>Contact</li>
                            </Link>
                        </ul>

                        <div className='pt-40 mx-10 '>
                            <p className='uppercase tracking-widest  font-semibold text-red-500'>Connect With Me</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-300'>
                                    <FaLinkedinIn/>
                                </div> 
                                  <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-300'>
                                    <FaGithub/>
                                </div> 
                                  <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-300'>
                                    <AiOutlineMail/>
                                </div>  
                                 <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-300'>
                                    <BsFillPersonFill/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar