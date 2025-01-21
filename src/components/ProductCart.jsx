import React from 'react'
import ProductDetail from './ProductDetail';

const ProductCart = ({card}) => {

    const { title, img, type, price, id, slug } = card;

    
  return (
    <div key={id} 
        className='flex flex-col cursor-pointer bg-white 
        justify-center items-center py-4 px-5 text-center mt-1 rounded-tl-[35px]
        rounded-br-[35px] shadow-2xl md:min-h-[350px] w-full cart-item-div max-w-screen-md
        min-h-[260px]
        '        
    >
        <a 
            href={`/ventanas/${slug}`}
            onClick={(e) => {return <ProductDetail />}}
            className='w-full h-full flex flex-col justify-between items-center'
        >
            <img 
                src={img} 
                alt={title} 
                className='h-min-[220px] w-min-[220px] object-cover'            
            />
        </a>              
         
        <div>
            <h4 className='capitalize'>{title}</h4>
            <p>{type}</p>                                        
        </div>
        <p>{price}</p>
    </div>
  )
}

export default ProductCart