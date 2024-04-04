import React from 'react';
import logo from '../images/logo.jpg';
import catalan from '../images/idiomes/catalan.png';
import spanish from '../images/idiomes/spanish.png';
import english from '../images/idiomes/english.png';


const NavBar = () => {
    return (
        <nav className="bg-white p-3 shadow-lg flex justify-between items-center">
            <div>
                <img src={logo} alt="Company Logo" style={{ width: '200px', marginLeft: '10px' }} />
            </div>
            <div className="flex items-center space-x-4">
                <img src={catalan} alt="Catalan" className="w-10 h-10" /> {/* Example dimensions */}
                <img src={spanish} alt="Spanish" className="w-10 h-10" />
                <img src={english} alt="English" className="w-10 h-10" />
            </div>
        </nav>
    );
};

export default NavBar;
