
import React from 'react';

const About = () => {
    return (
        <div id='nosotros' className='h-calc(100dvh) container mx-auto mb-8 mt-16'>
            <h1 className='text-3xl md:text-4xl font-bold text-center mb-4 uppercase font-namu'>Sobre nosotros</h1>

            <div className='flex flex-col items-center gap-1'>
                <div className='container flex flex-col items-center justify-center p-2 mt-4'>
                    <p className='text-lg md:text-xl text-justify md:text-center text-gray-500 px-2 md:px-0'>
                        Nuestra empresa "Viktoria Ventanas" tiene una amplia
                        experiencia en la venta e instalación de ventanas de PVC.
                        Colaboramos con una fábrica confiable que produce ventanas
                        con perfil VEKA y utilizamos herrajes alemanes WINKHAUS.
                        Ofrecemos una amplia gama de soluciones en diferentes
                        categorías de precio, desde opciones accesibles hasta
                        soluciones premium. Nuestra prioridad es la calidad,
                        la fiabilidad y la satisfacción del cliente.
                    </p>
                </div>

                <div className='w-[90vw] md:h-[80vh] md:w-full lg:h-[90vh] lg:w-full flex items-center justify-center'>
                    <img
                        src={import.meta.env.BASE_URL + "/img/about_us.jpg"}
                        alt='Background of About page'
                        className='w-full h-full md:w-[80vw] md:h-[80vh] object-contain md:object-cover rounded-lg'
                    />
                </div>


            </div>
        </div>
    );
}

export default About;