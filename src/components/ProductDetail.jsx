import { useEffect, useState } from 'react'
import { windows } from '../constants';
import { useParams, useNavigate } from "react-router-dom";
import Button from './Button';
import Footer from './Footer';
import Modal from './Modal';
import ContactForm from './ContactForm';
import Page404 from '../pages/Page404';


const ProductDetail = () => {

  const { slug } = useParams();
  const product = windows.find((product) => product.slug === slug);

  const [open, setOpen] = useState(false);

  if (!product) return <Page404 />;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Animated route Back Navigation
  const navigate = useNavigate();
  function navigateBack() {
      if (!document.startViewTransition) {
          navigate(-1);
          return;
      }
      document.startViewTransition(() => navigate(-1));
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden sm:h-auto bg-gray-200">
      <div 
        className='sticky w-fit h-fit left-5 top-28 z-100' 
        onClick={() => navigateBack()}
      >
        <Button          
          title='Ir atras'
          type='button'
          containerClass='product-detail-back-button'          
          leftIcon={<span>{'<'}</span>}
        />
      </div>
      <div className="container flex px-1 pt-32 mx-auto">
        <div className="w-[90%] mx-auto flex flex-wrap">
          <img
            src={
              Array.isArray(product?.img) && product.img.length > 0
                ? `${import.meta.env.BASE_URL}/${product.img[0]}`
                : `${import.meta.env.BASE_URL}/${product?.img}`
            }
            alt={product.title}
            className="w-full lg:w-1/2 h-fit bg-contain object-center border rounded-lg hover:scale-110 duration-500 ease-in cursor-pointer"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:pb-6 lg:pt-0 mt-6 lg:mt-0">
            <h2 className="text-lg title-font text-gray-400 tracking-widest mb-2">MARCA</h2>
            <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-1">{product.title}</h1>
            <h2 className='my-2'>Características</h2>

            {/* Product specification */}
            <div className='flex flex-col w-full'>
              {/* PVC windows specifications which render conditionaly */}
              {product.series &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Tipo</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.type}</p>
                </div>
              }
              {product.profile &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Perfil</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.profile}</p>
                </div>
              }
              {product.profile_width &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Ancho del perfil</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.profile_width}</p>
                </div>
              }
              {product.chambers &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Cámaras</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.chambers}</p>
                </div>
              }
              {product.passive_insulation &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Aislamiento térmico</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.passive_insulation}</p>
                </div>
              }
              {product.glass_thickness &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Espesor del vidrio</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.glass_thickness}</p>
                </div>
              }
              {product.sealing &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Sellado</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.sealing}</p>
                </div>
              }
              {product.design &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Diseño</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.design}</p>
                </div>
              }
              {product.security &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Seguridad</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.security}</p>
                </div>
              }
              {product.comfort_life &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Más comodidad</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.comfort_life}</p>
                </div>
              }

              {/* Hybrid windows specifications which render conditionaly */}

              {product.series &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Serie</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.series}</p>
                </div>
              }
              {product.glass &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Cristal</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.glass}</p>
                </div>
              }
              {product.passive_glass &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Cristal pasivo</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.passive_glass}</p>
                </div>
              }
              {product.alu &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Cristal pasivo</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.alu}</p>
                </div>
              }
              {product.hi_plus &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>HI+</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.hi_plus}</p>
                </div>
              }
              {product.si_plus &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>SI+</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.si_plus}</p>
                </div>
              }

              {/* Aluminium windows specifications which render conditionaly */}

              {product.thermal_insulation &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Aislamiento térmico Uw</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.thermal_insulation}</p>
                </div>
              }
              {product.tightness &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Estanqueidad</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.tightness}</p>
                </div>
              }
              {product.water_resistance &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Resistencia al agua</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.water_resistance}</p>
                </div>
              }
              {product.stability_winds &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Estabilidad para cargas de viento</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.stability_winds}</p>
                </div>
              }
              {product.acoustics &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Aislamiento acústico</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.acoustics}</p>
                </div>
              }
              {product.durability &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Durabilidad</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.durability}</p>
                </div>
              }
              {product.max_size &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>El tamaño máximo del batiente H*W</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.max_size}</p>
                </div>
              }
              {product.max_sash_width &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Ancho máximo del batiente</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.max_sash_width}</p>
                </div>
              }
              {product.max_sash_weight &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Peso máximo del batiente</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.max_sash_weight}</p>
                </div>
              }
              {product.install_depth &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Profundidad de instalación del batiente</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.install_depth}</p>
                </div>
              }
              {product.max_thikness &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Espesor máximo del relleno</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.max_thikness}</p>
                </div>
              }

              {/* PVC sliding system's specifications which render conditionaly */}

              {product.galvanized_shaped_reinforcement &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Refuerzo galvanizado en forma</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.galvanized_shaped_reinforcement}</p>
                </div>
              }
              {product.maximum_sash_weight &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Peso máximo de la hoja</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.maximum_sash_weight}</p>
                </div>
              }
              {product.slide_type &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Tipo</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.slide_type}</p>
                </div>
              }
              {product.install_depth &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Sistema de 3 cámaras</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.install_depth}</p>
                </div>
              }
              {product.max_thickness &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Vidrio monocámara</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.max_thickness}</p>
                </div>
              }
              {product.width_min &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Ancho mínimo</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.width_min}</p>
                </div>
              }
              {product.width_max_whites &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Ancho máximo para blancos</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.width_max_whites}</p>
                </div>
              }
              {product.width_max_coloreds &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Ancho máximo para coloridos</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.width_max_coloreds}</p>
                </div>
              }
              {product.height_max_whites &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Altura máxima para blancos</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.height_max_whites}</p>
                </div>
              }
              {product.height_max_coloreds &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Altura máxima para coloridos</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.height_max_coloreds}</p>
                </div>
              }
              {product.weight &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Peso de la unidad de doble acristalamiento (Hoja)</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.weight}</p>
                </div>
              }
              {product.height_min &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Altura mínima por el marco</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.height_min}</p>
                </div>
              }
              {product.width_min_scheme_a &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Ancho mínimo por el marco Esquema A</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.width_min_scheme_a}</p>
                </div>
              }
              {product.width_min_scheme_k &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Ancho mínimo por el marco Esquema K</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.width_min_scheme_k}</p>
                </div>
              }
              {product.width_min_scheme_c &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Ancho mínimo por el marco Esquema C</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.width_min_scheme_c}</p>
                </div>
              }
              {product.width_max &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Ancho máximo</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.width_max}</p>
                </div>
              }
              {product.height_min &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Altura mínima</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.height_min}</p>
                </div>
              }
              {product.height_max &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Altura máxima</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.height_max}</p>
                </div>
              }


              {/* Common windows specifications which render conditionaly */}
              {product.developed &&
                <div className='flex flex-row items-start gap-4 my-2'>
                  <p className='font-bold w-1/4'>Desarrollado</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.developed}</p>
                </div>
              }
              {product.description &&
                <div className='flex flex-row items-start gap-4 my-2 '>
                  <p className='font-bold w-1/4'>Descripción</p>
                  <p className="leading-relaxed ml-2 w-3/4">{product.description}</p>
                </div>
              }
            </div>
          </div>
          <div className=" w-full flex-col sm:flex-row">

            {product.video &&
              <div
                className='origin-center scale-50 duration-500 ease-in'
              >
                <video
                  src={`${import.meta.env.BASE_URL}/${product.video}`}
                  loop
                  muted
                  autoPlay
                  className='size-128 origin-center scale-150 object-cover object-center rounded-lg'
                />
              </div>
            }

            {Array.isArray(product?.img) && product.img.length > 0 && (
              <div className='flex flex-col sm:flex-row flex-wrap gap-3'>
                {product.img.map((image, index) => (
                  <img
                    key={index}
                    src={`${import.meta.env.BASE_URL}/${image}`}
                    alt={product.title}
                    className="w-full max-w-xs md:max-w-md rounded-lg hover:scale-110 duration-500 ease-in cursor-pointer"
                  />
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <span className="mr-3 mb-3 font-general text-lg md:text-2xl">Laminación de los sistemas de perfil:</span>
            <div className="flex items-center flex-wrap">

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
          </div>

          <div className="flex mb-24">
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
      <Modal open={open} onClose={() => setOpen(false)} children={<ContactForm />} />
      <Footer />
    </section>
  )
}

export default ProductDetail