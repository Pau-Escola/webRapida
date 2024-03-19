import React from 'react';
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
        imageUrl: caseta1,
        price: '1000.00 €'
    },
    {
        id: 2,
        name: 'Caseta 2',
        description: 'Caseta 2 descripcio',
        imageUrl: caseta2,
        price: '1000.00 €'
    },
    {
        id: 3,
        name: 'Caseta 3',
        description: 'Caseta 3 descripcio',
        imageUrl: caseta3,
        price: '1000.00 €'
    },
    {
        id: 4,
        name: 'Caseta 4',
        description: 'Caseta 4 descripcio',
        imageUrl: caseta4,
        price: '1000.00 €'
    },
    {
        id: 5,
        name: 'Caseta 5',
        description: 'Caseta 5 descripcio',
        imageUrl: caseta5,
        price: '1000.00 €'
    },
]
function ProductShowcase() {
    return (
        <div className="py-8">
            <h2 className="text-3xl text-center font-bold mb-8">Product Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
                {products.map((product) => (
                    <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full h-40 object-cover" src={product.imageUrl} alt={product.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-gray-700 text-base">
                                {product.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductShowcase;
