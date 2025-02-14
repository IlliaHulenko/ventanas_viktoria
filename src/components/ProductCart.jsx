import React from 'react'
import { Link } from "react-router-dom";

const ProductCart = ({card}) => {

    const { title, img, type, price, id, slug } = card;
    
  return (
    <Link 
        key={id}
        to={`/products/${slug}`}
        className='flex flex-col cursor-pointer bg-white 
        justify-center items-center py-4 px-5 text-center mt-1 rounded-tl-[35px]
        rounded-br-[35px] shadow-2xl md:min-h-[350px] w-full cart-item-div max-w-screen-md
        min-h-[260px]
        '
    >
        <div            
            className='w-full h-full flex flex-col justify-between items-center'            
        >
            <img 
                src={img} 
                alt={title} 
                className='h-min-[220px] w-min-[220px] object-cover'            
            />
        </div>              
         
        <div>
            <h4 className='capitalize'>{title}</h4>
            <p>{type}</p>                                        
        </div>
        {/* <p>{price}</p> */}
    </Link>
  )
}

export default ProductCart