import React, { useEffect, useState } from 'react';
import { useRecettesContext } from '../../context/RecettesContext';

const SearchRecipe = () => {
    const { setDisplayedRecipes, recipesList } = useRecettesContext();
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
        setDisplayedRecipes(
            [...recipesList].filter(
                recette => recette.title.toLowerCase().includes(inputSearch.toLowerCase())
            )
        );
        if (inputSearch.trim() === '') {
            setDisplayedRecipes(recipesList);
        }
    }, [inputSearch]);

    return (
        <div>
            <form>
                <input
                    type="search"
                    name="search"
                    id="search"
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                />
            </form>
        </div>
    )
}

export default SearchRecipe;