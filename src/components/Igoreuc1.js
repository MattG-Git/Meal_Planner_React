/*import React, { Component } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import RecipeView from './RecipeView'; 

class UserChoice extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
      currentDay: 'MONDAY', 
     // currentProtein: []
    }; 

    //this.handleUserChoices = this.handleUserChoices.bind(this); 
    this.storeDay = this.storeDay.bind(this); 
    this.storeProtein = this.storeProtein.bind(this); 
  } 

storeDay(e) {
    this.setState({
      currentDay: e.target.value
    }); 
    return console.log(this.state.currentDay); 
  } 
  
storeProtein(e) {
    this.setState({ 
      currentProtein: currentProtein.push(this.props.allrecipes.filter(recipe => { return recipe.type === e.target.value }))
    }); 

   return console.log(this.state.currentProtein);
}

  render () { 

    function handleUserChoices () { 
      return ( 
        <div> 
          <RecipeView currentProtein={this.state.currentProtein} currentDay={this.state.currentDay} />
        </div>
      ); 
    } 

    return (
      <div>
      <Form onSubmit={handleUserChoices}>
          <FormGroup>
                <Input onChange={this.storeDay} type="select" name="dayofweek" id="dayofweek">
                <option defaultValue> Select A Day</option>
                <option>MONDAY</option>
                <option>TUESDAY</option>
                <option>WEDNESDAY</option>
                <option>THURSDAY</option>
                <option>FRIDAY</option>
                <option>SATURDAY</option>
                <option>SUNDAY</option>
                </Input>
                <Input onChange={this.storeProtein} type="select" name="proteinchoice" id="proteinchoice">
                  <option defaultValue> Select A Protein</option>
                  <option>BEEF</option>
                  <option>CHICKEN</option>
                  <option>SEAFOOD</option>
                </Input>
                <Button type="submit" outline color="primary">Submit</Button>
          </FormGroup>
      </Form> 
      </div>
    );
  }

}

export default UserChoice;
*/