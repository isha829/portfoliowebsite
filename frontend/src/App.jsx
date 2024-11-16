import React, { useState } from 'react'
import Navbar from './Components/Nav-bar/Navbar'
// import VideoPlayer from './Components/videoPlayer/VideoPlayer'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Title from './Components/Titles/Title'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
   <div>
    <Navbar />
    <Hero />
    <div className="container">
    <Title subtitle="Projects" title="Showcasing My Web3 Journey"/>
    <Projects />
    <About/>
    <Title subtitle="Skills" title="What I Can Do"/>
    <Skills/>
    <Title subtitle="Contact " title="Get in Touch"/>
    <Contact /> 
    </div>
   </div>
  )
}

export default App

