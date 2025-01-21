import React from 'react'
import AnimatedTitle from './AnimatedTitle';
import ProductCart from './ProductCart.jsx';
import { windows } from '../constants/index';

const Products = () => {
    
  return (
    <div className='mt-14 mb-12'>
        <div className='container mx-auto'>
            <div className='text-center mb-10 max-w-[80%] mx-auto'>
            <h2 className='font-general text-sm uppercase md:text-[12px]'>
                Ventanas de toda gama
            </h2>

            <AnimatedTitle 
                title='Ventanas PVC, Híbridos y Aluminio <br/> por mejores precio y servicios' 
                containerClass="mt-5 !text-black text-center"
            />

            {/* TODO: Rerwrite and add separeted component ProductCart.  */}
            {/* TODO: Add to index.js to product extra line with window's type. */}
            {/* TODO: Render different Product carts based on window's type.  */}
            {/* Card's placement */}
            <div>
                <h3 className='mt-10 font-general text-sm uppercase md:text-[12px]'>Ventanas PVC</h3>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3
                                    lg:grid-cols-3 place-items-center gap-5 py-5 w-full'>
                    {/* Card's section */}
                    {windows.map((card, id) => (
                            <ProductCart key={id} card={card} />
                    ))}                    
                </div>
            </div>           
            </div>
        </div>        
    </div>
  )
}

export default Products