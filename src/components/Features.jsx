import React, { useRef, useState } from 'react'
import { RiServiceLine } from "react-icons/ri";


const BentoCard = ({ src, title, description}) => {
    return(
        <div className='relative size-full'>
            <video 
                src={src}
                loop
                muted
                autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div
                className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-700'
            >
                <div>
                    <h1 className='bento-title special-font'>
                        {title}
                    </h1>
                    {description && (
                        <p
                            className='mt-3 max-w-64 text-sm md:text-lg'
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>
            
        </div>
    )
}

const BentoTilt = ({ children, className = ''}) => {

    const [transformStyle, setTransformStyle] = useState('');

    const itemRef = useRef();

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;
    
        const { left, top, width, height } =
          itemRef.current.getBoundingClientRect();
    
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;
    
        const tiltX = (relativeY - 0.5) * 10;
        const tiltY = (relativeX - 0.5) * -10;
    
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = (e) => {
        setTransformStyle('');
    }


    return(
        <div 
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{transform: transformStyle}}
            className={className}
        >
            {children}
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-circular-web text-lg text-blue-50'>
                    Nuestras características son:
                </p>
                <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                    Fabricación a medida, instalación y venta de ventanas  y cerramientos de aluminio y PVC .
                    No existe proyecto que no podamos ejecutar, profesionales cualificados para el asesoramiento de cada caso.
                    Ventanas oscilobatientes, correderas y abatibles de calidad al mejor precio.
                </p>
            </div>        

            <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard 
                    src="videos/windows.mp4"
                    title="Gama completa de productos"
                    description="Ofrecemos una gama completa de soluciones para 
                        cada proyecto: estructuras de aluminio, estructuras de PVC y 
                        sistemas híbridos. Esto permite a los promotores obtener todas 
                        las soluciones necesarias de un solo socio"
                />
            </BentoTilt>

            <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                
                <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                    <BentoCard 
                        src="videos/window_0.mp4"
                        title="Producción rápida"
                        description="La fabricación de estructuras es una ventaja significativa para nuestros clientes"
                    />
                </BentoTilt>  

                <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                    <BentoCard 
                        src="videos/opened_window_1.mp4"
                        title="Entrega a un cliente"
                        description="Proporcionamos la entrega de pedidos al cliente, así como directamente al lugar de instalación, la entrega está incluida en el precio"
                    />
                </BentoTilt>

                <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                    <BentoCard 
                        src="videos/fabric.mp4"
                        title="productos de alta calidad"
                        description="Gestión perfecta de la calidad el sistema de calidad de todos los procesos basado en Lean Production garantiza la alta calidad de nuestros productos y servicios"
                    />
                </BentoTilt>

                <BentoTilt className='bento-tilt_2'>
                    <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                        <h1 
                            className='bento-title special-font max-w-64 text-black'
                        >
                            Servicio de primera
                        </h1>
                        <RiServiceLine className='m-5 scale-[5] self-end'/>

                    </div>
                </BentoTilt>

                <BentoTilt className='bento-tilt_2'>
                    <video 
                        src='videos/night_window.mp4'
                        loop
                        muted
                        autoPlay
                        className='size-full object-cover object-center'
                    />
                </BentoTilt>

            </div>

            

        </div>
    </section>
  )
}

export default Features