export const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { 
        label: 'ProductCategory', 
        href: '#', 
        hasDropdown: true, 
        dropdownItems: [
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' },
          { label: 'Support', href: '/support' }
        ]
      }
  ];