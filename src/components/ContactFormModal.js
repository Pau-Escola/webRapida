import React from 'react';
import ContactForm from './ContactForm';


function ContactFormModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-lg w-full">
                <button onClick={onClose} className="float-right font-bold">X</button>
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactFormModal;
