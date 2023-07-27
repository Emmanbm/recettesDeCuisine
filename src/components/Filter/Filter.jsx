import React, { useEffect, useState } from 'react';
import { useRecettesContext } from '../../context/RecettesContext';
const Filter = () => {
    const { recipesList, displayedRecipes, setDisplayedRecipes } = useRecettesContext();
    const [reversed, setReversed] = useState(false);

    useEffect(() => {
        setDisplayedRecipes([...recipesList]);
    }, [recipesList]);

    const handleChange = (e) => {
        switch (e.target.value) {
            case "+ recent":
                setDisplayedRecipes([...displayedRecipes].slice().reverse());
                setReversed(true);
                break;
            case "- récent":
                if (reversed) {
                    setDisplayedRecipes([...displayedRecipes].slice().reverse());
                    setReversed(false);
                }
                break;
            case "+ de temps de recette":
                setDisplayedRecipes([...displayedRecipes].sort((a, b) => parseInt(b.time.replace(' min', '')) - parseInt(a.time.replace(' min', ''))))
                break;
            case "- de temps de recette":
                setDisplayedRecipes([...displayedRecipes].sort((a, b) => parseInt(a.time.replace(' min', '')) - parseInt(b.time.replace(' min', ''))))
                break;
            default:
                setDisplayedRecipes([...recipesList]);
                break;
        }
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value="">Filtrer par...</option>
                <option value="+ recent">+ récent</option>
                <option value="- récent">- récent</option>
                <option value="+ de temps de recette">+ de temps de recette</option>
                <option value="- de temps de recette">- de temps de recette</option>
            </select>
        </div>
    )
}

export default Filter;