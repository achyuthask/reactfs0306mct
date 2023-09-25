import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RecipeList from './componenets/RecipeList';
import RecipeDetails from './componenets/RecipeDetails';
import Home from './componenets/Home';
import AppNavbar from './componenets/navbar';
import Errorpage from './componenets/error';

function App() {
  return (
    <div className="App">
    <AppNavbar />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/recipelist" element={<RecipeList />} />
          <Route path="/recipe/:recipeId"  element={<RecipeDetails />}/>
          <Route path="*"      element={<Errorpage /> } />
   </Routes>
    </div>
  );
}

export default App;


// <a href="http://www.101cookbooks.com "  target="_blank" class="button-link">Click me</a>