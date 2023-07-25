import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Home from './pages/Home';
import FormRecipe from './pages/FormRecipe';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-recipe' element={<FormRecipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
