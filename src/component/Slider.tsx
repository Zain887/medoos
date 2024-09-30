import React, { useState, useEffect } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";


const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Dummy images for the slider
    const images = [
        '/images/coffeeTable/coffee1.webp', // Replace with actual image paths
        '/images/diningTable/dining1.webp',
        '/images/diningTable/dining2.jpeg',
    ];

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className='w-full overflow-hidden'>
            <div className='flex transition-transform duration-300' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className='min-w-full h-[300px] overflow-hidden relative'>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className='w-full h-full object-cover' // Ensures the image covers the container
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-evenly mt-4'>
                <div className='bg-black px-5 rounded-md cursor-pointer border-[#ffae08] hover:bg-white duration-150 border'>
                    <FaLongArrowAltLeft size={30} color='#ffae08' onClick={prevSlide} />
                </div>
                <div className='rotate-180 bg-black px-5 rounded-md cursor-pointer hover:bg-white border-[#ffae08] duration-150 border'>
                    <FaLongArrowAltLeft size={30} color='#ffae08' onClick={nextSlide} />
                </div>
            </div>
        </div>
    );
};

export default Slider;
