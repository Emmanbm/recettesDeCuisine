import React from 'react';
import '../../sass/recipe.scss';

const RecipeHome = ({ recipe }) => {
	return (
		<>
			<div className="recipe"
				style={{
					backgroundImage: `url(${recipe.image})`
				}}
			>
			</div>
			<div className='textRecipe'>
				<h1>{recipe.title}</h1>
				<div>
					<p>Temps de preparation : {recipe.time}</p>
					<p>difficulté : {recipe.difficulty}</p>
				</div>
			</div>
		</>
	)
}

export default RecipeHome
