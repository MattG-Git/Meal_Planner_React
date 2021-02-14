import React from 'react'; 
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row
  } from 'reactstrap';
import { Link } from 'react-router-dom'; 



const RenderRecipe = ( {recipe, currentDay, setPlannedRecipes, plannedRecipes} ) => { 

    const storeRecipe = () => { 

        setPlannedRecipes([
            ...plannedRecipes, 
            { day: currentDay, choice: recipe.name, link: recipe.instructions}
            ]);
            console.log(plannedRecipes);
             

    };

    return ( 
        <Container>
                <Card>
                <Row className="justify-content-center">
                    <CardImg style={{maxHeight:"375px", maxWidth:"375px"}} src={recipe.image} alt={recipe.name} />
                    <CardBody>
                    <CardTitle className='recipename'>{recipe.name}</CardTitle>
                    <CardSubtitle>Serves:{recipe.servings}</CardSubtitle>
                    <CardText>Ingredient List: {recipe.ingredients}</CardText>
                    <CardText><a href={recipe.instructions}>Link to Full Recipe</a></CardText>
                    <Link to="/userchoice">
                        <Button onClick={storeRecipe} >Add to Calendar</Button>
                    </Link>
                    </CardBody>
                    </Row>
                </Card>
      </Container>
    ); 

}

const RecipeView = ( {currentDay, setCurrentDay, currentProtein, setCurrentProtein, plannedRecipes, setPlannedRecipes } ) => { 

const recipeList = currentProtein.map(recipe => { 
        return (  
            <div key={recipe.id}>
                <RenderRecipe currentDay={currentDay} setPlannedRecipes={setPlannedRecipes} plannedRecipes={plannedRecipes} recipe={recipe} /> 
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