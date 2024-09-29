import React from 'react';

interface Props {
    // Define your component props here
}

const Home: React.FC<Props> = () => {
    return (
        <div>
            <h1 className='text-9xl text-red-600'>Home</h1>
        </div>
    );
};

export default Home;