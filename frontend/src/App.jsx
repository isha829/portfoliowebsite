// import React, { useState } from 'react'
import Navbar from './Components/Nav-bar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
   <div>
    <Navbar />
    <Hero />
    
    {/* About Section - Directly without extra heading */}
    <About />
    
    {/* Skills Section */}
    <Skills />
    
    {/* Projects Section */}
    <Projects />
    
    {/* Contact Section */}
    <Contact />
   </div>
  )
}

export default App