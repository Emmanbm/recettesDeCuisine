import React from 'react';

const Ingredient = ({ ingredient, ingredients, setIngredients }) => {
    const handleClick = () => {
        setIngredients(ingredients.filter(element => element.id !== ingredient.id));
    }
    return (
        <div className='ingredientList'>
            <div>{ingredient.name}</div>
            <div>{ingredient.amount}</div>
            <div>{ingredient.unit}</div>
            <button type='button' onClick={handleClick}>x</button>
        </div>
    )
}

export default Ingredient;