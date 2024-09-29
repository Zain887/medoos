import React from 'react';

interface Props {
    // Define your component props here
}

const Home: React.FC<Props> = () => {
    return (
        <div className='w-full h-[40vw] object-cover overflow-hidden'>
            <img src="/images/banner.png" alt="Medoos banner" width='auto' height='auto'/>
        </div>
    );
};

export default Home;