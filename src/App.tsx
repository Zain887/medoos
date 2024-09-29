import './App.css';
import Footer from './component/Footer';
import Menubar from './component/Menubar';
import { menuItems } from './data';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Icons from react-icons
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import { useLocation } from 'react-router-dom';

function App() {
  const socialLinks = [
    { label: 'Facebook', to: 'https://facebook.com', icon: <FaFacebook className="h-6 w-6" /> },
    { label: 'Twitter', to: 'https://twitter.com', icon: <FaTwitter className="h-6 w-6" /> },
    { label: 'Instagram', to: 'https://instagram.com', icon: <FaInstagram className="h-6 w-6" /> }
  ];

  return (
    <Router>
      <Menubar
        menuItems={menuItems}
        logoAltDesktop='Medoos'
        logoAltMobile='Medoos'
        logoSrcDesktop='/mLogo.svg'
        logoSrcMobile='/mLogo.svg'
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductWrapper />} />
      </Routes>
      <Footer
        logoSrc="mLogo.svg"
        logoAlt="Company Logo"
        navItems={menuItems}
        socialLinks={socialLinks}
        address={
          <>
            Paradise Villas, <br /> Sua Gajjumata, Kahna Nau, Lahore
          </>
        }
        copyright="© 2024 Medoos. All rights reserved."
      />
    </Router>
  );
}

// New component to handle product page with dynamic title
const ProductWrapper = () => {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get('title') || 'Default Product Title'; // Set a default title if none found

  return <Product title={title} />;
};

export default App;
