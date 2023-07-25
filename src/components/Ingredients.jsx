import React, { useState } from 'react'

const Ingredients = ({ ingredients, setIngredients }) => {
    const handleClick = (e) => {
        console.log(e);
    }
    return (
        <div>
            {
                ingredients.map((ingredient, index) => (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
                        <div>{ingredient.amount}</div>
                        {
                            (ingredient.unit.trim() !== '') &&
                            <div>{ingredient.unit} de</div>
                        }
                        <div>{ingredient.name}</div>
                        <button onClick={handleClick}>Supprimer</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Ingredients;