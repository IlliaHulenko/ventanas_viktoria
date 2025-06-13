import AnimatedTitle from '../components/AnimatedTitle.jsx';
import ProductCart from '../components/ProductCart.jsx';
import { windows } from '../constants/index';
import Footer from '../components/Footer.jsx';

const Products = () => {
    const filterProductsByType = (type) => {
        return windows.filter(window => window.type === type);
    };

    const windowsTypes = [...new Set(windows.map(window => window.type))];

    return (
        <>
            <div className='mt-20 mb-12'>
                <div className='container mx-auto'>
                    <div className='text-center my-10 max-w-[80%] mx-auto'>

                        <AnimatedTitle
                            title='Ventanas PVC, Híbridos y Aluminio <br/> por mejores precio y servicios'
                            containerClass="mt-5 !text-black text-center"
                        />
                        {/* Card's placement */}
                        <div>
                            {windowsTypes.map(type => (
                                <div key={type}>
                                    <h3 className='mt-16 mb-10 font-namu text-xl uppercase md:text-2xl'>
                                        {type}
                                    </h3>
                                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-5 py-5 w-full'>
                                        {filterProductsByType(type).map((card, id) => (
                                            <ProductCart
                                                key={id}
                                                card={card}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products