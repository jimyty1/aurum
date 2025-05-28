
// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ShopPage from './pages/ShopPage';
import './App.css';
import JournalPage from "./pages/JournalPage";
import GarmentPage from "./pages/GarmentPage";
import Footer from './components/Footer';
import JournalDetailPage from "./pages/JournalDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/Journal" element={<JournalPage />} />
          <Route path="/garment/:id" element={<GarmentPage />} />
          <Route path="/journal/:id" element={<JournalDetailPage />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


