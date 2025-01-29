import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollRestoration = () => {
    const location = useLocation();

    useEffect(() => {
        // Restore scroll position if it exists
        const savedPosition = sessionStorage.getItem(`scroll-${location.pathname}`);
        if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        }

        const handleScroll = () => {
        sessionStorage.setItem(`scroll-${location.pathname}`, window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return null;
};

export default ScrollRestoration;
  