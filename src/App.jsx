import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden overflow-y-auto flex flex-col'>

      <Router>
        <Navbar />
        <Routes>          
          <Route
            path='/'
            element={
              <>
                <Hero />
                <ScrollableContent> {/* Wrap scrollable content */}
                  <About />
                  <Features />
                  <Contact />
                  <Footer />
                </ScrollableContent>
              </>
            }
          />
          <Route path='/nosotros' element={<About />} />
          <Route path='/ventajas' element={<Features />} />
          <Route path='/contactos' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:slug' element={<ProductDetail />} />
        </Routes>
      </Router>
    </main>

    // <Route path='/inicio' element={<Hero />} />
    // <Route path='/nosotros' element={<About />} />
    // <Route path='/ventajas' element={<Features />} />
    // <Route path='/contactos' element={<Contact />} />
    // <Route path='/footer' element={<Footer />} /> 

  )
}

function ScrollableContent({ children }) {
  const location = useLocation();  // Now inside ScrollableContent
  return (
    <div id="scroll-container">
      {children}
    </div>
  );
}

export default App