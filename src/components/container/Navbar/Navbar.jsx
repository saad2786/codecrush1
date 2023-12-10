import React, { useEffect, useState } from 'react'
import {navLinks} from '../../../Data'
import {HiMenuAlt1,HiX} from 'react-icons/hi'
import NavLink from './NavLink'
import MobileNavLinks from './MobileNavLinks'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle,setToggle] = useState(false); 
  const [active,setActive] = useState(null);
  useEffect(()=>{
    const scrollActive  = () =>{
      setActive(window.scrollY > 20);
    }
    window.addEventListener("scroll",scrollActive);
    return ()=> window.removeEventListener('scroll',scrollActive);
  },[active])
  return (
    <div className={`${active ? "shadow-lg bg-Solitude" : ""} fixed w-full top-0 left-0 z-20`}>
      <div>
        <div className={`${active ? "py-2 transition-all duration-300" : "py-4"} container  mx-auto flex items-center justify-between px-2`}>
          <div className='flex items-center gap-4'>
          <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' onClick={()=>setToggle(true)}/>
          <div className='text-2xl text-Teal uppercase tracking-wide font-bold'>CodeCrush</div>
          </div>
          <div className='sm:flex items-center hidden '>
            {/* {navLinks.map(navLink =>{
              return <NavLink key={navLink.id}{...navLink}/>
            } )} */}
            <div className="navbar ml-4">
            <Link className='ml-4' to="/">Home</Link>
            <Link className='ml-4'to="/roadmap">Roadmaps</Link>
            <Link className='ml-4' to="/blog">Blogs</Link>
            <Link className='ml-4' to="/ebooks">Ebooks</Link>
            <Link className='ml-4' to="/tutorial">Tutorial</Link>
            <Link className='ml-4' to="/coding">Coding Problems</Link>
            <Link className='ml-4' to="https://courserec.streamlit.app/" target='_blank'>Course Recommandation</Link>
            </div>
          </div>

          <button className='py-3 px-6  '></button>
          
       
          {toggle && (
            <motion.div 
            initial={{x:-500,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.3}}
            className='fixed h-full w-96 top-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
              {navLinks.map(navLink => {
               return  <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle} />
              })}
              <HiX  className='absolute right-12 top-12 text-3xl cursor-pointer' onClick={(prev)=>setToggle(!prev)}/>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
