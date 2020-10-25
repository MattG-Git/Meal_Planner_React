import react from 'react';
import {Table} from 'reactstrap';


function Calendar() {
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
      </div>
    );
  }

  export default Calendar;