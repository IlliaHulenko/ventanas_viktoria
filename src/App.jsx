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
import WindowsPage from './components/WindowsPage'
import Page404 from './components/Page404'

const App = () => {

  return (
    <main className='relative flex flex-col min-h-screen w-screen overflow-x-hidden overflow-y-auto '>

      <Router basename={import.meta.env.BASE_URL}>
        <Navbar />
        <Routes>          
          <Route
            path='/'
            element={
              <>                
                <ScrollableContent> {/* Wrap scrollable content */}
                  <Hero />
                  <About />
                  <Features />
                  <WindowsPage />
                  <Contact />
                  <Footer />
                </ScrollableContent>
              </>
            }
          />
          <Route path='/nosotros' element={<About />} />
          <Route path='/ventajas' element={<Features />} />
          <Route path='/ventanas' element={<WindowsPage />} />
          <Route path='/contactos' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:slug' element={<ProductDetail />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </main>
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