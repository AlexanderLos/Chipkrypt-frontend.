import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FavoritesContext } from './FavoritesContext';
import '../css/cryptodetails.css';

const CryptoDetails = () => {
  const [coinInfo, setCoinInfo] = useState(null);
  const { symbol } = useParams();
  const navigate = useNavigate();
  const { removeFavorite } = useContext(FavoritesContext); 

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/crypto-details/${symbol}`);
        setCoinInfo(response.data);
      } catch (error) {
        console.log('Oops, error:', error);
      }
    };
    fetchCoinDetails();
  }, [symbol]);

  const handleRemoveFavorite = () => {
    removeFavorite(coinInfo);
    navigate('/');
  };

  if (!coinInfo) return <p>Loading...</p>;

  return (
    <div className="coin-details-area">
      <h1>{coinInfo.name} ({coinInfo.symbol})</h1>
      <p>Current Price: ${coinInfo.currentRate}</p>
      <button onClick={handleRemoveFavorite}>Remove From Favorites</button>
    </div>
  );
};

export default CryptoDetails;
