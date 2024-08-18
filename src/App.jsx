
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CatalogPage from './components/CatalogPage/CatalogPage';
import HomePage from './components/HomePage/HomePage';
// import FavoritesPage from './components/FavoritesPage/FavoritesPage';
// import NotFoundPage from './components/NotFoundPage/NotFoundPage'; // Додатково

const App = () => {
  return (
      <Router>
          <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
    </Router>
  );
};

export default App;