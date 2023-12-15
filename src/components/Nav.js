import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../css/nav.css';

function Nav() {
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-right">
        <Link to="/news">News</Link>
        <Link to="/swap">Swap</Link>
        <Link to="/price-tracker">Price Tracker</Link>
        {currentUser ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
