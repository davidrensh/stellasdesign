// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import PhotoAlbum from './pages/PhotoAlbum';
import Services from './pages/Services';
import AppointmentForm from './pages/AppointmentForm';
import ContactUs from './pages/ContactUs'; // The new Contact Us page component
import './components/Header.css'
import AboutStella from './pages/AboutStella';

// initializeIcons(); // Initialize Fluent UI icons

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo-album" element={<PhotoAlbum />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<AppointmentForm />} />
        <Route path="/about-stella" element={<AboutStella />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
