import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavoritesContext';
import '../css/homepage.css';
import Typewriter from 'typewriter-effect';

function HomePage() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

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
            {crypto.name} ({crypto.symbol}): ${crypto.currentRate}
            <div className="button-group">
              <button onClick={() => removeFavorite(crypto)} className="remove">Remove</button>
              <Link to={`/crypto/${crypto.symbol}`}><button className="details">Details</button></Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
