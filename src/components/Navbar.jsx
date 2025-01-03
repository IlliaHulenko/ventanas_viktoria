import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { GiWindow } from "react-icons/gi";
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ['Ventanas', 'Puertas', 'About', 'Contact']

const Navbar = () => {

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isContactButtonVisible, setIsContactButtonVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();

  const navContainerRef = useRef(null);  

  const contactButtonRef = useRef(null);

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
              <img src='/img/logo.svg' alt='logo' className='w-10'/>
              <Button 
                id="product-button"
                title="Productos"
                rightIcon={<GiWindow />} 
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              />
            </div>
            {/* Navbar's right side */}
            <div className='flex h-full items-center'>            
              <div className='hidden md:block'>
                {navItems.map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className='nav-hover-btn'
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* Contact Us button */}
      <div     
        ref={contactButtonRef}    
        className='contact-us-btn'
      >
          <span className='absolute'>Contact Us</span>
      </div>
      
    </>
  )
}

export default Navbar