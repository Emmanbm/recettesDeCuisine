import React, { useEffect } from 'react'
import { useRecettesContext } from '../context/RecettesContext';
import { useParams } from 'react-router-dom';

const Amount = ({amount, setAmount}) => {
	const { recipesList } = useRecettesContext();
	const { id } = useParams();
	const recipe = recipesList[id];

	useEffect(() => {
		setAmount(recipe.portion);
	}, []);
	
	return (
		<form>
			<input
				type="number"
				min={1}
				onChange={(e) => {
					setAmount(e.target.value)
				}}
				value={amount}
			/>
		</form>
	)
}

export default Amount
