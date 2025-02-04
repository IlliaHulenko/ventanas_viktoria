import React from 'react'
import Button from './Button'
import AnimatedTitle from './AnimatedTitle'
import ContactForm from './ContactForm'

const ImageClipBox = ({src, clipClass}) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
)

const Contact = () => {
  return (
    <div 
      id='contactos'
      className='my-20 min-h-96 w-screen px-10'
    >
      <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
        <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'
        >
          <ImageClipBox 
            src='img/contact-1.jpg' 
            clipClass='contact-clip-path-1' 
          />  
          <ImageClipBox 
            src='img/contact-2.jpg' 
            clipClass='contact-clip-path-2 lg:translate-y-60 translate-y-60' 
          />  
        </div>

        <div 
          className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'        
        >
          {/* <ImageClipBox 
            src='img/phone-1.png' 
            clipClass='absolute md:scale-125' 
          />   */}
          <ImageClipBox 
            src='img/phone.jpg' 
            clipClass='handshake-clip-path md:scale-125' 
          /> 
        </div>

        <div className='flex flex-col items-center text-center'>
          <p className='font-general text-[10px] uppercase'>
            Contacte con nosotros
          </p>
          <AnimatedTitle 
            title='Contar el precio de sus ventanas y cerramientos de PVC y aluminio.'
            containerClass='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[5rem]'
          />
          {/* <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[5rem]'>
            Contar el precio de sus ventanas y cerramientos de PVC y aluminio.
          </p> */}

          <Button 
            title='Contactanos'
            containerClass='mt-10 cursor-pointer'
          />
        </div>

      </div>      

        <ContactForm />
    </div>
  )
}

export default Contact