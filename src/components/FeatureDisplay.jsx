import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';

const FeaturesDisplay = ({ features }) => {
    const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

    // Function to increment the feature index in a cyclic manner
    const rotateFeature = () => {
        setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    };

    // Set up an interval to rotate the features every 2 seconds
    useEffect(() => {
        const interval = setInterval(rotateFeature, 2000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="featureDescription" className='w-full xl:w-1/2 xl:h-64 text-san-marino font-playfair-display font-thin'>
            <h1 className='text-5xl pb-5'>Features</h1>
            <FeatureCard
                title={features[currentFeatureIndex].title}
                description={features[currentFeatureIndex].description}
                logo={features[currentFeatureIndex].logo}
                bgColor = {features[currentFeatureIndex].bgGradient}
            />
        </div>
    );
};

export default FeaturesDisplay;
