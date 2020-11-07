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
          <FormGroup className='row mt-5'>
                <Input className='col-sm-4 mr-3 mt-5 m-auto' onChange={storeDay} type="select" name="dayofweek" id="dayofweek">
                <option defaultValue> Select A Day</option>
                <option>MONDAY</option>
                <option>TUESDAY</option>
                <option>WEDNESDAY</option>
                <option>THURSDAY</option>
                <option>FRIDAY</option>
                <option>SATURDAY</option>
                <option>SUNDAY</option>
                </Input>
                <Input className='col-sm-4 m-auto' onChange={storeProtein} type="select" name="proteinchoice" id="proteinchoice">
                  <option defaultValue> Select A Protein</option>
                  <option>BEEF</option>
                  <option>CHICKEN</option>
                  <option>SEAFOOD</option>
                </Input>
          </FormGroup>
          <Link to="/recipeview" > 
              <Button className='mt-5 mb-5'type="button">Submit</Button>
          </Link> 
      </Form> 
      </div>
    );
  }



export default UserChoice;