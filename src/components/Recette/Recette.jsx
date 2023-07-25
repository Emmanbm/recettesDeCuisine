import React from 'react';
import '../../sass/Recette.scss';

const Recette = ({ recette }) => {
	return (
		<>
			<div className="recette"
				style={{
					backgroundImage: `url(${recette.image})`
				}}
			>
			</div>
			<div className='textRecipe'>
				<h1>{recette.title}</h1>
				<div>
					<p>Temps de preparation : {recette.time}</p>
					<p>difficulté : {recette.difficulty}</p>
				</div>
			</div>
		</>
	)
}

export default Recette
