import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <Link to='/'>Home</Link>
      <Link to='/add-recipe'>Ajouter une recette</Link>
    </header>
  );
}

export default Navbar;