import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Then use <FaArrowLeft /> and <FaArrowRight /> in place of custom SVGs


const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (

        <div className="carousel-container relative flex items-center overflow-hidden" style={{ height: '50vh', width: '100%' }} aria-roledescription="carousel" aria-label="Gallery">
            <div className="carousel-items" aria-live="polite">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === currentIndex ? 'flex' : 'hidden'} justify-center items-center w-full h-full`}
                        aria-hidden={index !== currentIndex}
                    >
                        <img src={image} alt='Description generic' className="object-contain mx-auto" />
                    </div>
                ))}
            </div>

            <button
                onClick={goToPrevious}
                className="absolute left-0 h-full flex items-center justify-center hover:bg-primary z-10"
                aria-label="Previous slide"
                style={{ width: '50px' }}
            >
                <FaArrowLeft className="w-6 h-6 text-secondary" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-0 h-full flex items-center justify-center hover:bg-primary z-10"
                aria-label="Next slide"
                style={{ width: '50px' }}
            >
                <FaArrowRight className="w-6 h-6 text-secondary" />
            </button>
        </div>
    );
};

export default Carousel;