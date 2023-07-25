import React, { useState } from 'react'
import '../sass/FormRecipe.scss'
import { useRecettesContext } from '../context/RecettesContext';
import Ingredients from '../components/Ingredients/Ingredients';
import Tags from '../components/Tags/Tags';
const FormRecipe = () => {
    //contexts
    const { recettesList, setRecettesList } = useRecettesContext();
    //ingredients
    const [ingredients, setIngredients] = useState([]);
    //tags
    const [tags, setTags] = useState([]);

    //variables du formulaire  
    const [inputTitleRecipe, setInputTitleRecipe] = useState('');
    const [inputTimeRecipe, setInputTimeRecipe] = useState('');
    const [inputUrlImage, setInputUrlImage] = useState('');
    const [inputRecipeText, setInputRecipeText] = useState('');
    const [selectLvl, setSelectLvl] = useState('');
    const [inputPortionRecipe, setInputPortionRecipe] = useState('');
    const [inputTagsRecipe, setInputTagRecipe] = useState('');
    const [inputIngredient, setInputIngredient] = useState('');
    const [inputQuantity, setInputQuantity] = useState('');
    const [selectUnit, setSelectUnit] = useState('');

    // fonction pour soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        setRecettesList([
            ...recettesList,
            {
                title: inputTitleRecipe,
                image: inputUrlImage,
                time: inputTimeRecipe,
                portion: inputPortionRecipe,
                difficulty: selectLvl,
                tags,
                ingredients,
                recipe: inputRecipeText
            }
        ])
    }

    const addIngredient = () => {
        setIngredients([
            ...ingredients,
            {
                name: inputIngredient,
                amount: inputQuantity,
                unit: selectUnit,
                id: Date.now()
            }
        ]);
        setInputIngredient('')
        setInputQuantity('')
        setSelectUnit('')
    }
    const addTag = () => {
        setTags([
            ...tags,
            {
                name: inputTagsRecipe,
                id: Date.now()
            }
        ]);
        setInputTagRecipe('');
    }

    return (
        <div id='formRecipe'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder='Nom de la recette...'
                        required
                        onChange={(e) => {
                            setInputTitleRecipe(e.target.value)
                        }}
                        value={inputTitleRecipe}
                    />
                </div>
                <div>
                    <textarea
                        placeholder='Veuillez écrire la recette détaillée...'
                        onChange={(e) => {
                            setInputRecipeText(e.target.value)
                        }}
                        value={inputRecipeText}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="URL de l'image..."
                        required
                        onChange={(e) => {
                            setInputUrlImage(e.target.value)
                        }}
                        value={inputUrlImage}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Durée de la recette...'
                        required
                        onChange={(e) => {
                            setInputTimeRecipe(e.target.value)
                        }}
                        value={inputTimeRecipe}
                    />
                </div>
                <div>
                    <select
                        name='difficulty'
                        id='difficulty'
                        onChange={(e) => {
                            setSelectLvl(e.target.value);
                        }}
                        value={selectLvl}
                    >
                        <option value=''>Difficulté</option>
                        <option value='easy'>Facile</option>
                        <option value='medium'>Moyen</option>
                        <option value='hard'>Difficile</option>
                    </select>
                </div>
                <div>
                    <input
                        type="number"
                        placeholder='Portion...'
                        onChange={(e) => {
                            setInputPortionRecipe(e.target.value)
                        }}
                        value={inputPortionRecipe}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Tags...'
                        onChange={(e) => {
                            setInputTagRecipe(e.target.value)
                        }}
                        value={inputTagsRecipe}
                    />
                    <button type='button' onClick={addTag}>Ajouter</button>
                </div>
                {
                    tags.length > 0 &&
                    <Tags tags={tags} setTags={setTags} />
                }
                <div className='ingredient'>
                    <input
                        type="text"
                        placeholder='Ingrédient...'
                        onChange={(e) => {
                            setInputIngredient(e.target.value)
                        }}
                        value={inputIngredient}
                    />
                    <input
                        type="number"
                        placeholder='Quantité...'
                        onChange={(e) => {
                            setInputQuantity(e.target.value)
                        }}
                        value={inputQuantity}
                    />
                    <div>
                        <select
                            name="unit"
                            id="unit"
                            onChange={(e) => {
                                setSelectUnit(e.target.value)
                            }}
                            value={selectUnit}
                        >
                            <option value="">Unité</option>
                            <option value="milligrammes">mg</option>
                            <option value="grammes">g</option>
                            <option value="kilogrammes">kg</option>
                            <option value="millilitres">ml</option>
                            <option value="centilitres">cl</option>
                            <option value="litres">l</option>
                            <option value="cuillère à soupe">càs</option>
                            <option value="cuillère à café">càc</option>
                        </select>
                        <button type='button' onClick={addIngredient}>Ajouter</button>
                    </div>
                </div>
                {
                    ingredients.length > 0 &&
                    <Ingredients ingredients={ingredients} setIngredients={setIngredients} />
                }
                <button type='submit'>Valider</button>
            </form>
        </div>
    )
}

export default FormRecipe;