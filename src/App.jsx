import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Home from './pages/Home';
import FormRecipe from './pages/FormRecipe';
import RecettesProvider from './context/RecettesContext';
import { useState } from 'react';
// import { dataRecipe } from './data/dataRecette';
import dataRecettes from '../src/data/dataRecette.json';
import Recette from './pages/Recette';

function App() {
  const [recettesList, setRecettesList] = useState(dataRecettes.data);

  return (
    <BrowserRouter>
      <Navbar />
      <RecettesProvider
        value={{
          recettesList,
          setRecettesList
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-recipe' element={<FormRecipe />} />
          <Route path="/recette/:id" element={<Recette />} />
        </Routes>
      </RecettesProvider>
    </BrowserRouter>
  )
}

export default App
