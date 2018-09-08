import React,{Component} from 'react'
import { Button, Input, Form, Message } from 'semantic-ui-react'

class FormCompany extends Component{
    render(){
        return(
          <div>
            <Form size='large'>
            <Form.Field>
              {/* <label>First Name</label> */}
              <input placeholder='Employer name' control={Input}/>
            </Form.Field>
            <Form.Field>
              {/* <label>Last Name</label> */}
              <input placeholder='Employer Address' control={Input} />
            </Form.Field>
            <Form.Group widths='equal'>
            <Form.Field>
              {/* <label>Last Name</label> */}
              <input placeholder='Supervisor Name' />
            </Form.Field>
            
            <Form.Field>
              {/* <label>Phone</label> */}
              <input placeholder='Supervisor Phone' />
            </Form.Field>
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Field>
              {/* <label>Supervisor Title</label> */}
              <input placeholder='Supervisor Title' />
            </Form.Field>
            <Form.Field>
              {/* <label>Supervisor Title</label> */}
              <input placeholder='Supervisor Email' />
            </Form.Field>
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Field>
              {/* <label>Supervisor Title</label> */}
              <input placeholder='Internship start date' />
            </Form.Field>
            <Form.Field>
              {/* <label>Supervisor Title</label> */}
              <input placeholder='Internship end date' />
            </Form.Field>
            </Form.Group>
            <Form.Field>
              {/* <label>Company Name</label> */}
              <input placeholder='No of hours per week' />
            </Form.Field>
            <Form.Field>
              <textarea placeholder='Please list the tasks student is expected to complete' />
            </Form.Field>
            <Form.Field>
              <textarea placeholder='List what the student will learn during the internship period' />
            </Form.Field>
            <Form.Group widths='equal'>
            <Form.Field>
              {/* <label>Supervisor Title</label> */}
              <input placeholder='External supervisor name' />
            </Form.Field>
            <Form.Field>
              {/* <label>Supervisor Title</label> */}
              <input placeholder='Date' />
            </Form.Field>
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>  
          <Message success header='Form Completed' content="You're all signed up for the newsletter" />
          <div>Please e-mail this form within one week after the start date mentioned above to saman.g@sliit.lk by the external supervisor’s official e-mail  </div>  
          </div>
        )
    }
}
export default FormCompany