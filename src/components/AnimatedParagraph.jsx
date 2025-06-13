import { useEffect, useRef } from 'react'
import gsap from 'gsap';

const AnimatedParagraph = ({paragraph, containerClass}) => {

    const paragraphRef = useRef(null);

    useEffect(() => {
        const contextParagraph = gsap.context(() => {
            const paragraphAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger: paragraphRef.current,
                    start: "center 40%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                }
            });

            paragraphAnimation.to(".animated-word-paragraph", {
                opacity: 1,
                transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                ease: "power3.inOut",
                stagger: 0.02
            })
        }, paragraphRef)

        return () => contextParagraph.revert();
    }, []);

  return (
    <div 
        ref={paragraphRef}
        className={`animated-paragraph ${containerClass}`}
    >
        {paragraph.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-1 px-10 md:gap-2 text-2xl lg:text-4xl"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word-paragraph"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
        
    </div>
  )
}

export default AnimatedParagraph