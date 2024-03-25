import React, { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import Carousel from './Carousel.js';
import logo from '../images/logo.jpg';
import iconVenda from '../images/icono-venda.png';
import iconRepar from '../images/icono-reparacions.png';
import iconOcasio from '../images/icono-ocasio.png';
import iconLloguer from '../images/icono-lloguer.png';
import falsaU from '../images/falses/falsa-1.jpg';
import falsaD from '../images/falses/falsa-2.jpg';
import falsaT from '../images/falses/falsa-3.jpg';



function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container mx-auto px-4">
            <div className="hero-section my-8">
                <img src={logo} alt="Company Logo" style={{ width: '300px' }} />
                <h1 className="text-3xl font-bold">Benvinguts a SIM</h1>
                <p className="mt-4">Amb més de 20 anys d'experiència liderant el sector, SIM és la vostra solució de confiança per a tot el relacionat amb contenidors i mòduls. La nostra dedicació a llogar, comprar, vendre, reparar, modificar i crear a mida solucions per a contenidors i mòduls ens ha posicionat com a líders en el mercat. Ens comprometem a oferir solucions pràctiques i personalitzades que s'adapten a les necessitats úniques de cada projecte.
                    La nostra passió per la innovació i l'excel·lència ens motiva a estar sempre al dia amb les últimes tendències i tecnologies, assegurant que els nostres clients rebin el millor servei possible. A SIM, el vostre èxit és la nostra prioritat.
                    Descobriu les solucions versàtils i de qualitat que SIM pot oferir per al vostre projecte. Contacteu-nos per començar.</p>
                <button
                    className=" mt-2 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
                    onClick={() => setIsModalOpen(true)}
                >
                    Demanar pressupost
                </button>
                {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} />}
            </div>
            <div>
                <Carousel images={[falsaU, falsaD, falsaT, iconLloguer, iconRepar]} />
            </div>
            <div className="services-section my-8">
                <h2 className="text-2xl font-semibold">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div className="flex flex-col items-center text-center m-3 w-48">
                        <img src={iconVenda} alt="Company Logo" style={{ width: '100px' }} />
                        <h3 className="mt-2 font-semibold">Venda</h3>
                    </div>
                    <div className="flex flex-col items-center text-center m-3 w-48">
                        <img src={iconLloguer} alt="Company Logo" style={{ width: '100px' }} />
                        <h3 className="mt-2 font-semibold">Lloguer</h3>
                    </div>
                    <div className="flex flex-col items-center text-center m-3 w-48">
                        <p><img src={iconRepar} alt="Company Logo" style={{ width: '100px' }} /></p>
                        <h3 className="mt-2 font-semibold">Reparacions</h3>
                    </div>
                    <div className="flex flex-col items-center text-center m-3 w-48">
                        <img src={iconOcasio} alt="Company Logo" style={{ width: '100px' }} />
                        <h3 className="mt-2 font-semibold">Ocasio</h3>
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
        </div>
    );
}

export default HomePage;
