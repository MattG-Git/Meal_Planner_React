import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Calendar from './Calendar'; 
import UserChoice from './UserChoice'; 
import RecipeView from './RecipeView'; 
import { ALLRECIPES } from '../shared/allrecipes';



const Home = () => {

 const [plannedRecipes, setPlannedRecipes] = useState([{}]);
 const [currentDay, setCurrentDay] = useState(""); 
 const [currentProtein, setCurrentProtein] = useState([]);

    return (
      <div className="Home">
          <h1>Weekly Meal Planner</h1>
          <Switch> 
          <Route path="/calender" render={ () => <Calendar currentDay={currentDay} setCurrentDay={setCurrentDay} currentProtein={currentProtein} setCurrentProtein={setCurrentProtein} setPlannedRecipes={setPlannedRecipes} plannedRecipes={plannedRecipes}/>} /> 
            <Route path="/userchoice" render={ () => <UserChoice currentDay={currentDay} setCurrentDay={setCurrentDay} currentProtein={currentProtein} setCurrentProtein={setCurrentProtein} setPlannedRecipes={setPlannedRecipes} plannedRecipes={plannedRecipes} />} />  
            <Route path="/recipeview" render={ () => <RecipeView currentDay={currentDay} setCurrentDay={setCurrentDay} currentProtein={currentProtein} setCurrentProtein={setCurrentProtein} setPlannedRecipes={setPlannedRecipes} plannedRecipes={plannedRecipes} /> } />
            <Redirect to="/userchoice" /> 
          </Switch> 
      </div>  
    );
  }


  export default Home;