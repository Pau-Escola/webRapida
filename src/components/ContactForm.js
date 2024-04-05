import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const [contact, setContact] = useState({ from_name: '', reply_to: '', message: '', contact_phone: '' });

    useEffect(() => {
        emailjs.init("S2wLIPh6B27P5O_sL"); // Initialize EmailJS with your user ID
    }, []);


    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_2xr0lqj', 'template_xoxi5rc', contact, 'S2wLIPh6B27P5O_sL')
            .then((result) => {
                console.log(result.text);
                alert(t('Sent Success'));
            }, (error) => {
                console.log(error.text);
                alert(t('Sent Failure'));
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-4 px-8 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">{t('Name')}</label>
                <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    value={contact.from_name}
                    onChange={handleChange}
                    placeholder={t('Name PlaceHolder')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">{t('Phone')}</label>
                <input
                    type="phone"
                    name="contact_phone"
                    id="contact_phone"
                    value={contact.contact_phone}
                    onChange={handleChange}
                    placeholder={t('Phone PlaceHolder')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{t('Email')}</label>
                <input
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    value={contact.reply_to}
                    onChange={handleChange}
                    placeholder={t('Email PlaceHolder')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">{t('Message')}</label>
                <textarea
                    name="message"
                    id="message"
                    value={contact.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={t('Message PlaceHolder')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                ></textarea>
            </div>
            <div>
                <button type="submit" className="hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    {t('Send')}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
