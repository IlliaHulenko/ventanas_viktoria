import React, { useState } from 'react'
import { windows } from '../constants';
import { useParams } from "react-router-dom";
import Footer from './Footer';
// import { Link } from 'react-router-dom';
import Modal from './Modal';
import ContactForm from './ContactForm';



const ProductDetail = () => {

  const { slug } = useParams();
  const product = windows.find((product) => product.slug === slug);

  const [open, setOpen] = useState(false);

  // TODO: 404 Page
  if (!product) return <h1>Product Not Found</h1>;

  return (
    
      <section className="text-gray-700 body-font h-vh sm:h-auto bg-white">
        <div className="container flex px-2 py-48 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img src={`${import.meta.env.BASE_URL}/${product?.img}`} alt={product.title} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"  />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">MARCA</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>            
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex items-center flex-wrap">
                  <span className="mr-3">Laminación de los sistemas de perfil:</span>                  
                  
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/10l-2_pine_tree1.jpg`} alt="Laminacion Pino" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/21l-2_light_oak1.jpg`} alt="Laminacion Roble claro" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/22l-2_birch_tree1.jpg`} alt="Laminacion Rustical" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/27l-2_mahogany1.jpg`} alt="Laminacion Caoba" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/32s-2_titan1.jpg`} alt="Laminacion Titanio" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/38s-2_scandinavian_grey1.jpg`} alt="Laminacion Gris escandinavo" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/39l-2_black_brown1.jpg`} alt="Laminacion Negro marrón" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/48s-2_ficus1-sq.jpg`} alt="Laminacion Ficus" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/49l-2_swan_white1.jpg`} alt="Laminacion Blanco de cisne" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/52l-2_pearl_white1.jpg`} alt="Laminacion Blanco nacarado" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/58d-2_antracite_dark_wood-sq.jpg`} alt="Laminacion Antracita árbol oscuro" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/58l-2_anthracit_grey1.jpg`} alt="Laminacion Antracita gris" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/58l-2_antracite_grey_sq.jpg`} alt="Laminacion Antracita arenosa" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/63l-2_sea_blue1.jpg`} alt="Laminacion Azul marino" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/65l-2_forest_green1.jpg`} alt="Laminacion Verde silvestre" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/68l-2_autumn_red1.jpg`} alt="Laminacion Rojo de otoño" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/69l-2_chocolate_brown1.jpg`} alt="Laminacion Marrón chocolate" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/109d-2_siriy_slantseviy-sq.jpg`} alt="Laminacion Gris esquistoso" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/110l-2_cold_black-sq.jpg`} alt="Laminacion Negro frío" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/anteak-sq-1.jpg`} alt="Laminacion Antic" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/black-matte-512x512.jpg`} alt="Laminacion Negro mate" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/dj606-42_silver_cloud1.jpg`} alt="Laminacion Metalic plateado" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/dub-terner-tofi_500x500.png`} alt="Laminacion Roble Terner tofi" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/grey-matte-sq.jpg`} alt="Laminacion Gris mate" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/l108001_sheffield_oak1.jpg`} alt="Laminacion Roble Sheffield" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/l107001_natural_oak1.jpg`} alt="Laminacion Roble natural" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/l106003_antracite1.jpg`} alt="Laminacion Antracita" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/l104002_walnut1.jpg`} alt="Laminacion Nuez" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/l103002_dark_cherry1.jpg`} alt="Laminacion Guinda oscura" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/l102002_golden_oak_200x200.jpg`} alt="Laminacion Roble dorado" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/l101001_montana_oak1.jpg`} alt="Laminacion Roble Monatana" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/sk_f4703001_p_dyb_terner_mini.jpg`} alt="Laminacion Roble Terner" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/sk_f4703002_p_dyb_shefild_alpiiski_mini.jpg`} alt="Laminacion Roble Sheffield Alpino" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/sk_f4703003_p_dyb_shefild_siryi_mini-1.jpg`} alt="Laminacion Roble Sheffield Gris" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/temno-siryy-alux_500x500-1.png`} alt="Laminacion Alux DB 703" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/temno-siryy-alux_500x500.png`} alt="Laminacion Cuarzo" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  <div className="border-2 border-gray-300/50 rounded-lg w-16 h-16 focus:outline-none">
                    <img src={`${import.meta.env.BASE_URL}/img/windows_colors/umbra-matte-sq.jpg`} alt="Laminacion Umbra mate" className="w-full max-w-xs md:max-w-md rounded-lg" />
                  </div>
                  
                </div>
                {/* <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>80x100 cm</option>
                      <option>100×120 cm</option>
                      <option>120×120 cm </option>
                      <option>150×150 cm</option>
                      <option>Otro tamaño</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="flex">
                {/* <span className="title-font font-medium text-2xl text-gray-900">{product.price}</span>                 */}
                <div className='flex ml-auto'>
                  <button 
                      onClick={() => setOpen(true)}
                      className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded cursor-pointer"
                    >
                      Solicitar precio
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)} children={<ContactForm />} />
        <Footer />
      </section>
  )
}

export default ProductDetail