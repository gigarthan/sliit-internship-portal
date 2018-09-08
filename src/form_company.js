import React,{Component} from 'react'
import { Button, Form, TextArea, Input, FormButton } from 'semantic-ui-react'


class FormCompany extends Component{
    render(){
        return(
          <div>
            <Form  style={{margin:"100px 100px"}}>
            <Form.Field
              input fluid control={Input} placeholder='Employer Name' label='Employer Name' 
            />
            <Form.Field>
              <input fluid placeholder='Employer Address' />
            </Form.Field>
            <Form.Field>
              <input fluid placeholder='Supervisor Name' />
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
              <TextArea placeholder='Please list the tasks the studet is expected to complete' />
            </Form.Field>
            <Form.Field>
              <TextArea placeholder='List what the internship will learn during the internship period' />
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