import React from 'react'

const Modal = ({open, onClose, children}) => {
  return (
    <div
        onClick={onClose}
        className={`fixed top-0 right-0 min-h-screen flex justify-center items-center transition-colors 
            w-full height-screen z-20 ${open ? 'flex bg-black/20' : 'hidden'}` }
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white p-6 rounded-md shadow transition-all max-w-[48rem] w-full h-full overflow-y-auto
                ${open ? 'scale-100 opacity-100' : 'opacity-0 scale-125'}`}
        >
            <button
                onClick={onClose} 
                className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-700'
            >
                X
            </button>
            {children}
        </div>
        
    </div>
  )
}

export default Modal