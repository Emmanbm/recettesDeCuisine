import React, { useRef, useState } from 'react'
import '../sass/FormRecipe.scss'
import { useRecettesContext } from '../context/RecettesContext';
import Ingredients from '../components/Ingredients/Ingredients';
import Tags from '../components/Tags/Tags';
import { redirect } from 'react-router-dom';
const FormRecipe = () => {
    //contexts
    const { recipesList, setRecipesList, tagsButton, setTagsButton } = useRecettesContext();

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
        setRecipesList([
            ...recipesList,
            {
                title: inputTitleRecipe,
                image: inputUrlImage,
                time: inputTimeRecipe + ' min',
                portion: inputPortionRecipe,
                difficulty: selectLvl,
                tags,
                ingredients,
                recipe: inputRecipeText.split('\n')
            }
        ]);
        setTagsButton([...tagsButton, ...tags.map(tag => tag.name)]);
        setInputIngredient('');
        setInputPortionRecipe('');
        setInputQuantity('');
        setInputRecipeText('');
        setInputTagRecipe('');
        setInputTimeRecipe('');
        setInputTitleRecipe('');
        setInputUrlImage('');
        setSelectUnit('');
        setSelectLvl('');
        setIngredients([]);
        setTags([]);
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
    const addTag = (e) => {
        setTags([
            ...tags,
            {
                name: inputTagsRecipe,
                id: Date.now()
            }
        ]);
        setInputTagRecipe('');
    }
    const addExistingTag = (e) => {
        setTags([
            ...tags,
            {
                name: e.target.childNodes[0].data,
                id: Date.now()
            }
        ]);
    }

    return (

        <div id='formRecipe'>
            <form onSubmit={handleSubmit} action={`/recette/${recipesList.length - 1}`}>
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
                        type="number"
                        placeholder='Durée de la recette(en minutes)...'
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
                            console.log(e);
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
                        min={1}
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
                        required={tags.length === 0}
                        onChange={(e) => {
                            setInputTagRecipe(e.target.value)
                        }}
                        value={inputTagsRecipe}
                    />
                    <button type='button' onClick={addTag}>Ajouter</button>
                    <div className='tagsBase'>
                        <p>Historique de tags:</p>
                        <div className='displayTags'>
                            {
                                tagsButton.map((element, index) => (
                                    <button className='tagInitial' type='button' onClick={addExistingTag} key={index}>
                                        {element}
                                    </button>
                                ))
                            }
                        </div>

                    </div>
                </div>
                {
                    tags.length > 0 &&
                    <Tags tags={tags} setTags={setTags} />
                }
                <div className='ingredient'>
                    <input
                        type="text"
                        placeholder='Ingrédient...'
                        required={ingredients.length === 0}
                        onChange={(e) => {
                            setInputIngredient(e.target.value)
                        }}
                        value={inputIngredient}
                    />
                    <input
                        type="number"
                        placeholder='Quantité...'
                        min={1}
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