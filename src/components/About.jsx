import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
import AnimatedParagraph from './AnimatedParagraph';

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
                    {/* <AnimatedParagraph 
                        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis minima dolores excepturi, <br/> dolor doloribus voluptates sequi veritatis explicabo temporibus animi inventore  quam possimus, odio asperiores molestias expedita. Eaque, veritatis.'
                        containerClass='absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'
                    />                     */}
                </div>
            </div>
        </div>
    );
}

export default About;