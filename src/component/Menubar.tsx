import React, { useState } from 'react';

interface MenuItem {
    label: string;
    href: string;
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo for Desktop */}
                <a href="/" className="hidden md:block">
                    <img src={logoSrcDesktop} alt={logoAltDesktop} className="h-[2vw]" />
                </a>

                {/* Logo for Mobile */}
                <a href="/" className="block md:hidden">
                    <img src={logoSrcMobile} alt={logoAltMobile} className="h-[10vw]" />
                </a>

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
                            <a
                                href={item.href}
                                className="text-[1vw] py-1 px-4 rounded-md font-bold"
                                onClick={(e) => {
                                    if (item.hasDropdown) {
                                        e.preventDefault();
                                        toggleDropdown();
                                    }
                                }}
                            >
                                {item.label}
                            </a>

                            {/* Megamenu Dropdown */}
                            {item.hasDropdown && isDropdownOpen && (
                                <div className="fixed left-0 w-full bg-white mt-2 shadow-lg shadow-stone-500">
                                    <ul className="p-2">
                                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                            <li
                                                key={dropdownIndex}
                                                className="py-1 px-4 hover:bg-[#666666] hover:translate-x-10 duration-300"
                                            >
                                                <a
                                                    href={dropdownItem.href}
                                                    className="w-full block text-gray-700 text-[1vw]"
                                                >
                                                    {dropdownItem.label}
                                                </a>
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
                                <a
                                    href={item.href}
                                    className="text-[4vw] py-3 px-4 font-bold block hover:translate-x-10 duration-500"
                                    onClick={(e) => {
                                        if (item.hasDropdown) {
                                            e.preventDefault();
                                            toggleDropdown();
                                        }
                                    }}
                                >
                                    {item.label}
                                </a>

                                {/* Megamenu Dropdown (Mobile) */}
                                {item.hasDropdown && isDropdownOpen && (
                                    <div className="w-full bg-white mt-2 shadow-lg shadow-stone-500">
                                        <ul className="p-2">
                                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                <li
                                                    key={dropdownIndex}
                                                    className="py-2 px-4 hover:bg-[#666666] duration-300"
                                                >
                                                    <a
                                                        href={dropdownItem.href}
                                                        className="block text-gray-700 text-[4vw]"
                                                    >
                                                        {dropdownItem.label}
                                                    </a>
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
