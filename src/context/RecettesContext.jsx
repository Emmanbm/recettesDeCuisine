import React, { useContext } from 'react'

export const RecettesContext = React.createContext();

const RecettesProvider = ({ value, children }) => {

	return (
		<RecettesContext.Provider
			value={...value}
		>
			{children}
		</RecettesContext.Provider>
	)
}

export default RecettesProvider;

export const useRecettesContext = () => {
	return useContext(RecettesContext);
}
