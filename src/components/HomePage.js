import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';
import { useNavigate } from 'react-router-dom'; 
import '../css/homepage.css';
import Typewriter from 'typewriter-effect';

function HomePage() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const navigate = useNavigate(); 

  const navigateToDetails = (symbol) => {
    navigate(`/crypto/${symbol}`); 
  };

  return (
    <div className="home-container">
      <h1>
        <Typewriter
          options={{
            strings: ['ChipKrypt.'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <ul className="favorites-list">
        {favorites.map((crypto, index) => (
          <li key={`${crypto.id}-${index}`}>
            <div onClick={() => navigateToDetails(crypto.symbol)} style={{ cursor: 'pointer' }}>
              {crypto.name} ({crypto.symbol}): ${crypto.currentRate}
            </div>
            <div className="button-group">
              <button onClick={() => removeFavorite(crypto)} className="remove">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
