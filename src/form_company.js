import React,{Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

/* const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
) */
 
class FormCompany extends Component{
    render(){
        return(
            <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Supervisor' />
            </Form.Field>
            <Form.Field>
              <label>Phone</label>
              <input placeholder='SupervisorPhone' />
            </Form.Field>
            <Form.Field>
              <label>SupervisorTitle</label>
              <input placeholder='SupervisorTitle' />
            </Form.Field>
            <Form.Field>
              <label>Company Name</label>
              <input placeholder='Name of the company' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>  
        )
    }
}
export default FormCompany