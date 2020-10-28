import React, { Component } from 'react';
import Calendar from './Calendar'; 
import UserChoice from './UserChoice'; 
import RecipeView from './RecipeView'; 
import { ALLRECIPES } from '../shared/allrecipes';


class Home extends Component {

  constructor(props) { 
    super(props); 
    this.state = { 
      allrecipes: ALLRECIPES, 
      plannedRecipes: [{}]
    };
  }

  render() { 
    return (
      <div className="Home">
          <h1>Weekly Meal Planner</h1>
          <Calendar plannedRecipes={this.state.plannedRecipes} /> 
          <UserChoice allrecipes={this.state.allrecipes} />       
      </div> 
    );
  }
} 

  export default Home;