// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import React from 'react'

// import { ScrollTrigger } from 'gsap/all'
// import AnimatedTitle from './AnimatedTitle';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {

//     useGSAP(() => {
//         const clipAnimation = gsap.timeline({
//           scrollTrigger: {
//             trigger: "#clip",
//             start: "center center",
//             end: "+=800 center",
//             scrub: 0.5,
//             pin: true,
//             pinSpacing: true,
//           },
//         });
    
//         clipAnimation.to(".mask-clip-path", {
//           width: "100vw",
//           height: "100vh",
//           borderRadius: 0,
//         });
//     });


//   return (
//     <div id='nosotros' className='min-h-screen w-screen'>
//         <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
//             <h2 className='font-general text-sm uppercase md:text-[10px]'>
//                 Ventanas de alta calidad
//             </h2>

//             <AnimatedTitle 
//                 title='Descubre la mejor relación <br/> calidad-precio en el mercado'
//                 containerClass="mt-5 !text-black text-center"
//             />   
            
//             <div className='about-subtext'>
//                 <p>Producción rápida</p>
//                 <p>
//                     La fabricación de estructuras es una ventaja significativa para nuestros clientes
//                 </p>
//             </div>            
//         </div>
//         <div className='h-dvh w-screen' id='clip'>
//             <div className='mask-clip-path about-image'>
//                 <img 
//                     src='img/about.jpg'
//                     alt='Background image'
//                     className='absolute left-0 top-0 size-full object-cover'
//                 />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default About

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef

import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const clipRef = useRef(null); // Create a ref for the #clip div
    const maskRef = useRef(null); // Create a ref for the .mask-clip-path div

    useGSAP(() => {
        // This will now run AFTER the component renders
        if (clipRef.current && maskRef.current) { // Check if the refs are attached to elements
            const clipAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: clipRef.current, // Use the ref here
                    start: "center center",
                    end: "+=800 center",
                    scrub: 0.5,
                    pin: true,
                    pinSpacing: true,
                },
            });

            clipAnimation.to(maskRef.current, { // Use the ref here
                width: "100vw",
                height: "100vh",
                borderRadius: 0,
            });
        }
    }, []); // The empty dependency array ensures this runs only once after the first render

    return (
        <div id='nosotros' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
             <h2 className='font-general text-sm uppercase md:text-[10px]'>
                Ventanas de alta calidad
             </h2>

             <AnimatedTitle 
                 title='Descubre la mejor relación <br/> calidad-precio en el mercado'
                 containerClass="mt-5 !text-black text-center"
             />   
            
             <div className='about-subtext'>
                 <p>Producción rápida</p>
                 <p>
                    La fabricación de estructuras es una ventaja significativa para nuestros clientes
                 </p>
             </div>            
         </div>
            <div className='h-dvh w-screen' id='clip' ref={clipRef}> {/* Attach the ref here */}
                <div className='mask-clip-path about-image' ref={maskRef}> {/* Attach the ref here */}
                    <img
                        src='img/about.jpg'
                        alt='Background image'
                        className='absolute left-0 top-0 size-full object-cover'
                    />
                </div>
            </div>
        </div>
    );
}

export default About;