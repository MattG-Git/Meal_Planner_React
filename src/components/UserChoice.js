import react from 'react';
import {Form, FormGroup, Button, Input, Label} from 'reactstrap';

function UserChoice() {
    return (
      <Form>
          <FormGroup>
              <Label for='dayofweek'>Select The Day Of The Week</Label>
                <Input type="select" name="dayofweek" id="dayofweek">
                <option>MONDAY</option>
                <option>TUESDAY</option>
                <option>WEDNESDAY</option>
                <option>THURSDAY</option>
                <option>FRIDAY</option>
                <option>SATURDAY</option>
                <option>SUNDAY</option>
                </Input>
              <Label for='proteinchoice'>Select Your Protein</Label>
                <Input type="select" name="proteinchoice" id="proteinchoice">
                  <option>BEEF</option>
                  <option>CHICKEN</option>
                  <option>PORK</option>
                  <option>SEAFOOD</option>
                  <option>VEGETARIAN</option>
                </Input>
                <Button outline color="primary">Submit</Button>
          </FormGroup>
      </Form>
    );
  }

export default UserChoice;