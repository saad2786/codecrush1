import React from 'react'
import about from '../../assets/About.jpg'
import abous_us from "../../assets/abous_us.png"

const About = () => {
  return (
    <div className='section' id='about'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div className=''>
        {/* border-[3px] border-solid border-Teal rounded-lg */}
          <img src={abous_us} alt="" className='p-4' />
        </div>
        <div className='font-bold sm:text[1.857rem] text-[1.5rem] mb-5 '>
        We provide the <br /> best <span className='text-Teal'>Online Courses</span> 
        
        <p className='text-sm text-gray leading-7'>Whether you're a seasoned developer looking to deepen your understanding of programming languages or a newcomer eager to embark on a coding journey, CodeCrush has you covered.</p>
        {/* <button className='py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold mt-2'>Know More</button> */}
        </div>
      </div>
    </div>
  )
}

export default About
