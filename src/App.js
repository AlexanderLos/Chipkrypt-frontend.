import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './components/FavoritesContext';
import { AuthProvider, useAuth } from './components/AuthContext';
import Login from './components/Login';
import HomePage from './components/HomePage';
import PriceTracker from './components/PriceTracker';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import Swap from './components/Swap';
import Nav from './components/Nav';
import './css/App.css';

const AppContent = () => {
  const { currentUser } = useAuth();

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/price-tracker" element={currentUser ? <PriceTracker /> : <Login />} />
        <Route path="/crypto/:symbol" element={currentUser ? <CryptoDetails /> : <Login />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <FavoritesProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </FavoritesProvider>
  );
}

export default App;