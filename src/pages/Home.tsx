import React, { useState, useEffect } from 'react';
import Slider from '../component/Slider';

interface Props { }

const Home: React.FC<Props> = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // The words to display
    const words = ['Dining Table', 'Center Table', 'Coffee Table'];

    useEffect(() => {
        const interval = setInterval(() => {
            // Move to the next word after 1 second, and loop back after the last word
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [words.length]);

    return (
        <>
            <div className='relative w-full h-[40vw] object-cover overflow-hidden'>
                {/* Background Image */}
                <img src="/images/banner.jpg" alt="Medoos banner" className="w-full h-full object-cover" />

                {/* Words that appear in sequence */}
                <div className="absolute top-[50%] inset-0 flex justify-center items-center w-full h-fit backdrop-blur-sm ">
                    <h1 className="text-[#FFAE08] text-[4vw] font-bold fade-in">
                        {words[currentWordIndex]}
                    </h1>
                </div>

                {/* Add styles for fade-in animation */}
                <style>{`
                .fade-in {
                    animation: fadeIn 1.5s ease-in-out;
                }

                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
            `}</style>
            </div>
            <div className='my-20 text-center md:w-3/4 m-auto w-full px-5'>
                <h1 className='md:text-[4vw] text-[6vw] font-bold text-black'>
                    Welcome to Medoos Resin Art!
                </h1>
                <p className='md:text-[1.5vw] text-[3vw] mt-5 text-black'>
                    At <span className='font-bold text-[#ffae08]'>Medoos Resin Art,</span>
                    we transform imagination into art, blending craftsmanship and creativity with our signature resin pieces. From stunning
                    <span className='font-bold text-[#ffae08]'> customized resin tables</span> to
                    <span className='font-bold text-[#ffae08]'> decorative home accessories,</span> our work reflects passion, precision, and unique design.
                </p>
                <h1 className='md:text-[2vw] text-[4vw] font-bold mt-5 text-black'>
                    Our Vision
                </h1>
                <p className='md:text-[1.5vw] text-[3vw] mt-5 text-black'>
                    We believe that every space deserves a personal touch, and our resin artwork is designed to elevate and personalize your living and working spaces.
                </p>
            </div>
            <div className="my-20 text-center md:w-3/4 mx-auto w-full px-5 bg-stone-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* What We Offer Section */}
                    <div className='bg-[#ffae08] p-8 rounded-lg shadow-lg hover:scale-105 transition duration-300 transform shadow-black flex flex-col justify-center'>
                        <h1 className="text-3xl font-bold mb-6 text-black">What We Offer</h1>
                        <ul className="text-left space-y-5">
                            <li className="text-lg">
                                <span className="font-semibold text-black">Handcrafted Resin Tables:</span> Each table is a one-of-a-kind creation, custom-made with the finest materials.
                            </li>
                            <li className="text-lg">
                                <span className="font-semibold text-black">Decorative Resin Accessories:</span> Unique pieces perfect for adding a touch of elegance to your decor.
                            </li>
                            <li className="text-lg">
                                <span className="font-semibold text-black">Art Pieces:</span> Our resin art is designed to inspire and bring beauty to any environment.
                            </li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/images/diningTable/dining1.webp"
                            alt="Dining Table"
                            className="rounded-lg shadow-lg w-full h-auto object-cover transition-transform hover:scale-110 duration-300"
                        />
                    </div>

                    {/* Second Image Section */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/images/diningTable/dining2.jpeg"
                            alt="Dining Table"
                            className="rounded-lg shadow-lg w-full h-auto object-cover transition-transform hover:scale-110 duration-300"
                        />
                    </div>

                    {/* Why Choose Us Section */}
                    <div className='bg-[#ffae08] p-8 rounded-lg shadow-lg hover:scale-105 transition duration-300 transform shadow-black flex flex-col justify-center'>
                        <h1 className="text-3xl font-bold mb-6 text-black">Why Choose Us?</h1>
                        <ul className="text-left space-y-5">
                            <li className="text-lg">
                                <span className="font-semibold text-black">Custom Designs:</span> We work closely with you to create the perfect piece for your home or business.
                            </li>
                            <li className="text-lg">
                                <span className="font-semibold text-black">Exceptional Quality:</span> Each piece is crafted with premium materials and meticulous attention to detail.
                            </li>
                            <li className="text-lg">
                                <span className="font-semibold text-black">Sustainable Practices:</span> Our creations are made with eco-friendly materials, combining artistry with responsibility.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="my-20">
                <h1 className='text-black font-bold text-center text-xl'>
                    Some of Our Exectuive Products
                </h1>
                <div className='md:w-3/4 w-full px-5 overflow-x-auto m-auto my-20'>
                    <Slider/>
                </div>
            </div>

        </>
    );
};

export default Home;
