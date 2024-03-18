import React from 'react';

function AboutUs() {
    return (
        <div className="container mx-auto px-4">
            <div className="about-us-section my-8">
                <h1 className="text-3xl font-bold">About Us</h1>
                <p className="mt-4">
                    [Insert company history, mission, and vision here.]
                </p>
                <div className="team-section mt-8">
                    <h2 className="text-2xl font-semibold">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {/* Placeholder for team member photos and bios */}
                        <div className="team-member">
                            <p>[Team Member Photo]</p>
                            <h3 className="mt-2 font-semibold">Name</h3>
                            <p>Position</p>
                        </div>
                        {/* Repeat for other team members */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
