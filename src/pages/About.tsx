import React from 'react';

interface Props {
  // Define your component props here
}

const About: React.FC<Props> = () => {
  return (
    <div>
    <h1 className='text-9xl text-red-600'>About</h1>
    </div>
  );
};

export default About;