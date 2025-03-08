import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const WindowsPage = () => {

    // Animated route to products page
    const navigator = useNavigate();

    function routeToProducts() {
        if (!document.startViewTransition) {
            navigator('/products');
            return;
        }

        document.startViewTransition(() => navigator('/products'))
    }

    return (
        <section id='ventanas' className='flex flex-col justify-center items-center my-5 p-10'>
            <h1 className='text-2xl md:text-4xl font-general m-8 '>Nuestras ventanas</h1>
            {/* Double sheets windows */}
            <div
                className="grid grid-cols-[repeat(12,minmax(1,1fr))] grid-rows-1 md:grid-rows-4 mx-auto py-4 sm:grid-cols-6 sm:gap-2 md:p-4 bg-gray-200 rounded-lg shadow-lg mb-6"
            >
                <div className="col-span-12 row-span-1 mt-2 md:col-span-2 md:row-span-4 place-items-center self-center">
                    <img
                        src={import.meta.env.BASE_URL + "/img/ventana_de_doble_hoja.png"}
                        alt="ventana de doble hoja"
                        className="w-full max-w-xs md:max-w-md rounded-lg"
                    />
                </div>
                <div className="col-span-12 row-span-1 p-2 md:col-span-8 md:col-start-3 place-items-center md:place-items-start self-center">
                    <h2 className='text-lg md:text-2xl font-bold'>Ventana de doble hoja/tamaño — 1200х1400</h2>
                </div>

                <div className="hidden md:block md:row-span-2 md:col-start-3 md:row-start-2 md:place-items-start md:self-center md:p-2">
                    <p className='text-xl font-bold'>Nombre del sistema de perfiles</p>
                </div>
                <div className="hidden md:block md:col-start-3 md:row-start-4 md:place-items-start md:self-center md:p-2 ">
                    <p className='text-xl font-bold'>Precio</p>
                </div>

                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-4 md:row-start-2 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Ventana Veka 70 AD</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-4 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 336 Euro(+ IVA)</p>
                </div>

                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-5 md:row-start-2 md:place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Ventana Veka IDEAL 4000</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-5 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 363 Euro(+ IVA)</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-6 md:row-start-2 md:place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Ventana Veka 76 AD</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-start-6 md:row-span-2 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 374 Euro(+ IVA)</p>
                </div>
            </div>

            {/* Triple sheets windows */}
            <div
                className="grid grid-cols-[repeat(12,minmax(1,1fr))] grid-rows-1  md:grid-rows-4 mx-auto py-4 sm:grid-cols-6 sm:gap-2 md:p-4 bg-green-200 rounded-lg shadow-lg"
            >
                <div className="col-span-12 row-span-1 mt-2 md:col-span-2 md:row-span-4 place-items-center self-center">
                    <img
                        src={import.meta.env.BASE_URL + '/img/ventana_de_triple_hoja.png'}
                        alt="ventana de triple hoja"
                        className="w-full max-w-xs md:max-w-md rounded-lg"
                    />
                </div>
                <div className="col-span-12 row-span-1 p-2 md:col-span-8 md:col-start-3 place-items-center md:place-items-start self-center">
                    <h2 className='text-lg md:text-2xl font-bold'>Ventana de tres hojas/tamaño — 1800х1400</h2>
                </div>

                <div className="hidden md:block md:row-span-2 md:col-start-3 md:row-start-2 md:place-items-start md:self-center md:p-2">
                    <p className='text-xl font-bold'>Nombre del sistema de perfiles</p>
                </div>
                <div className="hidden md:block md:col-start-3 md:row-start-4 md:place-items-start md:self-center md:p-2 ">
                    <p className='text-xl font-bold'>Precio</p>
                </div>

                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-4 md:row-start-2 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Ventana Veka 70 AD</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-4 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 501 Euro(+ IVA)</p>
                </div>

                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-5 md:row-start-2 md:place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Ventana Veka IDEAL 4000</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-5 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 543 Euro(+ IVA)</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-6 md:row-start-2 md:place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Ventana Veka 76 AD</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-start-6 md:row-span-2 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 558 Euro(+ IVA)</p>
                </div>
            </div>

            {/* Correderas doors */}
            <h1 className='text-2xl md:text-4xl font-general m-8 '>Puertas correderas</h1>
            <div
                className="grid grid-cols-[repeat(16,minmax(1,1fr))] grid-rows-1 md:grid-rows-4 mx-auto py-4 sm:grid-cols-8 sm:gap-2 md:p-4 bg-[#2596be]/30 rounded-lg shadow-lg"
            >
                <div className="col-span-12 row-span-1 mt-2 md:col-span-2 md:row-span-4 place-items-center self-center">
                    <img
                        src={import.meta.env.BASE_URL + '/img/puerta_corredera.png'}
                        alt="Puerta corredera"
                        className="w-full max-w-xs md:max-w-md rounded-lg"
                    />
                </div>
                <div className="col-span-12 row-span-1 p-2 md:col-span-8 md:col-start-3 place-items-center md:place-items-start self-center">
                    <h2 className='text-lg md:text-2xl font-bold'>Sistema corredera (blanco)/tamaño — 2500х2100</h2>
                </div>

                <div className="hidden md:block md:row-span-2 md:col-start-3 md:row-start-2 md:place-items-start md:self-center md:p-2">
                    <p className='text-xl font-bold'>Nombre del sistema de perfiles</p>
                </div>
                <div className="hidden md:block md:col-start-3 md:row-start-4 md:place-items-start md:self-center md:p-2 ">
                    <p className='text-xl font-bold'>Precio</p>
                </div>

                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-4 md:row-start-2 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Sistema corredera Veka SL 60</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-4 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 723 Euro(+ IVA)</p>
                </div>

                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-5 md:row-start-2 md:place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Sistema corredera Veka EKOSOL 70</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-5 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 1468 Euro(+ IVA)</p>
                </div>

                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-6 md:row-start-2 md:place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Sistema corredera Veka WH DUO PORT 70</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-6 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 1608 Euro(+ IVA)</p>
                </div>

                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-7 md:row-start-2 md:place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Sistema corredera Veka MOVE</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:col-start-7 md:row-span-2 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 2120 Euro(+ IVA)</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-2 md:col-start-8 md:row-start-2 md:place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium'>Sistema corredera Veka MOTION 82 STANDART</p>
                </div>
                <div className="col-span-6 row-span-1 md:col-span-1 md:col-start-8 md:row-span-2 md:row-start-4 place-items-start self-center">
                    <p className='p-4 text-lg font-robert-medium text-blue-600'>de 5651 Euro(+ IVA)</p>
                </div>
            </div>

            <div
                onClick={routeToProducts}
                className='flex justify-center m-8 w-full'
            >
                <Button
                    containerClass='bg-gradient-to-r from-[#287233] to-[#07dfd9] text-white 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg 
                    px-5 py-2.5 text-center flex items-center justify-center gap-3 md:w-[40%] sm:w-full h-14
                    drop-shadow-md hover:drop-shadow-xl ease-out hover:translate-y-1 transition-all rounded
                    '
                    title={'Ver todos los productos'}
                />
            </div>

        </section>
    )
}

export default WindowsPage