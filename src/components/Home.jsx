import React, { useEffect, useRef } from 'react'
import Hero from './Hero'
import About from './About'
import Features from './Features'
import Contact from './Contact'
import Footer from './Footer'
import { Routes, Route, Outlet } from 'react-router-dom'

const Home = () => {

  const sectionRef = useRef(null);     
    
  return (
    <div ref={sectionRef}>
      {/* <Routes>
        <Route path='/inicio' element={<Hero />} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/ventajas' element={<Features />} />
        <Route path='/contactos' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />  
      </Routes> */}

      {/* <Hero />
      <About />
      <Features />
      <Contact />
      <Footer /> */}

      <Outlet />
    </div>
  )
}

export default Home