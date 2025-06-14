import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const ProductCart = ({ card }) => {

    const { title, img, type, id, slug } = card;

    const navigator = useNavigate();

    function routeToTemp() {
        if (!document.startViewTransition) {
            navigator(`/products/${slug}`);
            return;
        }
        document.startViewTransition(() => navigator(`/products/${slug}`))
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div
            key={id}
            className='flex flex-col cursor-pointer bg-white 
        justify-center items-center py-4 px-5 text-center mt-1 rounded-tl-[35px]
        rounded-br-[35px] shadow-2xl md:min-h-[350px] w-full cart-item-div max-w-screen-md
        min-h-[260px]
        '
            onClick={routeToTemp}
        >
            <div
                className='w-full h-full flex flex-col justify-between items-center'
            >
                <img
                    src={
                        Array.isArray(img) && img.length > 0
                            ? img[0]
                            : img
                    }
                    /* src={
                        Array.isArray(img) && img.length > 0
                            ? `${import.meta.env.BASE_URL}/${img[0]}`
                            : `${import.meta.env.BASE_URL}/${img}`
                    } */
                    alt={title}
                    className='h-min-[220px] w-min-[220px] object-cover'
                />
            </div>

            <div>
                <h4 className='capitalize'>{title}</h4>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default ProductCart