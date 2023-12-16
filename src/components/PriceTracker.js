import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FavoritesContext } from './FavoritesContext';
import '../css/pricetracker.css';

function PriceTracker() {
  const [cryptos, setCryptos] = useState([]);
  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    axios.get('https://chipkrypt-678f16414a28.herokuapp.com/currencies')
      .then(response => {
        setCryptos(response.data.data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Crypto Prices</h2>
      <ul>
        {cryptos.map(crypto => (
          <li key={crypto.id}>
            {crypto.name} ({crypto.symbol}): ${crypto.quote.USD.price.toFixed(2)}
            <button onClick={() => addFavorite(crypto)}>Favorite</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriceTracker;
