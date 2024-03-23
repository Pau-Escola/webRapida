import React, { useState } from 'react';

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
        <div className="carousel" aria-roledescription="carousel" aria-label="Gallery">
            <div className="carousel-items" aria-live="polite">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`${index === currentIndex ? 'block' : 'hidden'} carousel-item`}
                        aria-hidden={index !== currentIndex}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <button onClick={goToPrevious} aria-controls="carousel-items" aria-label="Previous slide">
                Prev
            </button>
            <button onClick={goToNext} aria-controls="carousel-items" aria-label="Next slide">
                Next
            </button>
        </div>
    );
};

export default Carousel;