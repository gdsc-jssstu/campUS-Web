import React from 'react';




function FeatureCard({ title, description, logo }) {

    return (
        <div className={` p-8 rounded-xl shadow-md bg-gradient-to-r from-lime-green to-light-purple`}>
            <div className="flex items-center mb-4">
                {logo ? (<img src={logo} alt="Logo" className="w-12 h-12 mr-5" />) : null}
                <h1 className="text-4xl font-semibold">{title}</h1>
            </div>
            <p className="text-gray-200">{description}</p>
        </div>
    );
}

export default FeatureCard;
