import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/search?q=${search}`
        );
        setRecipes(response.data.recipes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      }
    };

    if (search !== "") {
      fetchRecipes();
    }
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="recipe">
    <h2 >Search Recipes With
     <span style={{color: " rgb(255, 51, 51)"}}>Talivar</span></h2>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={search}
        onChange={handleSearchChange}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
          {recipes.map((recipe) => (
            <div key={recipe.recipe_id} >
          
              
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.image_url} height='170'/>
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text  variant="success">
          <span style={{color: " rgb(255, 51, 51)",fo: "bold"}}>{recipe.publisher}</span>
        </Card.Text>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
        <Link to={`/recipe/${recipe.recipe_id}`}>
        <Button variant="primary">Deatails</Button>
              </Link>
              <a href= {recipe.source_url} target="_blank" class="button-link" alt=" "><Button variant="success">Recipe url</Button></a>
        </div>
      </Card.Body>
    </Card>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;


