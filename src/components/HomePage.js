import React from 'react';
import falsaD from '../images/falses/falsa-2.jpg';
import HeroBanner from './HeroBanner.js';



function HomePage() {

    return (
        <>
            <HeroBanner />
            <div className="container mx-auto px-4">
                <div className="services-section my-8">
                    <h2 className="text-2xl font-semibold mb-6">Els nostres serveis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="service-item bg-white shadow-xl rounded-lg p-8 border border-gray-200">
                            <div className="flex justify-center">
                                <img src={falsaD} alt="Service 1" className="w-full " />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4">Venda</h3>
                            <p className="mt-2 text-lg">Si el que necessites és adquirir un contenidor o mòdul t'ajudarem a trobar el que necessites i sino te'l farem a mida</p>

                        </div>

                        <div className="service-item bg-white shadow-xl rounded-lg p-8 border border-gray-200">
                            <div className="flex justify-center">
                                <img src={falsaD} alt="Service 1" className="w-full" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4">Lloguer</h3>
                            <p className="mt-2 text-lg">Si el que necessites és una solució temporal que s'adapti i estigui disponible en poc temps, t'ho durem on calgui</p>
                        </div>

                        <div className="service-item bg-white shadow-xl rounded-lg p-8 border border-gray-200">
                            <div className="flex justify-center">
                                <img src={falsaD} alt="Service 1" className="w-full" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4">Reparacions</h3>
                            <p className="mt-2 text-lg">Tants anys dedicats al sector ens permeten arreglar o modificar qualssevol cosa relacionada amb mòduls</p>
                        </div>
                        <div className="service-item bg-white shadow-xl rounded-lg p-8 border border-gray-200">
                            <div className="flex justify-center">
                                <img src={falsaD} alt="Service 1" className="w-full" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4">Ocasio</h3>
                            <p className="mt-2 text-lg">Productes preparats per ser utilitzats a preus més baixos</p>
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
