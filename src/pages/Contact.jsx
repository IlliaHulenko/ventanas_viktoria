import ContactForm from '../components/ContactForm'

const ImageClipBox = ({src, clipClass}) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
)

const Contact = () => {
  return (
    <div 
      id='contactos'
      className='mt-0 mb-10 min-h-96 w-screen px-10'
    >
      <ContactForm />
    </div>
  )
}

export default Contact