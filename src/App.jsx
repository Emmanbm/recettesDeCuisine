import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Home from './pages/Home';
import FormRecipe from './pages/FormRecipe';
import Recipe from './pages/Recipe';
import PageError from './pages/PageError';
import RecettesProvider from './context/RecettesContext';
import { useState } from 'react';
import dataRecipe from '../src/data/dataRecipe.json';


function App() {
  const [recipesList, setRecipesList] = useState(dataRecipe.data);
  const [displayedRecipes, setDisplayedRecipes] = useState(recipesList);
  const [tagsButton, setTagsButton] = useState(['Japonais', 'Sushi']);

  return (
    <BrowserRouter>
      <RecettesProvider
        value={{
          recipesList,
          setRecipesList,
          displayedRecipes,
          setDisplayedRecipes,
          tagsButton,
          setTagsButton
        }}
      >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-recipe' element={<FormRecipe />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/*" element={<PageError />} />
        </Routes>
      </RecettesProvider>
    </BrowserRouter>
  )
}

export default App
