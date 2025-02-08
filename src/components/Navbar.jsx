import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { GiWindow } from "react-icons/gi";
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import MenuSvg from '../assets/svg/MenuSvg';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isContactButtonVisible, setIsContactButtonVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();

  const navContainerRef = useRef(null);  

  const contactButtonRef = useRef(null);

  // NavBar changes
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);      
    } else {
      setOpenNavigation(true);      
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };


  useEffect(() => {
    if(currentScrollY === 0 ){
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
      setIsContactButtonVisible(true);
      contactButtonRef.current.classList.remove('contact-us-btn');
    } else if(currentScrollY > lastScrollY){
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
      setIsContactButtonVisible(false);
      contactButtonRef.current.classList.add('contact-us-btn');
    } else if(currentScrollY < lastScrollY){
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
      setIsContactButtonVisible(true);
      contactButtonRef.current.classList.add('contact-us-btn');
    }

    setLastScrollY(currentScrollY);
  },[currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.5
    })
    gsap.to(contactButtonRef.current, {
      x: isContactButtonVisible ? 0 : -100,
      opacity: isContactButtonVisible ? 1 : 0,
      duration: 0.7
    })
  }, [isNavVisible, isContactButtonVisible]);

  return (
    <>    
      <div
        ref={navContainerRef}
        className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all 
          duration-700 sm:inset-x-6'    
      >
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
          <nav className='flex size-full items-center justify-between p-4'>
            {/* Navbar's left side */}
            <div className='flex items-center gap-7'>
              <Link to='/'>
                <img src='/img/logo.svg' alt='logo' className='w-10'/>
              </Link>
              <Link to="/products">
                <Button 
                  id="product-button"
                  title="Productos"
                  rightIcon={<GiWindow />} 
                  containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                />
              </Link>
            </div>
            {/* Navbar's right side */}
            <div className='flex h-full items-center'>            
              <div className='hidden md:block'>
                <Link to="/" className='nav-hover-btn' onClick={() => handleScroll('inicio')}>Inicio</Link>
                <Link onClick={() => handleScroll('nosotros')} className='nav-hover-btn'>Nosotros</Link>
                <Link onClick={() => handleScroll('ventajas')} className='nav-hover-btn'>Ventajas</Link>
                <Link onClick={() => handleScroll('ventanas')} className='nav-hover-btn'>Ventanas</Link>
                <Link onClick={() => handleScroll('contactos')} className='nav-hover-btn'>Contactos</Link>
              </div>
            </div>
            <HamburgerMenu />
          </nav>
        </header>
      </div>
      {/* Contact Us button */}
      <a     
        ref={contactButtonRef}    
        className='contact-us-btn'
        href='#footer'
      >
          <span className='absolute'>Le llamaremos</span>
      </a>
      
    </>
  )
}

export default Navbar