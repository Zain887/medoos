import React from 'react';

interface Props {
    title: string
}

const Product: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <h1 className='text-2xl text-center text-red-600'>
                {title || 'Default Product Title'}
            </h1>
        </div>
    );
};

export default Product;