import React from 'react'
// import hero from '../../assets/hero.png';
import gif1 from "../../assets/gif1.gif"
import gray from "../../assets/gray.jpg"
import mainhero from "../../assets/mainhero.jpg"


// import mainhero from "/assets/mainhero.jpg"
import { logos } from '../../Data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Home = () => {
  const container = {
    hidden :{
      opacity : 0,
      scale : 0,
    },
    visible :  {
        opacity : 1,
        scale : 1,
        transition :{
          delayChildern : 0.3,
          staggerChildern : 0.1,
        }
    }
  };
  const item = {

hidden : {y:20,opacity:0},
visible :{y:0,opacity:1}, 

};
  return (
    <div className='section' id='home' >
      <div className='md:flex items-center justify-center'>
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            {""}
            Your Learning Partner
          </div>

          <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
          Learn Programming in the <span className='text-Teal'>Easy Way !</span> 
          </div>
          <p className='text-lg leading-7 text-gray max-w-sm'> Learn that matters in easiet way with different projects which build good logic in programming . </p>
          <div className='mt-6'>
            <button className='px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm'><Link to="/code">Get Stared</Link></button>
          </div>
        </div>

        <div className='md:w-[50%] sm:pt-4'
        >
        {/* border-[4px] border-solid border-Teal rounded-md */}
          <img src={mainhero} alt="" style={{height:"350px",}} />
        </div>
      </div>

      {/* <div>
        <p className='text-center text-xl'>we collabrated with <span className='text-Teal'>100+ Leading universites and companies</span> </p>
        <motion.div variants={container}
        initial="hidden"
        whileInView="visible"
         className='flex items-start justify-center flex-wrap gap-8 p-2'>
          {logos.map((logo,index)=>(
            <motion.div variants={item} className='w-28' key={index} >
              <img src={logo} alt="" className='w-full object-cover'/>
            </motion.div>
          ))}
        </motion.div>
      </div> */}
    </div>
  )
}

export default Home
