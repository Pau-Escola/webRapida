import React, { useState } from 'react';

function ContactForm() {
    const [contact, setContact] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic, possibly using fetch API to interact with the backend
    };

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-4 px-8 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={contact.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={contact.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={contact.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Hello, I would like to..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                ></textarea>
            </div>
            <div>
                <button type="submit" className="hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
