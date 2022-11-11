import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="panel">
    <div>
      <div className="left">
        <h1 className="logo">Bookstore CMS</h1>
        <nav>
          <ul className="nav-links links">
            <li>
              <Link className="active-link nav-link" to="/">BOOKS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div className="user-icon">
      <span className="material-icons material-symbols-rounded">person</span>
    </div>
  </header>
);

export default Header;
