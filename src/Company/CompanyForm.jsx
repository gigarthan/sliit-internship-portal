import React, { Component } from "react";
import {
  Container,
  Button,
  Checkbox,
  Form,
  Card,
  Grid,Image
} from "semantic-ui-react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import { submitI1Form } from '../store/actions/company_actions';

class CompanyForm extends Component {
  render() {
  const { handleSubmit } = this.props;

    return (
      <Container fluid style={{padding:20}} >

        <Grid>
          <Grid.Column width="4">
          
        <Card>
          <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
          <Card.Content>
            <Card.Header> {this.props.company?this.props.company[0].name:null} </Card.Header>
       
          </Card.Content>
          <Card.Content extra>this.renderStatus(student.status)</Card.Content>
          <Card.Content><Button onClick={() => { this.props.logout(this.props.history) }} >Logout</Button></Card.Content>
        </Card>
          </Grid.Column>
         
          <Grid.Column width={8}>
              
            <Grid.Row width={6}>
              <Card fluid>
                <Card.Content>
                  <Container>
                    <Form onSubmit={handleSubmit((val) => { this.props.submitI1Form('0', val) })} >
                     
                      <Form.Field>
                        <label>Supervisor's Name</label>
                        <Field name="supervisorName" type="text" component="input" />

                      </Form.Field>
                      <Form.Field>
                        <label>Supervisor's Phone</label>
                        <Field name="supNumber" type="text" component="input" />

                      </Form.Field>
                      <Form.Field>
                        <label>Supervisor's Title</label>
                        <Field name="supTitle" type="text" component="input" />

                      </Form.Field>
                      <Form.Field>
                        <label>Supervisor's email</label>
                        <Field name="supEmail" type="text" component="input" />

                      </Form.Field>
                      <Form.Field>
                        <label>Internship start date</label>
                        <Field name="internStartDate" type="date" component="input" />

                      </Form.Field>
                      <Form.Field>
                        <label>Internship end date</label>
                        <Field name="internEndDate" type="date" component="input" />
                      </Form.Field>
                      <Form.Field>
                        <label>No of hours per week</label>
                        <Field name="noHrs" type="number" component="input" />
                      </Form.Field>
                      <Form.Field>
                        <label>
                          Please list the tasks the student is expected to
                          complete
                        </label>
                        <Field name="studentTasks" type="text" component="textarea" />
                      </Form.Field>
                      <Form.Field>
                        <label>
                          List what the student will learn during the internship
                          period
                        </label>
                        <Field name="internLearn" type="text" component="textarea" />
                      </Form.Field>
                      <Form.Field>
                        <label>External supervisor's Name</label>
                        <Field name="extSupName" type="text" component="input" />
                      </Form.Field >
                      <Button type="submit">Submit</Button>
                      <Button>Email the form i1</Button>
                    </Form>
                  </Container>
                </Card.Content>
              </Card>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={2}>
          <div><h3>Interns from Sri Lanka Institute of Information Technology</h3>
          <ul>
            <li>Amila Nuwan</li>
          <li>Gigarthan</li>
          <li>Vithu</li>
          </ul>
          </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  let selected = null;
  let i = null;

  if (state.firebase.data.students)
    for (let [index, s] of state.firebase.data.students.entries()) {
      if (!s) {
        continue;
      }

      if (s.email === state.firebase.auth.email) {
        selected = s;
        i = index;
      }
    }

  return {
    student: state.firebase.data.students,
    company:state.firebase.data.companies,
    profile: state.firebase.profile, // load profile,
    selectedStudent: selected,
    index: i,
  };
}
const CompForm = reduxForm({
  form: 'companyForm'
})(CompanyForm);

export default compose(
  firebaseConnect(props => {
    return ["companies"];
  }),
  connect(mapStateToProps, { submitI1Form })
)(CompForm);

