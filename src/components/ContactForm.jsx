import React, { useState, useRef } from 'react'
import Button from './Button';
import { RiMailSendLine } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import useAlert from './useAlert';
import Alert from './Alert';

const ContactForm = () => {

    const formRef = useRef(null);
    const[form, setForm] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);

    const {alert, showAlert, hideAlert} = useAlert();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleFocus = () => {};

    const handleBlur = () => {};

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            import.meta.env.VENTAS_VIKTORIA_EMAILJS_SERVICE_ID, //TODO: Change to your service ID
            import.meta.env.VENTAS_VIKTORIA_EMAILJS_TEMPLATE_ID, //TODO: Change to your template ID
            {
                from_name: form.name,
                to_name: 'Viktoria', //Add your name
                from_email: form.email,
                to_email: 'ventanas_viktoria@example.com', //Add your email
                message: form.message,
            },
            import.meta.env.VENTAS_VIKTORIA_EMAILJS_PUBLIC_KEY //TODO: Change to your public key
        ).then(() => {
            setIsLoading(true);
            showAlert({show: true, text: 'Mensaje enviado correctamente', type: 'success'});
            
            setTimeout(() => {
                hideAlert(false);
                setForm({name: '', email: '', message: ''});
            }, [3000]); 

        }).catch((err) => {
            setIsLoading(false);
            console.error(err);
            showAlert({show: true, text: 'Error al enviar el mensaje', type: 'danger'});
            setTimeout(() => {
                hideAlert(true);
                setForm({name: '', email: '', message: ''});
            }, [5000]); 
        })
    };


  return (
    <section className='relative flex lg:flex-row flex-col  max-container'>
        {alert.show && <Alert {...alert}/>}
        
        <div className='flex-1 flex flex-col items-center'>
            <form 
                className='lg:w-[80%] w-full flex flex-col gap-7 mt-14'
                onSubmit={handleSubmit}
            >

                <label className='text-black-500 font-semibold'>
                    Nombre
                    <input 
                        type='text'
                        name='name'
                        className='bg-white border border-gray-200 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5 mt-2.5 font-normal shadow-card;'
                        placeholder='Ingresa su nombre'
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </label>
                <label className='text-black-500 font-semibold'>
                    Correo electrónico
                    <input 
                        type='text'
                        name='email'
                        className='bg-white border border-gray-200 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5 mt-2.5 font-normal shadow-card;'
                        placeholder='correo@gmail.com'
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </label>
                <label className='text-black-500 font-semibold'>
                    Su mensaje
                    <textarea                         
                        name='message'
                        rows={4}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg 
                            border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 
                            font-normal shadow-card;'
                        placeholder='Escribe su mensaje aquí'
                        required
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </label>
                <div className='flex justify-center'>
                    <Button
                        type={'submit'}
                        title={isLoading ? 'Enviando su mensaje...' : 'Enviar mensaje'}
                        rightIcon={<RiMailSendLine />}
                        containerClass='bg-gradient-to-r from-[#287233] to-[#07dfd9] text-white 
                            focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg 
                            px-5 py-2.5 text-center flex items-center justify-center gap-3 md:w-[40%] sm:w-full h-14
                            drop-shadow-md hover:drop-shadow-xl ease-out hover:translate-y-1 transition-all rounded
                            '
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={isLoading}
                    />
                </div>

                
            </form>

        </div>
    </section>
  )
}

export default ContactForm