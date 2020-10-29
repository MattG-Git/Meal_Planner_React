import React from 'react';
import {Table} from 'reactstrap';

/*const renderCalender = ( {plannedRecipes} ) => { 

const calendarList = plannedRecipes.map(d => { 
  return (
    <div>
      <h2>d.day</h2>
      <h2>d.choice</h2>
      <a href={d.link}>Link to Full Recipe</a>
    </div>
  ); 


})

} */ 

const Calendar = ( {plannedRecipes} ) => {
  const calendarList = plannedRecipes.map(d => { 
    return (
      <div>
        <h2>{d.day}</h2>
        <h2>{d.choice}</h2>
        <a href={d.link}>Link to Full Recipe</a>
      </div>
    ); 
  
  
  })
    return (
      <div className='Calendar'>
          <Table responsive>
            <thead>
                <tr>
                <th>SUNDAY</th>
                <th>MONDAY</th>
                <th>TUESDAY</th>
                <th>WEDNESDAY</th>
                <th>THURSDAY</th>
                <th>FRIDAY</th>
                <th>SATURDAY</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">food</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                </tr>
            </tbody>
            </Table>
            {calendarList}
      </div>
    );
    
  }

  export default Calendar;