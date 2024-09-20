import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='w-full h-20 bg-cover py-16 mt-20' style={{ boxShadow: '0 -8px 6px -6px white' }}>
      <div className='flex justify-evenly items-start'>
        <img src="/logo.svg" alt="sheesh" className='w-48 h-auto' />
        <ul className='text-[#f9df7b]'>
          <li>Schmidt Innovations GmbH</li>
          <li>Im Aller 3</li>
          <li>97816 Lohr am Main</li>
        </ul>
        <ul className='text-[#f9df7b]'>
          <li><a href="/">
            Discover
          </a>
          </li>
          <li><a href="/exclusive">
            Exclusive
          </a>
          </li>
          <li><a href="/store">
            Store
          </a>
          </li>
          <li><a href="/business">
            Business
          </a>
          </li>
          <li><a href="/blackWeeks">
            Black Weeks
          </a>
          </li>
        </ul>
        <ul className='text-[#f9df7b]'>
          <li>GTC</li>
          <li>Shipping</li>
          <li>Withdrawal</li>
          <li>Payment</li>
        </ul>
      </div>
      <center className='text-[#f9df7b] pt-2 pb-5'>© 2023 Sheesh Hookas. All rights reserved</center>
    </footer>

  );
};

export default Footer;