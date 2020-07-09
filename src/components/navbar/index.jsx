import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <Link to="/" className="brand-logo left ml20">
          Clone-Trello
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/create">Создать</Link>
          </li>
          <li>
            <Link to="/list-of-board">Список таблиц</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
