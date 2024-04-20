import React from 'react';
import rentIcon from '../images/icono-lloguer.png';
import relocationIcon from '../images/icono-venda.png';
import repairIcon from '../images/icono-reparacions.png';
import buyIcon from '../images/icono-ocasio.png';
import recycleIcon from '../images/reciclatLogo.png';
import tradingIcon from '../images/tradingLogo.png';
import cabinIcon from '../images/cabinLogo.png';
import { useTranslation, Trans } from 'react-i18next';

function ServicesSection() {
    const { t } = useTranslation();

    return (
        <div className="services-section my-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">{t('Our services')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                <div className="group relative border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                    <img src={rentIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                    <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Rent')}</h3>
                    <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">
                        <p className="text-lg p-4 text-white">
                            {t('Rent Text')}</p>
                    </div>

                </div>

                <div className="group relative border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                    <img src={buyIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                    <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Buy')}</h3>
                    <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">

                        <p className="text-lg p-4 text-white">{t('Buy Text')}</p>
                    </div>
                </div>

                <div className="group relative border border-gray-300 shadow-sm rounded-lg overflow-hidden">

                    <img src={repairIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                    <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Repairs')}</h3>
                    <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">

                        <p className="text-lg p-4 text-white">{t('Repairs Text')}</p>
                    </div>
                </div>
                <div className="group relative border border-gray-300 shadow-sm rounded-lg overflow-hidden">

                    <img src={relocationIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                    <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Relocation')}</h3>
                    <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">

                        <p className="text-lg p-4 text-white">{t('Relocation Text')}</p>
                    </div>
                </div><div className="group relative border border-gray-300 shadow-sm rounded-lg overflow-hidden">

                    <img src={recycleIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                    <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Recycled Goods')}</h3>
                    <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">

                        <p className="text-lg p-4 text-white"><Trans i18nKey="Recycled Goods Text" /></p>
                    </div>
                </div><div className="group relative border border-gray-300 shadow-sm rounded-lg overflow-hidden">

                    <img src={tradingIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                    <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Trading')}</h3>
                    <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">

                        <p className="text-lg p-4 text-white">{t('Trading Text')}</p>
                    </div>
                </div><div className="group relative border border-gray-300 shadow-sm rounded-lg overflow-hidden">

                    <img src={cabinIcon} alt="Service 1" className="w-64 h-64 mx-auto pt-5" />
                    <h3 className="text-2xl text-center mt-2 font-semibold relative">{t('Cabin')}</h3>
                    <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">

                        <p className="text-lg p-4 text-white">{t('Cabin Text')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;