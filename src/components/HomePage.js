import React from 'react';

function HomePage() {
    return (
        <div className="container mx-auto px-4">
            <div className="hero-section my-8">
                <h1 className="text-3xl font-bold">Welcome to ContainerCo</h1>
                <p className="mt-4">Your reliable partner for container solutions.</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
            </div>
            <div className="services-section my-8">
                <h2 className="text-2xl font-semibold">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    {/* Placeholder for service icons and descriptions */}
                    <div className="service-item text-center">
                        <p>[Service Icon]</p>
                        <h3 className="mt-2 font-semibold">Sales</h3>
                    </div>
                    <div className="service-item text-center">
                        <p>[Service Icon]</p>
                        <h3 className="mt-2 font-semibold">Rentals</h3>
                    </div>
                    <div className="service-item text-center">
                        <p>[Service Icon]</p>
                        <h3 className="mt-2 font-semibold">Repairs</h3>
                    </div>
                    <div className="service-item text-center">
                        <p>[Service Icon]</p>
                        <h3 className="mt-2 font-semibold">Modifications</h3>
                    </div>
                </div>
            </div>
            <div className="featured-products-section my-8">
                <h2 className="text-2xl font-semibold">Featured Products</h2>
                {/* Placeholder for product showcase */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="product-item">
                        <p>[Product Image]</p>
                        <h3 className="mt-2 font-semibold">Container Model 1</h3>
                    </div>
                    {/* Repeat for other products */}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
