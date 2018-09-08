import React,{Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


class FormCompany extends Component{
    render(){
        return(
          <div margin="100px 100px">
            <Form style={{margin:"100px 100px", fontSize:"2em"}}>
            <Form.Field>
              <input placeholder='Employer Name' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Employer Address' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Supervisor Name' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Supervisor Phone' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Supervisor Title' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Supervisor Email' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Internship Start Date' />
            </Form.Field>
            <Form.Field>
              <input type='date' placeholder='Internship End Date' />
            </Form.Field>
            <Form.Field>
              <input type='number' placeholder='No. of hours per week' />
            </Form.Field>
            <Form.Field>
              <textarea placeholder='Please list the tasks the studet is expected to complete' />
            </Form.Field>
            <Form.Field>
              <textarea placeholder='List what the internship will learn during the internship period' />
            </Form.Field>
            <Form.Field>
              <input placeholder='External supervisor name' />
            </Form.Field>
            <Form.Field>
              <input type='date'  />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>  
          </div>
        )
    }
}
export default FormCompany