import React from 'react'; 
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { BEEF } from '../shared/beef';

//will need event handler and function for click on card add to calendar

function RenderRecipe ( {recipe} ) { 

    return ( 
        <Card>
        <CardImg top width="100%" src={recipe.src} alt={recipe.name} />
        <CardBody>
          <CardTitle>{recipe.name}</CardTitle>
          <CardSubtitle>Serves:{recipe.servings}</CardSubtitle>
          <CardText>Ingredient List: {recipe.ingredients}</CardText>
          <CardText><a href={recipe.instructions}>Link to Full Recipe</a></CardText>
          <Button>Add to Calendar</Button>
        </CardBody>
      </Card>
    ); 

}


function RecipeView (props) { 

    const beef = BEEF; 

    const recipeList = beef.map(recipe => { 
        return (
            <div key={recipe.id}>
                <RenderRecipe recipe={recipe} /> 
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {recipeList}
            </div>
        </div>
    );
}

export default RecipeView; 