import React from 'react';
import { useRecettesContext } from '../context/RecettesContext'
import Recette from '../components/Recette/Recette';

const Home = () => {
    const { recettesList } = useRecettesContext()
    return (
        <div>
            {
                recettesList.map((recette, i) => (
                    <Recette key={i} />
                ))
            }
        </div>
    )
}

export default Home;
