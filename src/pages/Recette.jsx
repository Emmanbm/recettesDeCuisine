import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecettesContext } from '../context/RecettesContext';
import '../sass/pageRecette.scss';

const Recette = () => {
    const { id } = useParams();
    const { recettesList } = useRecettesContext();
    const recette = recettesList[id];
    return (
        <div id='pageRecipe'>
            <h1>{recette.title}</h1>
            <div className='gridRecette'>
                <div>
                    <img src={recette.image} alt={recette.title} />
                </div>
                <div className='list-ingredients'>
                    <div className='displayRecipe' id='titleRecipe'>
                        <div>Nom</div>
                        <div>Quantité</div>
                        <div>Unité</div>
                    </div>
                    {
                        recette.ingredients.map((element, index) => (
                            <div key={index} className='displayRecipe'>
                                <div>{element.name}</div>
                                <div>{element.amount}</div>
                                <div>{element.unit}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <ol>
                {
                    recette.recipe.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Recette;