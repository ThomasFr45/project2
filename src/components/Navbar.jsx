import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Cocktails</Link>
        </li>
        <li>
          <Link to="/Favoris">Favoris</Link>
        </li>
        <li>
          <img src="https://i.imgur.com/ivFXOin.png" alt="" />
        </li>
        <li>
          <Link to="/Recherche">Recherche</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
