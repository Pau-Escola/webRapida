import React, { useState } from 'react';
import Carousel from './Carousel'; // Import your Carousel component
import ContactFormModal from './ContactFormModal';
import falsaU from '../images/falses/falsa-1.jpg';
import falsaD from '../images/falses/falsa-2.jpg';
import falsaT from '../images/falses/falsa-3.jpg';
import { useTranslation, Trans } from 'react-i18next';

function HeroBanner() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="relative h-[400px] md:h-[500px] lg:h-[800px] w-full">
            <Carousel images={[falsaD, falsaU, falsaT]} size="absolute inset-0 w-full h-full" objectFit={"object-cover"} />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4 bg-black bg-opacity-60">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{t('Welcome to SIM')}</h1>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl max-w-2xl"><Trans i18nKey="Hero Text" /></p>
                <button
                    className="mt-8 md:mt-12 lg:mt-16 text-lg md:text-xl lg:text-2xl bg-primary hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full z-40"
                    onClick={() => setIsModalOpen(true)}
                >
                    {t('Ask for quote')}
                </button>
                {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} />}
            </div>
        </div>
    );
}

export default HeroBanner;
