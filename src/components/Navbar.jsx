import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { GiWindow } from 'react-icons/gi';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated route to products page
  const navigator = useNavigate();

  function routeToProducts() {
    if (!document.startViewTransition) {
      navigator('/products');
      return;
    }
    document.startViewTransition(() => navigator('/products'));
  }
  function routeToHomePage() {
    if (!document.startViewTransition) {
      navigator('/');
      return;
    }
    document.startViewTransition(() => navigator('/'));
  }

  // Appearing and disappearing logic of a navbar
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isContactButtonVisible, setIsContactButtonVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();

  const navContainerRef = useRef(null);
  const contactButtonRef = useRef(null);

  // NavBar changes (hamburger menu)
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef();
  const menuRef = useRef();

  // Get the current route
  const location = useLocation();
  const isProductPage = location.pathname === '/products' || location.pathname.startsWith('/products/');

  useEffect(() => {
    const handler = (e) => {
      if (e.target !== menuRef.current && e.target !== hamburgerRef.current) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
      setIsContactButtonVisible(false);
      contactButtonRef.current.classList.remove('contact-us-btn');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
      setIsContactButtonVisible(false);
      contactButtonRef.current.classList.add('contact-us-btn');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
      setIsContactButtonVisible(true);
      contactButtonRef.current.classList.add('contact-us-btn');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.5,
    });
    gsap.to(contactButtonRef.current, {
      x: isContactButtonVisible ? 0 : -100,
      opacity: isContactButtonVisible ? 1 : 0,
      duration: 0.7,
    });
  }, [isNavVisible, isContactButtonVisible]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all 
          duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            {/* Navbar's left side */}
            <div className="flex items-center gap-7">
              {/* Logo */}
              <div onClick={() => routeToHomePage()}>
                <Link
                  to="/"
                  className="flex items-center w-fit h-fit rounded-lg hover:scale-110 ease-out duration-500 transition-all hover:shadow-lg hover:shadow-[#07dfd9] "
                >
                  <img
                    src={import.meta.env.BASE_URL + '/img/logo_Viktoria_Ventanas.png'}
                    alt="logo"
                    className="w-24 h-24"
                  />
                </Link>
              </div>              
            </div>
            {/* Navbar's right side */}
            <div className="flex h-full items-center">
              {!isProductPage ? (
                <div className="hidden md:block">
                  <Link
                    to="/"
                    className="nav-hover-btn"
                    onClick={() => handleScroll('inicio')}
                  >
                    Inicio
                  </Link>
                  <Link
                    onClick={() => handleScroll('nosotros')}
                    className="nav-hover-btn"
                  >
                    Nosotros
                  </Link>
                  <Link
                    onClick={() => handleScroll('ventajas')}
                    className="nav-hover-btn"
                  >
                    Ventajas
                  </Link>
                  <Link
                    onClick={() => handleScroll('ventanas')}
                    className="nav-hover-btn"
                  >
                    Ventanas
                  </Link>
                  <Link
                    onClick={() => routeToProducts()}
                    className="nav-hover-btn"
                  >
                    Correderas
                  </Link>
                  <Link
                    onClick={() => handleScroll('contactos')}
                    className="nav-hover-btn"
                  >
                    Contactos
                  </Link>
                </div>
              ) : (
                <div className="hidden md:block">
                  <Link to="/" className="nav-hover-btn">
                    Inicio
                  </Link>
                </div>
              )}
            </div>
          </nav>
          <div
            className={`hamburger-menu ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen((prev) => !prev)}
            ref={hamburgerRef}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isOpen && (
            <div className="side-panel" ref={menuRef}>
              <Link
                to="/"
                onClick={() => handleScroll('inicio')}
                className={'links'}
              >
                <p className="links-text">Inicio</p>
              </Link>
              {!isProductPage && (
                <>
                  <Link
                    onClick={() => handleScroll('nosotros')}
                    className={'links'}
                  >
                    <p className="links-text">Nosotros</p>
                  </Link>
                  <Link
                    onClick={() => handleScroll('ventajas')}
                    className={'links'}
                  >
                    <p className="links-text">Ventajas</p>
                  </Link>
                  <Link to={'/products'} className={'links'}>
                    <p className="links-text">Productos</p>
                  </Link>
                  <Link
                    onClick={() => handleScroll('ventanas')}
                    className={'links'}
                  >
                    <p className="links-text">Ventanas</p>
                  </Link>
                  <Link
                    onClick={() => handleScroll('contactos')}
                    className={'links'}
                  >
                    <p className="links-text">Contactos</p>
                  </Link>
                </>
              )}
            </div>
          )}
        </header>
      </div>
      {/* Contact Us button */}
      <a ref={contactButtonRef} className="contact-us-btn" href="#footer">
        <span className="absolute">Le llamaremos</span>
      </a>
    </>
  );
};

export default Navbar;
