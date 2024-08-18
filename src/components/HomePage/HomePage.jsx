import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.module.css'; // Додатково, якщо у вас є стилі для цієї сторінки

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Booking Truck</h1>
      <p>Explore our selection of campers and find the perfect one for your adventure.</p>
      <Link to="/catalog" className="catalog-link">
        <button className="catalog-button">Go to Catalog</button>
      </Link>
    </div>
  );
};

export default HomePage;