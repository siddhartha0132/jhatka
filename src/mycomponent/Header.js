import React from 'react';
import './Header.css'; // Create this file for styling if needed


export default function Header() {
  return (
    <div className="navbar">
        <div className='logo'> LOGO</div>
        <ul className="navbar-nav">
          <li>
            <a href="/Home" className="nav-link">Home</a>
          </li>
          <li>
          <a href="/About" className="nav-link">About-us</a>
          </li>
          <li>
          <a href="/FAQ" className="nav-link">FAQ</a>
          </li>
          <li>
          <a href="/Product" className="nav-link">Product</a>
          </li>
          <li>
          <a href="/Cart" className="nav-link">Cart</a>
          </li>
        </ul>
    </div>
 
  );
}
