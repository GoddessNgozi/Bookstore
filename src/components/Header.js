import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <div className='left'>
          <h1>Bookstore CMS</h1>
          <nav>
          <ul className='links'>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
          </nav>
        </div>
      </div>

      <div>
        <span className="material-symbols-rounded">person</span>
      </div>
    </header>
  );
}

export default Header;