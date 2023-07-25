import Ingredient from './Ingredient';
import './Ingredients.scss';

const Ingredients = ({ ingredients, setIngredients }) => {
    return (
        <div className='ingredients-container'>
            <div className='ingredientList border'>
                <div>Nom</div>
                <div>Quantité</div>
                <div>Unité</div>
            </div>
            {
                ingredients.map((ingredient, index) => (
                    <Ingredient
                        ingredient={ingredient}
                        ingredients={ingredients}
                        setIngredients={setIngredients}
                        key={index}
                    />
                ))
            }
        </div>
    )
}

export default Ingredients;