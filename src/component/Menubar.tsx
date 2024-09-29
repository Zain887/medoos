import React, { useState } from 'react';

interface MenuItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: MenuItem[];
}

interface Props {
    logoSrc: string;
    logoAlt: string;
    menuItems: MenuItem[];
}

const Menubar: React.FC<Props> = ({ logoSrc, logoAlt, menuItems }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="/">
                    <img src={logoSrc} alt={logoAlt} className="h-[2vw]" />
                </a>

                {/* Menu Items */}
                <ul className="flex space-x-6 text-gray-800">
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative">
                            <a
                                href={item.href}
                                className="hover:text-gray-600"
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
                                // <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                                <div className="fixed left-0 w-full bg-white mt-2 shadow-lg shadow-stone-500">
                                    <ul className="p-2">
                                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                            <li key={dropdownIndex} className="py-2 px-4 hover:bg-gray-100">
                                                <a href={dropdownItem.href} className="block text-gray-700">
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
            </div>
        </nav>
    );
};

export default Menubar;
