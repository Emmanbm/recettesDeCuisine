import React from 'react'
import '../../sass/formRecipe.scss'
const FormRecipe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div id='formRecipe'>
            <form>
                <div>
                    <input type="text" placeholder='Nom de la recette...' />
                </div>
                <div>
                    <textarea placeholder='Veuillez écrire la recette détaillée...' />
                </div>
                <div>
                    <input type="text" placeholder="URL de l'image..." />
                </div>
                <div>
                    <input type="text" placeholder='Durée de la recette...' />
                </div>
                <div>
                    <select name='difficulty' id='difficulty'>
                        <option value=''>Difficulté</option>
                        <option value='easy'>Facile</option>
                        <option value='medium'>Moyen</option>
                        <option value='hard'>Difficile</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder='Portion...' />
                </div>
                <div>
                    <input type="text" placeholder='Tags...' />
                </div>
                <div className='ingredient'>
                    <input type="text" placeholder='Ingrédient...' />
                    <input type="text" placeholder='Quantité...' />
                    <div>
                        <select name="unit" id="unit">
                            <option value="">unité</option>
                            <option value="milligrammes">mg</option>
                            <option value="grammes">g</option>
                            <option value="kilogrammes">kg</option>
                            <option value="millilitres">ml</option>
                            <option value="centilitres">cl</option>
                            <option value="litres">l</option>
                        </select>
                        <button type='button'>Ajouter</button>
                    </div>
                </div>
                <button type='submit'>Valider</button>
            </form>
        </div>
    )
}

export default FormRecipe;