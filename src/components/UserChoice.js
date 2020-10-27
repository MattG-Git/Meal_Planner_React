import React from 'react';
import {Form, FormGroup, Button, Input, Label} from 'reactstrap';

function UserChoice(props) {

  let dayOfWeek = 'MONDAY'; 
  let proteinChoice = 'BEEF'; 
  
  
  const storeDay = (e) => {
      dayOfWeek = e.target.value; 
      console.log(dayOfWeek); 
      return dayOfWeek; 

  }; 

  const storeProtein = (e) => {
    proteinChoice = e.target.value; 
    console.log(proteinChoice); 
    return proteinChoice; 

}; 

  const handleUserChoices = () => { 
  

  }; 

    return (
      <Form onSubmit={handleUserChoices}>
          <FormGroup>
                <Input onChange={storeDay} type="select" name="dayofweek" id="dayofweek">
                <option disabled selected> Select A Day</option>
                <option>MONDAY</option>
                <option>TUESDAY</option>
                <option>WEDNESDAY</option>
                <option>THURSDAY</option>
                <option>FRIDAY</option>
                <option>SATURDAY</option>
                <option>SUNDAY</option>
                </Input>
                <Input onChange={storeProtein} type="select" name="proteinchoice" id="proteinchoice">
                  <option disabled selected> Select A Protein</option>
                  <option>BEEF</option>
                  <option>CHICKEN</option>
                  <option>PORK</option>
                  <option>SEAFOOD</option>
                  <option>VEGETARIAN</option>
                </Input>
                <Button type="submit" outline color="primary">Submit</Button>
          </FormGroup>
      </Form>
    );
  }

export default UserChoice;