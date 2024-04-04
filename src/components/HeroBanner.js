import React, { useState } from 'react';
import Carousel from './Carousel'; // Import your Carousel component
import ContactFormModal from './ContactFormModal';
import falsaU from '../images/falses/falsa-1.jpg';
import falsaD from '../images/falses/falsa-2.jpg';
import falsaT from '../images/falses/falsa-3.jpg';

function HeroBanner() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative h-[400px] md:h-[500px] lg:h-[800px] w-full">
            <Carousel images={[falsaD, falsaU, falsaT]} size="absolute inset-0 w-full h-full" objectFit={"object-cover"} />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4 bg-black bg-opacity-60">
                <h1 className="text-4xl md:text-5xl font-bold">Benvingut a SIM</h1>
                <p className="text-lg md:text-xl max-w-5xl">Una experiència de 20 anys d'especialització en tot tipus de solucions prefabricades: temporals o definitives, en lloguer o venda, noves o d'ocasió, fan del <b>GRUP SIM</b> una resposta en la construcció mòbil i edificació modular.
                    Un servei global, on s'inclou la possibilitat del servei de manteniment, transformació o trasllat de qualsevol prefabricat de la seva propietat.
                    A SIM li assessorem o desenvolupem productes a mida de les seves necessitats.</p>
                <button
                    className=" text-xl bg-primary hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full z-50"
                    onClick={() => setIsModalOpen(true)}
                >
                    Demanar pressupost
                </button>
                {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} />}
            </div>
        </div>
    );
}

export default HeroBanner;
