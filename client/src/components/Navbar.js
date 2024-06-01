import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
          <img src="https://framerusercontent.com/images/CbSPyXMVIfZHAkc9RBEP7XhXEw.png" alt="Link to YouTube" />
        </a>
        <Link to="/">Planets</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
