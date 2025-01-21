import React,{ useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Products from './components/Products'

const App = () => {

  const [prodDetail, setProdDetail] = useState(true);

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden overflow-y-auto flex flex-col'>
     
      <Navbar />
      <section id='inicio'><Hero /></section>
      <section id='nosotros'><About /></section>
      <section id='ventajas'><Features /></section>
      <section id='ventanas'><Products/></section>      
      <section id='contactos'><Contact /></section>
      <section id='footer'><Footer /></section>      
      
      {/* <Navbar />
      <Hero />
      <About />
      <Features />
      <Products />
      <Contact />
      <Footer /> */}

    </main>
  )
}

export default App