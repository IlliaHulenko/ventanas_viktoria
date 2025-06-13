import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import LoaderSpinner from '../components/LoaderSpinner';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play()
            })

            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
            borderRadius: '0% 0% 40% 10%'
        });

        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    })

    const getVideoSrc = (index) => `videos/window-${index}.mp4`


    return (
        <div id='inicio' className='relative h-dvh w-screen overflow-x-hidden'>

            {isLoading && <LoaderSpinner />}

            <div
                id='video-frame'
                className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'
            >
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div
                            onClick={handleMiniVdClick}
                            className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in 
                            hover:scale-100 hover:opacity-100'
                        >
                            <video
                                id='current-video'
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loading='lazy'
                                loop
                                muted
                                autoPlay
                                className='size-64 origin-center scale-150 object-cover object-center'
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>

                    <video
                        id='next-video'
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        autoPlay
                        className='absolute-center invisible absolute z-20 size-64
                        object-cover object-center'
                        onLoadedData={handleVideoLoad}
                    />

                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>
                <h1 className='hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                    Viktoria Ventanas
                </h1>
                <div className='absolute left-0 top-0 size-full z-40'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <img src={import.meta.env.BASE_URL + '/img/CE-certificate.svg'} alt='Certificate CE' className='w-28 h-28 lg:w-36 lg:h-36' />

                        <p className='mb-5 max-w-64 lg:max-w-96 text-start font-namu text-blue-100 md:text-xl lg:text-2xl'>
                            Los componentes de alta calidad certificados en la Unión Europea <br />
                            garantizan la calidad, durabilidad y alto rendimiento de nuestras estructuras
                        </p>
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
                Viktoria Ventanas
            </h1>
        </div>
    )
}

export default Hero