import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {FavoritesContext} from './FavoritesContext';
import '../css/pricetracker.css'

function PriceTracker() {
  const [cryptos, setCryptos] = useState([]);
  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    async function getCryptoData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/currencies/');
        setCryptos(response.data);
      } catch (error) {
        console.log('Error getting data', error);
      }
    };

    getCryptoData();
  }, []);

  return (
    <div className="crypto-list">
      <h1>Cryptocurrency Prices</h1>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id}>
            {crypto.name} ({crypto.symbol}): ${crypto.currentRate}
            <button onClick={() => addFavorite(crypto)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriceTracker;
