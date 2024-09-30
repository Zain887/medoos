import React from 'react';
import { Link } from 'react-router-dom';

interface SocialLink {
    label: string;
    to: string;
    icon: React.ReactNode; // icon can be any JSX element
}

interface NavItem {
    label: string;
    to: string;
}

interface Props {
    logoSrc: string;
    logoAlt: string;
    navItems: NavItem[];
    socialLinks: SocialLink[];
    address: React.ReactNode;
    copyright: string;
}

const Footer: React.FC<Props> = ({ logoSrc, logoAlt, navItems, socialLinks, address, copyright }) => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & Address */}
                <div className='text-center text-[#FFAE08]'>
                    <img src={logoSrc} alt={logoAlt} className="m-auto bg-white rounded-md h-16 mb-4" />
                    <p>{address}</p>
                </div>

                {/* Navigation Links */}
                <div className='text-center'>
                    <h3 className="text-lg font-bold mb-4 text-[#FFAE08]">Quick Links</h3>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="mb-2">
                                <Link to={item.to} className="hover:text-gray-400">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className='text-center'>
                    <h3 className="text-lg font-bold mb-4 text-[#FFAE08]">Follow Us</h3>
                    <ul className="flex space-x-4 justify-center">
                        {socialLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.to} className="hover:text-gray-400" aria-label={link.label}>
                                    {link.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 text-center border-t border-gray-700 pt-4">
                <p className="text-sm">{copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
