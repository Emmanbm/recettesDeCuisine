import React, { useState } from 'react';
import { useRecettesContext } from '../context/RecettesContext'
import '../sass/recipe.scss';
import { Link } from 'react-router-dom';
import RecipeHome from '../components/Recipe/RecipeHome';

const Home = () => {
    const { displayedRecipes } = useRecettesContext();
    return (
        <div className="recipes">
            {
                displayedRecipes.map((recipe, i) => (
                    <Link to={`/recipe/${i}`} key={i}>
                        <RecipeHome recipe={recipe} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Home;
