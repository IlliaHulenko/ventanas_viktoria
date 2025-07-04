const Button = ({ id, type, title,  leftIcon, rightIcon, containerClass }) => {
  return (
    <button 
        id={id}
        type={type}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden 
            rounded-full  px-7 py-3  ${containerClass}`}
    >
        {leftIcon}
        <span className='relative inline-flex overflow-hidden text-xs uppercase'>
            <div>{title}</div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button