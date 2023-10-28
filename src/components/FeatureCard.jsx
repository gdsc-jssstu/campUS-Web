import React from 'react';




function FeatureCard({ title, description, logo, bgColor }) {

    return (
        <div className={"border border-2-red p-8 rounded-xl shadow-md bg-gradient-to-r from-cyan-200 to-cyan-400"}>
            <div className="flex items-center mb-4">
                {logo ? (<img src={logo} alt="Logo" className="w-12 h-12 mr-5" />) : null}
                <h1 className="text-4xl font-semibold">{title}</h1>
                <p>{" p-8 rounded-xl shadow-md bg-gradient-to-r " + bgColor}</p>
            </div>
            <p className="text-gray-200">{description}</p>
        </div>
    );
}

export default FeatureCard;
