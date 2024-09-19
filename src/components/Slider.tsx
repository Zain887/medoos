import React, { useState, useEffect } from 'react';

interface Props {
    images: { url: string; article: string }[];
}

const Slider: React.FC<Props> = (props) => {
    const { images } = props;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images]);

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className='relative'>
            {images.map((collection, index) => (
                <div className='relative' key={index}>
                    <img
                        src={collection.url}
                        alt=''
                        style={{
                            display: index === currentImageIndex ? 'block' : 'none',
                        }}
                        className='w-full min-w-[1364px] h-auto shadow-lg shadow-[#B98416] rounded-md'
                    />
                    <div
                        className='absolute bottom-0 right-0'
                        style={{
                            display: index === currentImageIndex ? 'block' : 'none',
                        }}
                    >
                        <h1
                            className='backdrop-blur-sm rounded-t-xl rounded-l-xl px-4 text-9xl font-Roboto font-extrabold bg-gradient-to-r from-[#F9DF7B] to-[#B98416] text-transparent bg-clip-text'
                        >
                            {collection.article}
                        </h1>
                    </div>
                </div>
            ))}
            <div className='flex items-center justify-center mt-5'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 mx-1 rounded-full ${index === currentImageIndex ? 'bg-[#B98416]' : 'bg-[#F9DF7B]'
                            }`}
                        onClick={() => handleDotClick(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
