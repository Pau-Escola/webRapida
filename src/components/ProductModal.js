import Carousel from './Carousel.js';

function ProductModal({ product, onClose }) {
    if (!product) return null; // Render nothing if no product

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-30 flex items-center justify-center">
            <div className="relative mx-auto p-5 border  w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 2xl:max-w-4xl shadow-lg rounded-md bg-white">
                <h2 className="text-lg font-bold mb-4">{product.name}</h2>
                <Carousel images={product.images} size="min-h-96 h-auto md:min-h-[30rem] lg:min-h-[40rem] xl:min-h-[50rem] max-h-[90vh]" />
                <p>{product.description}</p>
                <p className="font-bold">{product.price}</p>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 cursor-pointer" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ProductModal;
