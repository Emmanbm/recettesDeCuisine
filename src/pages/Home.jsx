import React from 'react';
import { useRecettesContext } from '../context/RecettesContext'
import Recette from '../components/Recette/Recette';
import '../sass/Recette.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    const { recettesList } = useRecettesContext()
    return (
        <div className="recettes">
            {
                recettesList.map((recette, i) => (
                    <Link to={`/recette/${i}`} key={i}>
                        <Recette recette={recette} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Home;
