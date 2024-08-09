import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">DEV@Deakin</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Post</button>
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;

