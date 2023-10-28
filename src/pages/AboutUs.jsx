import React from 'react'
import Smiling from "../assets/Smiling.svg"

function AboutUs() {
  return (
    <>
     <div id="aboutContainer" className='h-screen pt-2 px-8 font-raleway overflow'>
      <div id="headingWrapper" className='w-11/12 h-1/6 flex gap-3'>
          <h1 className='text-5xl pt-7 text-san-marino'>About Us</h1>
          <img src={Smiling} alt="" />
      </div>
      <div id="pragraphWrapper" className='pt-12 px-6  text-aubergine text-justify text-lg	'>
        <p>Welcome to Camp-US, where innovation meets creation! We are a passionate community of developers, united by our love for coding and a shared vision of transforming ideas into reality. At Camp-US, we believe in the power of technology to shape the future, and we're here to provide you with the tools, knowledge, and support you need to embark on your coding journey. Whether you're a seasoned pro or just starting out, our platform is designed to foster collaboration, nurture your skills, and ignite your creativity. Join us in this virtual camping ground for coders, and together, let's explore the digital wilderness and build the future, one line of code at a time.
        As you explore Camp-US, you'll discover opportunities for networking, collaborating on open-source projects, and even showcasing your own work. We aim to foster an environment of innovation and learning, where each camper can thrive. Welcome to Camp-US, your home in the digital world, where campfires are replaced by code, and the adventure of development awaits around every virtual corner. Join us today and become a part of the Camp-US family.
        </p>
      </div>
     </div>
    </>
  )
}

export default AboutUs
