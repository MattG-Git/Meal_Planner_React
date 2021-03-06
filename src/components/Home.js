import React, { useState } from 'react';
import { Button } from 'reactstrap'; 
import { Switch, Route, Redirect } from 'react-router-dom';
import Calendar from './Calendar'; 
import UserChoice from './UserChoice'; 
import RecipeView from './RecipeView'; 



const Home = () => {

 const [plannedRecipes, setPlannedRecipes] = useState([]);
 const [currentDay, setCurrentDay] = useState(""); 
 const [currentProtein, setCurrentProtein] = useState([]);

    return (
      <div className="Home text-center">
          <h1 className='mb-4'>Weekly Meal Planner</h1>
          <Calendar currentDay={currentDay} setCurrentDay={setCurrentDay} currentProtein={currentProtein} setCurrentProtein={setCurrentProtein} setPlannedRecipes={setPlannedRecipes} plannedRecipes={plannedRecipes} />
          <Switch> 
            <Route path="/userchoice" render={ () => <UserChoice currentDay={currentDay} setCurrentDay={setCurrentDay} currentProtein={currentProtein} setCurrentProtein={setCurrentProtein} setPlannedRecipes={setPlannedRecipes} plannedRecipes={plannedRecipes} />} />  
            <Route path="/recipeview" render={ () => <RecipeView currentDay={currentDay} setCurrentDay={setCurrentDay} currentProtein={currentProtein} setCurrentProtein={setCurrentProtein} setPlannedRecipes={setPlannedRecipes} plannedRecipes={plannedRecipes} /> } />
            <Redirect to="/userchoice" /> 
          </Switch> 
          <Button onClick={()=>{setPlannedRecipes([])}}>Clear Calendar</Button>
      </div>  
    );
  }


  export default Home;