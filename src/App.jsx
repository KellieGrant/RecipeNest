import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Favorites from './pages/FavoritesPage';
import AddRecipe from './pages/AddRecipePage';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
};

export default App;
