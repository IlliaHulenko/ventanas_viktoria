import React from 'react'
import { windows } from '../constants';
import { useParams } from "react-router-dom";


const ProductDetail = () => {

  const { slug } = useParams();
  const product = windows.find((product) => product.slug === slug);

  // TODO: 404 Page
  if (!product) return <h1>Product Not Found</h1>;

  return (
    <section className="text-gray-700 body-font h-full sm:h-auto bg-white">
      <div className="container md:container-lg px-2 py-48 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img src={`/public/${product?.img}`} alt={product.title} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"  />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">MARCA</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>            
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                    <option>80x100 cm</option>
                    <option>100×120 cm</option>
                    <option>120×120 cm </option>
                    <option>150×150 cm</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">{product.price}</span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Solicitar precio</button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail