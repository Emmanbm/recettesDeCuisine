import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import SearchRecipe from '../SearchRecipe/SearchRecipe';
import Filter from '../Filter/Filter';

const Navbar = () => {
  const location = useLocation()
  return (
    <header>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/add-recipe'>Ajouter une recette</Link>
      </div>
      <div className='navbar-search' >
        {
          location.pathname === '/' &&
            <div className='navigation'>
              <SearchRecipe />
              <Filter />
            </div>
        }
      </div>
    </header>
  );
}

export default Navbar;