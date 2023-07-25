import React, {useState, useContext} from 'react'

export const RecettesContext = React.createContext()

const RecettesProvider = ({children}) => {
	const [recettesList, setRecettesList] = useState([])

	return (
		<RecettesContext.Provider
			value={{
				recettesList,
				setRecettesList,
			}}
		>
		{children}
		</RecettesContext.Provider>
	)
}
export default RecettesProvider

export const useRecettesContext = () => {
	return useContext(RecettesContext)
}
