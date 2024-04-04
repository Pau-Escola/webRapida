import React from 'react';
import logo from '../images/logo.jpg';
import catalan from '../images/idiomes/catalan.png';
import spanish from '../images/idiomes/spanish.png';
import english from '../images/idiomes/english.png';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <nav className="bg-white p-3 shadow-lg flex justify-between items-center">
            <div>
                <img src={logo} alt="Company Logo" style={{ width: '200px', marginLeft: '10px' }} />
            </div>
            <div className="flex items-center space-x-4">
                <button onClick={() => changeLanguage('ca')}>
                    <img src={catalan} alt="Catalan" className="w-10 h-10" />
                </button>
                <button onClick={() => changeLanguage('es')}>
                    <img src={spanish} alt="Spanish" className="w-10 h-10" />
                </button>
                <button onClick={() => changeLanguage('en')}>
                    <img src={english} alt="English" className="w-10 h-10" />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
