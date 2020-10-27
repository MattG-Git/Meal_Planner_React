import React, { Component } from 'react';
import Calendar from './Calendar'; 
import UserChoice from './UserChoice';  


class Home extends Component {

  constructor(props) { 
    super(props); 
    this.state = { 
      plannedRecipes: [{}]
    };
  }

  render() { 
    return (
      <div className="Home">
          <h1>Weekly Meal Planner</h1>
          <Calendar plannedRecipes={this.state.plannedRecipes} /> 
          <UserChoice /> 
            
      </div> 
    );
  }
} 

  export default Home;