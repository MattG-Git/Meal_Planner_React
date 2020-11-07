import React from 'react';
import {Table} from 'reactstrap';



const Calendar = ( {plannedRecipes} ) => {
  const calendarList = plannedRecipes.map(d => { 
    return (
      <div className='col-sm text-center mb-4'>
        <h2>{d.day}</h2>
        <h3>{d.choice}</h3>
        <a href={d.link}>Link to Full Recipe</a>
      </div>
    ); 
  
  
  })
    return (
      <div className='Calendar'>
            {calendarList}
      </div>
    );
    
  }

  export default Calendar;