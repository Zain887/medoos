export const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    {
        label: 'Products',
        to: '#',
        hasDropdown: true,
        dropdownItems: [
            { label: 'Dining Table', to: '/product?title=Dinig Table' },
            { label: 'Coffee Table', to: '/product?title=Coffee Table' },
            { label: 'Center Table', to: '/product?title=Center Table' }
        ]
    }
];