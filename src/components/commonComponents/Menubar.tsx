import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiLogoTiktok } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

interface Props {
    // Define your component props here
}

const Menubar: React.FC<Props> = () => {
    // Define your menu items
    const menuItems = [
        { label: 'Product1', link: '/' },
        { label: 'Product1', link: '/exclusive' },
        { label: 'Product1', link: '/store' },
        { label: 'Product1', link: '/business' },
        { label: 'Product1', link: '/black-weeks' },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <nav className="flex items-center px-10 py-3 justify-between fixed z-10 top-0 backdrop-blur-md w-full bg-[#000000b5]">
            <NavLink to="/" className="w-52 h-auto">
                <img src="public/logo.svg" alt="predatorCut" width={'80%'} height={'80%'} />
            </NavLink>
            <div className="w-full flex justify-center gap-24">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.link}
                        className={`text-[#666666] font-Roboto text-md cursor-pointer ${index === activeIndex
                            ? 'px-2 py-1 font-bold rounded-md bg-white'
                            : 'border-b-2 px-2 py-1 border-transparent hover:border-white hover:font-bold  transition-border duration-300'
                            }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
            <div className='flex items-center justify-evenly'>
                <a href="/">
                    <BiLogoTiktok color='white' className='mr-2 animation-loop hover:scale-125' size={20} />
                </a>
                <a href="https://www.facebook.com/sheesh.hookahs?mibextid=LQQJ4d">
                    <FaFacebook color="white" className='mr-2 animation-loop hover:scale-125' size={20} />
                </a>
                <a href="https://wa.me/971502237203">
                    <IoLogoWhatsapp color="white" className='mr-2 animation-loop hover:scale-125' size={20} />
                </a>
                <a href="https://www.instagram.com/sheesh.hookahs/">
                    <AiFillInstagram color="white" className='mr-2 animation-loop hover:scale-125' size={20} />
                </a>
            </div>
            <NavLink
                to="/order-now"
                className="text-[#666666] w-36 font-bold text-center bg-white py-1 rounded-md shadow-sm shadow-[white] animation-loop"
            >
                Order Now
            </NavLink>
        </nav>
    );
};

export default Menubar;
