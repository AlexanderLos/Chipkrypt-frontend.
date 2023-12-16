import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FavoritesContext } from './FavoritesContext';
import '../css/cryptodetails.css';

const CryptoDetails = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const coinInfo = favorites.find(crypto => crypto.symbol === symbol);

  const handleRemoveFavorite = () => {
    removeFavorite(coinInfo);
    navigate('/');
  };

  if (!coinInfo) return <p>Loading...</p>;

  return (
    <div className="coin-details-area">
      <h1>{coinInfo.name} ({coinInfo.symbol})</h1>
      <p>Current Price: ${coinInfo.quote.USD.price.toFixed(2)}</p>
      <button onClick={handleRemoveFavorite}>Remove From Favorites</button>
    </div>
  );
};

export default CryptoDetails;
