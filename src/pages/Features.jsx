import React from 'react'
import BentoCard from '../components/BentoCard'
import BentoTilt from '../components/BentoTilt'


const Features = () => {
  return (
    <section className=''>
        <div className='container mx-auto px-3 md:px-10 pb-10'>
            <div className='px-5 py-24'>
                <p className='font-robert-regular text-3xl text-black mb-3'>
                Ventanas de PVC: La Solución Perfecta para tu Hogar
                </p>
                <p className='max-w-md font-robert-regular text-lg text-black opacity-50'>
                    Si estás buscando mejorar la eficiencia energética, el confort y el diseño de tu hogar, 
                    las ventanas de PVC son la opción ideal. En esta guía te explicamos por qué elegir ventanas 
                    de PVC puede ser la mejor decisión para tu hogar y cómo puedes beneficiarte de nuestras 
                    ofertas exclusivas.
                </p>
            </div>        

            <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard 
                    src="videos/windows.mp4"
                    title="Eficiencia Energética"
                    description="Las ventanas de PVC ofrecen un aislamiento térmico excepcional, ayudando a mantener tu hogar cálido en invierno y fresco en verano. Gracias a su estructura multicámara, las ventanas de PVC reducen significativamente la pérdida de calor, lo que se traduce en un menor consumo energético y, por ende, en facturas de energía más bajas."
                />
            </BentoTilt>
            
            <div className='grid h-[135vh] grid-cols-2 grid-rows-2 gap-7'>
                
                <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                    <BentoCard 
                        src="videos/window_0.mp4"
                        title="Producción rápida"
                        description="La fabricación de estructuras es una ventaja significativa para nuestros clientes"
                    />
                </BentoTilt>  

                <BentoTilt className='bento-tilt_1 row-span-1 ms-14 md:col-span-1 md:ms-0'>
                    <BentoCard 
                        src="videos/opened_window_1.mp4"
                        title="Entrega a un cliente"
                        description="Proporcionamos la entrega de pedidos al cliente, así como directamente al lugar de instalación, la entrega está incluida en el precio"
                    />
                </BentoTilt>

                <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                    <BentoCard 
                        src="videos/fabric.mp4"
                        title="Productos de alta calidad"
                        description="Gestión perfecta de la calidad el sistema de calidad de todos los procesos basado en Lean Production garantiza la alta calidad de nuestros productos y servicios"
                    />
                </BentoTilt>

                {/* <BentoTilt className='bento-tilt_2'>
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
                </BentoTilt>                */}

            </div>

            <BentoTilt className='border-hsla relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard 
                    src="videos/window-5.mp4"
                    title="Su comodidad es nuestra prioridad" 
                    description=""
                />
            </BentoTilt>

        </div>
    </section>
  )
}

export default Features