import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-primary text-white p-4 shadow-lg">
            <ul className="flex justify-center space-x-4">
                <li>
                    <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded font-bold">Home</Link>
                </li>
                <li>
                    <Link to="/about-us" className="hover:bg-blue-700 px-3 py-2 rounded font-bold">About Us</Link>
                </li>
                <li>
                    <Link to="/products" className="hover:bg-blue-700 px-3 py-2 rounded font-bold">Ocasió</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
