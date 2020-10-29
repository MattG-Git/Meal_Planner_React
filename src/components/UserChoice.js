import React from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ALLRECIPES } from '../shared/allrecipes';


const UserChoice = ( {currentDay, setCurrentDay, currentProtein, setCurrentProtein} )  => {

  const allrecipes = ALLRECIPES; 

  const storeDay = (e) => {
    setCurrentDay(e.target.value);
    console.log(currentDay);    
    return currentDay;
  };

  const storeProtein = (e) => {
    setCurrentProtein(allrecipes.filter(recipe => { return recipe.type === e.target.value } )); 
    console.log(currentProtein); 
    return currentProtein; 

}; 

    return (
      <div>
      <Form>
          <FormGroup>
                <Input onChange={storeDay} type="select" name="dayofweek" id="dayofweek">
                <option defaultValue> Select A Day</option>
                <option>MONDAY</option>
                <option>TUESDAY</option>
                <option>WEDNESDAY</option>
                <option>THURSDAY</option>
                <option>FRIDAY</option>
                <option>SATURDAY</option>
                <option>SUNDAY</option>
                </Input>
                <Input onChange={storeProtein} type="select" name="proteinchoice" id="proteinchoice">
                  <option defaultValue> Select A Protein</option>
                  <option>BEEF</option>
                  <option>CHICKEN</option>
                  <option>SEAFOOD</option>
                </Input>
                <Link to="/recipeview" > 
                  <Button type="button" outline color="primary">Submit</Button>
                </Link> 
          </FormGroup>
      </Form> 
      </div>
    );
  }



export default UserChoice;