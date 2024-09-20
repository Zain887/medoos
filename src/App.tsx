import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menubar from './components/commonComponents/Menubar';
import LoadingAnimation from './components/loading/LoadingAnimation';
import LandingPage from './pages/LandingPage';
import Axe from './pages/axe';
import KitchenKnives from './pages/kitchenKnives';
import HuntingKnives from './pages/huntingKnives';
import Swords from './pages/swords'
import BeautyInstrument from './pages/beautyInstruments';
import DentalInstruments from './pages/dentalInstruments';
import Footer from './components/commonComponents/Footer';
import { categories } from './data';

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
          <Menubar categories={categories}/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/swords' element={<Swords />} />
            <Route path='/kitchen Knives' element={<KitchenKnives />} />
            <Route path='/hunting knives' element={<HuntingKnives />} />
            <Route path='/beauty instruments' element={<BeautyInstrument />} />
            <Route path='/dental instruments' element={<DentalInstruments />} />
            <Route path='/axe' element={<Axe />} />
          </Routes>
          <Footer categories={categories}/>
        </div>
      )}
    </Router>
  );
}

export default App;
