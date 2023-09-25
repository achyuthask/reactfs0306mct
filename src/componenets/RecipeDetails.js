import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";

function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
        );
        setRecipe(response.data.recipe);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
        <div style={{display:"flex",flexWrap:"wrap",alignSelf:"flex-start"}}>       
         <Link to='/recipelist'>
          <Button variant="success">recipesearch</Button>
          </Link>
          </div>
        <div style={{display:"flex",flexWrap:"wrap",marginLeft:"10%"}}>
        <div>
         
          <img src={recipe.image_url} alt=" " height='500'/>
          </div>
          <div>
          <h2><span style={{color: " rgb(255, 51, 51)",fontWeight: "bold"}}>{recipe.title}</span></h2>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between", marginLeft:"10%", marginRight:"10%"}}>
          <a href= {recipe.publisher_url} target="_blank" class="button-link" alt=" "><Button variant="warning">Publisher</Button></a>
         
          <a href= {recipe.source_url} target="_blank" class="button-link" alt=" "><Button variant="info">Recipe url</Button></a>
          </div>
          
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index}>
              <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{ingredient}</ListGroup.Item>
        
      </ListGroup>
    </Card>
    </div>
            ))}
          </ul>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;




