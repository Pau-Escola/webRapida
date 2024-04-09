import React from 'react';
import falsaD from '../images/falses/falsa-2.jpg';
import edificiModular from '../images/products/edifici-despres.jpg';
import casetaJetSKi from '../images/products/jetSkiCaseta.jpg';
import cotenidorNou from '../images/products/IMG_20210318_140856_1.jpg';
import modulVidre from '../images/products/IMG_20201217_123553 1.jpg';
import rentIcon from '../images/icono-lloguer.png';
import buyIcon from '../images/icono-venda.png';
import repairIcon from '../images/icono-reparacions.png';
import relocationIcon from '../images/icono-ocasio.png';
import HeroBanner from './HeroBanner.js';
import { useTranslation } from 'react-i18next';



function HomePage() {
    const { t } = useTranslation();
    return (
        <>
            <HeroBanner />
            <div className="container mx-auto px-4">
                <div className="services-section my-8">
                    <h2 className="text-2xl font-semibold mb-6">{t('Our services')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="service-item group w-80 h-80 border border-gray-300 shadow-md rounded-lg overflow-hidden relative hover:bg-gray-100 transition-colors cursor-pointer">
                            <img src={rentIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                            <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Rent')}</h3>
                            <div className="service-description absolute inset-0 flex items-center justify-center bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">
                                <p className="text-lg p-4 text-secondary">
                                    {t('Rent Text')}</p>
                            </div>

                        </div>

                        <div className="service-item group w-80 h-80 border border-gray-300 shadow-md rounded-lg overflow-hidden relative hover:bg-gray-100 transition-colors cursor-pointer">
                            <img src={buyIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                            <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Buy')}</h3>
                            <div className="service-description absolute inset-0 flex items-center justify-center bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">

                                <p className="text-lg p-4 text-secondary">{t('Buy Text')}</p>
                            </div>
                        </div>

                        <div className="service-item group w-80 h-80 border border-gray-300 shadow-md rounded-lg overflow-hidden relative hover:bg-gray-100 transition-colors cursor-pointer">

                            <img src={repairIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                            <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Repairs')}</h3>
                            <div className="service-description absolute inset-0 flex items-center justify-center bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">

                                <p className="text-lg p-4 text-secondary">{t('Repairs Text')}</p>
                            </div>
                        </div>
                        <div className="service-item group w-80 h-80 border border-gray-300 shadow-md rounded-lg overflow-hidden relative hover:bg-gray-100 transition-colors cursor-pointer">

                            <img src={relocationIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                            <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Relocation')}</h3>
                            <div className="service-description absolute inset-0 flex items-center justify-center bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">

                                <p className="text-lg p-4 text-secondary">{t('Relocation Text')}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="services-section my-8">
                    <h2 className="text-2xl font-semibold mb-6">{t('Our products')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                        <div className="service-item bg-white shadow-xl rounded-lg p-8 border border-gray-200">
                            <div className="flex justify-center">
                                <img src={cotenidorNou} alt="Service 1" className="w-full " />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4">{t('Container')}</h3>
                            <p className="mt-2 text-lg">{t('Container Text')}</p>

                        </div>

                        <div className="service-item bg-white shadow-xl rounded-lg p-8 border border-gray-200">
                            <div className="flex justify-center">
                                <img src={modulVidre} alt="Service 1" className="w-full" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4">{t('Prefabs')}</h3>
                            <p className="mt-2 text-lg">{t('Prefabs Text')}</p>
                        </div>

                        <div className="service-item bg-white shadow-xl rounded-lg p-8 border border-gray-200">
                            <div className="flex justify-center">
                                <img src={casetaJetSKi} alt="Service 1" className="w-full" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4">{t('Sale')}</h3>
                            <p className="mt-2 text-lg">{t('Sale Text')}</p>
                        </div>
                        <div className="service-item bg-white shadow-xl rounded-lg p-8 border border-gray-200">
                            <div className="flex justify-center">
                                <img src={edificiModular} alt="Service 1" className="w-full" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4">{t('Modular Building')}</h3>
                            <p className="mt-2 text-lg">{t('Modular Building Text')}</p>
                        </div>
                    </div>
                </div>
                {/*<div className="featured-products-section my-8">
                <h2 className="text-2xl font-semibold">Featured Products</h2>
                {/* Placeholder for product showcase }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="product-item">
                        <p>[Product Image]</p>
                        <h3 className="mt-2 font-semibold">Container Model 1</h3>
                    </div>
                    {/* Repeat for other products }
                </div>
            </div>*/}
            </div >
        </>
    );
}

export default HomePage;
