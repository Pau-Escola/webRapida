import React, { useState } from 'react';
import ContactFormModal from './ContactFormModal';
function ContactInfoFooter() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-gray-200 text-gray-700 p-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h2 className="font-bold text-lg">Horari d'atenció</h2>
                    <p>Dilluns - Divendres: 8am - 4pm</p>
                    <p>Dissabtes i Diumenges: Tancat</p>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Contacta'ns</h2>
                    <p>Telèfon: (+34) 977 344 711</p>
                    <p>Email: contact@simreus.com</p>
                    <button
                        className="mt-2 right-4 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Eniva'ns un missatge
                    </button>
                    {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} />}
                </div>
                <div className="lg:col-span-2">
                    <h2 className="font-bold text-lg">On som</h2>
                    <iframe
                        title="companyLocation"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18961.8461048295!2d1.1702911850807836!3d41.140103365181766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a151020133d66d%3A0x5d255a9fbe7e2f7e!2sSIM%20-%20Soluciones%20Integrales%20Modulares%20S.L.U.!5e0!3m2!1ses!2ses!4v1710687621482!5m2!1ses!2ses"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        aria-hidden="false"
                        tabIndex="0">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactInfoFooter;
