import React from 'react'
import WelcomeImage from '../assets/heroImage.svg'
import FeatureImage from '../assets/featureImage.svg'
import DownArrow from '../assets/DownTwistedArrow.svg'
import RightArrow from '../assets/SmallRightArrow.svg'
import { useNavigate } from "react-router-dom";
import FeatureCard from '../components/FeatureCard'
import { features } from '../helpers/features'
import FeaturesDisplay from '../components/FeatureDisplay'


const Home = () => {
    const navigate = useNavigate();
    return (
        <section id="homePageWrapper">
            <div id="heroSection" className='flex flex-col sm:flex-row  justify-between pt-20 pl-20 pr-40 pb-2'>
                <div id="welcomeTitle" className='pt-9 pb-2 text-6xl text-san-marino font-playfair-display '>
                    <h1>Hi! <br />
                        Welcome <br />
                        To <br />
                        CampUs <br />
                    </h1>
                </div>
                <div id="welcomeImage" className='w-0 h-0  sm:h-100 sm:w-auto sm:shrink-0'>
                    <img src={WelcomeImage} alt="Welcome" />
                </div>
            </div>

            <div id="featureSection" className='flex flex-col items-center xl:flex-row p-2'>
                <div className='w-full xl:w-1/2 xl:h-96'>
                    <img
                        src={FeatureImage}
                        alt="Feature"
                        className='w-full h-full object-contain p-6'
                    />
                </div>
                <FeaturesDisplay features={features} />
            </div>



            <div id="getStartedSection" className='pb-2 flex justify-center'>
                <img src={DownArrow} alt="Twisted downwards arrow" />
                <div className='pl-2 pt-60'>
                    <button onClick={() => navigate("/login")}
                        className=' border bg-lime-green text-3xl gap-2 m-2 p-5 rounded-lg flex text-san-marino font-playfair-display h-24 sm:h-20 '>Get Started <img src={RightArrow} alt="right arrow" /> </button>
                </div>
            </div>

        </section>
    )
}

export default Home
