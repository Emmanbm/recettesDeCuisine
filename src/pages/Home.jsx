import React from 'react';
import RecettesProvider from '../context/recettesContext';

const Home = () => {
    return (
        <RecettesProvider>
            <h1>home</h1>
        </RecettesProvider>
    )
}

export default Home;
