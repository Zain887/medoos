import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
    label: string;
    to: string;
    hasDropdown?: boolean;
    dropdownItems?: MenuItem[];
}

interface Props {
    logoSrcDesktop: string;
    logoAltDesktop: string;
    logoSrcMobile: string;
    logoAltMobile: string;
    menuItems: MenuItem[];
}

const Menubar: React.FC<Props> = ({
    logoSrcDesktop,
    logoAltDesktop,
    logoSrcMobile,
    logoAltMobile,
    menuItems
}) => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null); // Track the active menu item for dropdowns

    const toggleDropdown = (index: number) => {
        if (activeMenuItem === index) {
            setActiveMenuItem(null); // Close if the same item is clicked
        } else {
            setActiveMenuItem(index); // Open the clicked dropdown
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, hasDropdown: boolean) => {
        if (hasDropdown) {
            e.preventDefault(); // Prevent the default link behavior if it has a dropdown
            toggleDropdown(index);
        } else {
            // Close dropdown if the clicked link doesn't have a dropdown
            setActiveMenuItem(null);
            setIsMobileMenuOpen(false); // Close mobile menu when any link is clicked
        }
    };

    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo for Desktop */}
                <Link to="/" className="hidden md:block">
                    <img src={logoSrcDesktop} alt={logoAltDesktop} className="h-[2vw]" />
                </Link>

                {/* Logo for Mobile */}
                <Link to="/" className="block md:hidden">
                    <img src={logoSrcMobile} alt={logoAltMobile} className="h-[10vw]" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    <svg className="h-6 w-6 stroke-current text-white" viewBox="0 0 24 24">
                        <path
                            fillRule="evenodd"
                            d="M4 5h16M4 12h16m-7 7h7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Menu Items (Desktop) */}
                <ul className={`hidden md:flex space-x-6`}>
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative hover:bg-[#666666] duration-500 rounded-md">
                            <Link
                                to={item.to}
                                className="text-[1vw] py-1 px-4 rounded-md font-bold"
                                onClick={(e) => handleLinkClick(e, index, item.hasDropdown || false)}
                            >
                                {item.label}
                            </Link>

                            {/* Megamenu Dropdown */}
                            {item.hasDropdown && activeMenuItem === index && (
                                <div className="fixed left-0 w-full bg-white mt-2 shadow-lg shadow-stone-500">
                                    <ul className="p-2">
                                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                            <li
                                                key={dropdownIndex}
                                                className="py-1 px-4 hover:bg-[#666666] hover:translate-x-10 duration-300"
                                            >
                                                <Link
                                                    to={dropdownItem.to}
                                                    className="w-full block text-gray-700 text-[1vw]"
                                                    onClick={() => {
                                                        setActiveMenuItem(null); // Close the dropdown when a link is clicked
                                                        setIsMobileMenuOpen(false); // Close mobile menu
                                                    }}
                                                >
                                                    {dropdownItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Menu Items (Mobile) */}
                {isMobileMenuOpen && (
                    <ul className="flex flex-col md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-20">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative hover:bg-[#666666] duration-500 rounded-md">
                                <Link
                                    to={item.to}
                                    className="text-[4vw] py-3 px-4 font-bold block hover:translate-x-10 duration-500"
                                    onClick={(e) => handleLinkClick(e, index, item.hasDropdown || false)}
                                >
                                    {item.label}
                                </Link>

                                {/* Megamenu Dropdown (Mobile) */}
                                {item.hasDropdown && activeMenuItem === index && (
                                    <div className="w-full bg-white mt-2 shadow-lg shadow-stone-500">
                                        <ul className="p-2">
                                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                <li
                                                    key={dropdownIndex}
                                                    className="py-2 px-4 hover:bg-[#666666] duration-300"
                                                >
                                                    <Link
                                                        to={dropdownItem.to}
                                                        className="block text-gray-700 text-[4vw]"
                                                        onClick={() => {
                                                            setActiveMenuItem(null); // Close the dropdown when a link is clicked
                                                            setIsMobileMenuOpen(false); // Close mobile menu
                                                        }}
                                                    >
                                                        {dropdownItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Menubar;
