function ProductModal({ product, onClose }) {
    if (!product) return null; // Render nothing if no product

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
            <div className="relative top-20 mx-auto p-5 border  w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 shadow-lg rounded-md bg-white">
                <h2 className="text-lg font-bold mb-4">{product.name}</h2>
                <img src={product.imageUrl} alt={product.name} className="mb-4" />
                <p>{product.description}</p>
                <p className="font-bold">{product.price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ProductModal;
