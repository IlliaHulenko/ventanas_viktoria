import React from 'react'

const BentoCard = ({ src, title, description}) => {
  return (
    <div id='ventajas' className='relative size-full'>
        <video 
            src={src}
            loop
            muted
            autoPlay
            className='absolute left-0 top-0 size-full object-cover object-center'
        />
        <div
            className='relative z-10 flex size-full flex-col justify-center items-center p-5 text-2xl text-blue-100'
        >
            <div className='bg-gray-500/55 p-3 md:p-6 rounded-lg'>
                <h1 className='bento-title special-font'>
                    {title}
                </h1>
                {description && (
                    <p
                        className='mt-1 md:mt-3max-w-md text-lg md:text-3xl italic'
                    >
                        {description}
                    </p>
                )}
            </div>
        </div>        
    </div>
)
}

export default BentoCard