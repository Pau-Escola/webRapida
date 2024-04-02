import React, { useState } from 'react';
import ProductModal from './ProductModal';
import Carousel from './Carousel.js';
import caseta1 from '../images/products/caseta-1.jpg';
import caseta2 from '../images/products/caseta-2.jpg';
import caseta3 from '../images/products/caseta-3.JPG';
import caseta4 from '../images/products/caseta-4.JPG';
import caseta5 from '../images/products/caseta-5.JPG';


const products = [
    {
        id: 1,
        name: 'Caseta 1',
        description: 'Caseta 1 descripcio',
        mainImageUrl: caseta1,
        images: [caseta1, caseta2, caseta3],
        price: '1000.00 €'
    },
    {
        id: 2,
        name: 'Caseta 2',
        description: 'Caseta 2 descripcio',
        images: [caseta2, caseta1, caseta2, caseta3],
        price: '1000.00 €'
    },
    {
        id: 3,
        name: 'Caseta 3',
        description: 'Caseta 3 descripcio',
        images: [caseta3, caseta1, caseta2, caseta3],
        price: '1000.00 €'
    },
    {
        id: 4,
        name: 'Caseta 4',
        description: 'Caseta 4 descripcio',
        images: [caseta4, caseta1, caseta2, caseta3],
        price: '1000.00 €'
    },
    {
        id: 5,
        name: 'Caseta 5',
        description: 'Caseta 5 descripcio',
        images: [caseta5, caseta1, caseta2, caseta3],
        price: '1000.00 €'
    },
]
function ProductShowcase() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const openModal = (product) => {
        setCurrentProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProduct(null);
    };
    return (
        <div className="py-8">
            <h2 className="text-3xl text-center font-bold mb-8">Product Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
                {products.map((product) => (
                    <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg" >
                        <Carousel images={product.images} size="h-64" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-gray-700 text-base">
                                {product.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price}</span>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 cursor-pointer" onClick={() => openModal(product)}>Ampliar</button>
                    </div>
                ))}
            </div>
            {isModalOpen && <ProductModal product={currentProduct} onClose={closeModal} />}
        </div>
    );
}

export default ProductShowcase;
