import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Menubar from './components/commonComponents/Menubar';
import LoadingAnimation from './components/loading/LoadingAnimation';
import Footer from './components/commonComponents/Footer';
import { getCategories, getHeaderImages } from './data'; // Importing data functions
import CategoryPage from './components/commonComponents/CategoryPage'; // Reusable component
import LandingPage from './pages/LandingPage';

function App() {
  const [loading, setLoading] = useState(true);
  const categories = getCategories(); // Fetching categories
  const headerImages = getHeaderImages(); // Fetching header images

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="fade-in">
          <Menubar categories={categories} />
          <Routes>
            <Route
              path="/"
              element={<LandingPage />} // Landing page defaults to the first category
            />
            {categories.map((category) => (
              <Route
                key={category.id}
                path={`/${category.name}`} // Creating dynamic routes based on category names
                element={<CategoryPage selectedCategory={category} headerImages={headerImages} />}
              />
            ))}
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirects any unknown path to the landing page */}
          </Routes>
          <Footer categories={categories} />
        </div>
      )}
    </Router>
  );
}

export default App;
