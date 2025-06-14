import {lazy, Suspense} from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import LoaderSpinner from './components/LoaderSpinner'

const Hero = lazy(() => import('./pages/Hero'));
const About = lazy(() => import('./pages/About'));
const Features = lazy(() => import('./pages/Features'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WindowsPage = lazy(() => import('./pages/WindowsPage'));
const Page404 = lazy(() => import('./pages/Page404'));


const App = () => {

  return (
    <main className='relative flex flex-col min-h-screen w-screen overflow-x-hidden overflow-y-auto '>
      {/* <Router basename={import.meta.env.BASE_URL}> */}
      <Router>
        <Navbar />
        <Suspense fallback={<LoaderSpinner />}>        
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
        </Suspense>
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