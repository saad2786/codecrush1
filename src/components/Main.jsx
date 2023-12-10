import React from 'react'
import {
    Navbar,
    Home,
    About,
    Contact,
    Footer,
    Teachers,
    Courses,
  } from "./index";
const Main = () => {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
        <Home />
        <About />
        <Courses />
        <Contact />
        <Footer />
    </div>
  )
}

export default Main
