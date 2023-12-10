import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <motion.div initial={{height:0}} whileInView={{height:"auto"}} transition={{duration:1}} className='bg-Teal p-10'>
     <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white ml-3'>
      <div>
        <div className='font-bold mb-6'>Get started</div>
        <p className='text-sm leading-7'>CodeCrush is your ultimate destination for all things programming. Our website is a treasure trove of valuable resources, offering a comprehensive range of tutorial ebooks. </p>
      </div>

      <div>
        <div className='font-bold ml-3 mb-6'>Services</div>
        <div className='flex flex-col ml-3 gap-4'>
        <a href="" className='text-sm hover:underline'>Tutorial</a>
        <a href="" className='text-sm hover:underline'>Ebooks</a>
        <a href="" className='text-sm hover:underline'>Coding Questions</a>
        <a href="" className='text-sm hover:underline'>Roadmaps</a>
        </div>
      </div>

      <div>
        <div className='font-bold mb-6'>Features</div>
        <div className='flex flex-col gap-4'>
          <a href="" className='text-sm hover:underline'>Understandable Content</a>
          <a href="" className='text-sm hover:underline'>Blogs</a>
          <a href="" className='text-sm hover:underline'>Courses Suggestions</a>
        </div>
      </div>

      <div>
        <div className='font-bold mb-6'>
          Follow us on 
        </div>
        <div className='text-sm mb-4 underline'>
          codecrush288@gmail.com
        </div>
        <div className='flex gap-4 mt-4'>
          <a href="" className='hover:scale-110 text-xl'><BsFacebook/></a>
          <a href="" className='hover:scale-110 text-xl'><BsInstagram/></a>
          <a href="" className='hover:scale-110 text-xl'><BsTwitter/></a>
        </div>
      </div>
     </div>
    </motion.div>
  )
}

export default Footer
