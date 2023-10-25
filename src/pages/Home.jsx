import React from 'react'
import WelcomeImage from '../assets/heroImage.svg'
import FeatureImage from '../assets/featureImage.svg'
import DownArrow from '../assets/DownTwistedArrow.svg'
import RightArrow from '../assets/SmallRightArrow.svg'
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();
  return (
    <section id="homePageWrapper">
        <div id="heroSection" className= 'flex flex-col sm:flex-row  justify-between pt-20 pl-20 pr-40 pb-2'>
            <div id="welcomeTitle" className='pt-9 pb-2 text-6xl text-san-marino font-playfair-display '>
                <h1>Hi! <br />
                    Welcome <br />
                    To <br />
                    CampUs <br />
                </h1>
            </div>
            <div id="welcomeImage" className='w-0 h-0  sm:h-100 sm:w-auto sm:shrink-0'>
                <img src={WelcomeImage} alt="Welcome"/>
            </div>
        </div>

        <div id="featureSection" className='flex flex-col xl:flex-row p-2'>
            <img src={FeatureImage} alt="Feature" className='w-full p-6'/>
            <div id="featureDescription" className='pl-4 pt-24 sm:pt-24 text-san-marino font-playfair-display font-thin'>
                <h1 className='text-5xl pl-5'>Features</h1>
                <p className='mt-2 text-xl p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tenetur consectetur! Expedita aut doloremque sit, nulla nisi dignissimos eius minima sed. Laudantium, consequuntur facere ipsam beatae id veniam natus, asperiores quisquam, quam aliquid atque fugit reprehenderit inventore. Eum soluta repudiandae dolorum necessitatibus! Blanditiis veritatis harum, rerum, nihil ipsa vero eum quos dolor at vel atque mollitia unde quas inventore enim quis, culpa illo corrupti nam. Soluta similique, culpa inventore est voluptates laudantium fuga corrupti quasi minima ipsam sequi nam ratione expedita molestias, asperiores dolorum commodi? Ducimus nostrum alias accusamus repellat fugit quo distinctio rem mollitia dolores nisi, blanditiis, eligendi numquam repellendus illum id laboriosam similique non ab iusto, asperiores cupiditate labore quibusdam nobis. Inventore soluta a accusamus dolore earum minus tempore, excepturi sed commodi, dignissimos quasi officiis assumenda recusandae est adipisci sunt quae doloremque non deserunt porro, reprehenderit dolor aut perferendis! Eius modi vel voluptatibus? Numquam aspernatur cum nesciunt cupiditate, dolor est qui sit quasi velit! Porro adipisci, harum quas enim tempora aut quis quos sed consequuntur illo pariatur. Soluta voluptates laudantium amet omnis eveniet officia quae accusantium itaque temporibus tempora! Amet magnam, odit quam, beatae aperiam quas assumenda et itaque illo esse impedit sint quasi dolore ipsam iusto placeat molestiae quaerat, autem inventore ex. Sit provident dolore, corrupti nobis atque accusamus nostrum vel et. Optio qui dicta suscipit, at vero tempore temporibus obcaecati laborum impedit voluptatibus quod repellat deleniti ex rerum maiores architecto explicabo quam odit ipsam rem! Modi deleniti eaque eos corporis adipisci amet incidunt odio quisquam distinctio?</p>
            </div>
        </div>


        <div id="getStartedSection" className='pb-2 flex justify-center'>
            <img src={DownArrow} alt="Twisted downwards arrow" />
            <div className='pl-2 pt-60'>
                <button onClick={() => navigate("/login")}
                className=' border bg-lime-green text-3xl gap-2 m-2 p-5 rounded-lg flex text-san-marino font-playfair-display h-24 sm:h-20 '
                style={{ whiteSpace: 'nowrap' }}
                >
                    Get Started <img src={RightArrow} alt="right arrow"/> </button>
            </div>
        </div>

    </section>
  )
}

export default Home
