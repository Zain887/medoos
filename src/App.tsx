import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menubar from './components/commonComponents/Menubar';
import LoadingAnimation from './components/loading/LoadingAnimation';
import LandingPage from './pages/LandingPage';
import Exclusive from './pages/Exclusive';
import Store from './pages/Store';
import Business from './pages/Business';
import BlackWeeks from './pages/BlackWeeks';
import Footer from './components/commonComponents/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  // Render everything only after loading is complete
  return (
    <Router>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="fade-in">
          <Menubar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/exclusive' element={<Exclusive />} />
            <Route path='/store' element={<Store />} />
            <Route path='/business' element={<Business />} />
            <Route path='/black-weeks' element={<BlackWeeks />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
