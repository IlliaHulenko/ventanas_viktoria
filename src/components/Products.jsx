import React from 'react'
import AnimatedTitle from './AnimatedTitle';
import { pvc_windows, hybrid_windows,aluminium_windows } from '../constants/index.js';

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container mx-auto'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>
                Ventanas de toda gama
            </h2>

            <AnimatedTitle 
                title='Ventanas PVC, Híbridos y Aluminio <br/> por mejores precios y servicios' 
                containerClass="mt-5 !text-black text-center"
            />

            {/* Card's placement */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
                                    lg:grid-cols-5 place-items-center gap-5'>
                    {/* Card's section */}                    
                    {
                        pvc_windows.map((card, id) => (
                            <div key={id}>
                                <img 
                                    src={card?.img} 
                                    alt={card.title} 
                                    className='h-[220px] w-[220px] object-cover rounded-md'
                                />
                                <div>
                                    <h4>{card.title}</h4>
                                    <p>{card.type}</p>                                        
                                </div>
                                <p>{card.price}</p>
                            </div>
                            

                        ))
                    }                    
                </div>
            </div>

            </div>
        </div>        
    </div>
  )
}

export default Products