import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Then use <FaArrowLeft /> and <FaArrowRight /> in place of custom SVGs


const Carousel = ({ images, size, objectFit }) => {
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

        <div className={`carousel-container relative flex items-center overflow-hidden ${size}`} aria-roledescription="carousel" aria-label="Gallery">
            <div className="carousel-items w-full h-full flex justify-center items-center w-full h-full" aria-live="polite">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === currentIndex ? 'flex' : 'hidden'} justify-center items-center w-full h-full`}
                        aria-hidden={index !== currentIndex}
                    >
                        <img src={image} alt='Description generic' className={`${objectFit} mx-auto w-full h-full`} />
                    </div>
                ))}
            </div>

            <button
                onClick={goToPrevious}
                className="absolute left-0 h-full flex items-center justify-center hover:bg-primary z-10  cursor-pointer"
                aria-label="Previous slide"
            >
                <FaArrowLeft className="w-6 h-6 text-secondary" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-0 h-full flex items-center justify-center hover:bg-primary z-10  cursor-pointer"
                aria-label="Next slide"
            >
                <FaArrowRight className="w-6 h-6 text-secondary" />
            </button>
        </div>
    );
};

export default Carousel;