import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Home from './pages/Home';
import FormRecipe from './pages/FormRecipe';
import RecettesProvider from './context/RecettesContext';
import { useState } from 'react';
import { dataRecipe } from './data/dataRecette';

function App() {
  const [recettesList, setRecettesList] = useState(dataRecipe);

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
        </Routes>
      </RecettesProvider>
    </BrowserRouter>
  )
}

export default App
