import React, { Component } from 'react';
import { BEEF } from '../shared/beef';
import { CHICKEN } from '../shared/chicken';
import { SEAFOOD } from '../shared/seafood';
import Calendar from './Calendar'; 
import UserChoice from './UserChoice'; 
import RecipeView from './RecipeView'; 

class Home extends Component {

  constructor(props) { 
    super(props); 
    this.state = {  
      currentDay: '', 
      currentProtein: '', 
      plannedRecipes: [{}]
    };
  }


  render() { 


    return (
      <div className="Home">
          <h1>Weekly Meal Planner</h1>
          <Calendar plannedRecipes={this.state.plannedRecipes} /> 
          <UserChoice currentProtein={this.state.currentProtein} currentDay={this.state.currentDay} /> 
          <RecipeView currentProtein={this.state.currentProtein} currentDay={this.state.currentDay} plannedRecipes={this.state.plannedRecipes} />   
      </div>
    
    );

  }
} 

  export default Home;