import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecettesContext } from '../context/RecettesContext';
import '../sass/pageRecipe.scss';
import Amount from '../components/Amount';

const Recipe = () => {
    const { id } = useParams();
    const { recipesList } = useRecettesContext();
    const [amount, setAmount] = useState(1);
    const [recipe, setRecipe] = useState(recipesList[id]);
    const [ingredients,] = useState([...recipe.ingredients]);
    useEffect(() => {
        setRecipe({
            ...recipe,
            ingredients: [
                ...recipe.ingredients.map((element, index) => {
                    return {
                        ...element,
                        amount: ((ingredients[index].amount / recipe.portion) * amount).toFixed()
                    }
                })
            ]
        })
    }, [amount]);

    return (
        <div id='pageRecipe'>
            <h1>{recipe.title}</h1>
            <h2>Pour {amount} personnes</h2>
            <div className='gridRecette'>
                <div>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className='list-ingredients'>
                    <div className='displayRecipe' id='titleRecipe'>
                        <div>Nom</div>
                        <div>Quantité</div>
                        <div>Unité</div>
                    </div>
                    {
                        recipe.ingredients.map((element, index) => (
                            <div key={index} className='displayRecipe'>
                                <div>{element.name}</div>
                                <div>{element.amount < 1 ? 1 : element.amount}</div>
                                <div>{element.unit}</div>
                            </div>
                        ))
                    }
                    <Amount amount={amount} setAmount={setAmount} />
                </div>
            </div>
            <ol>
                {
                    recipe.recipe.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Recipe;