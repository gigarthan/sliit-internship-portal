import React, { Component } from "react";
import {
  Container,
  Button,
  Checkbox,
  Form,
  Card,
  Grid
} from "semantic-ui-react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { submitI1Form } from '../store/actions/company_actions';

class CompanyForm extends Component {
  render() {
  const { handleSubmit } = this.props;

    return (
      <Container style={{padding:20}} >
        <Grid>
          <Grid.Column>
            <Grid.Row width={6}>
              <Card fluid>
                <Card.Content>
                  <Container>
                    <Form onSubmit={handleSubmit((val) => { this.props.submitI1Form('0', val) })} >
                      <Form.Field>
                        <label>Employer's Name</label>
                        <Field name="companyName" type="text" component="input" />
                      </Form.Field>
                      <Form.Field>
                        <label>Employer's address</label>
                        <Field name="employerAddress" type="text" component="input" />
                      </Form.Field>
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
                      </Form.Field>
                      {/* <Form.Field>
                        <label>
                          List what the student will learn during the internship
                          period
                        </label>
                        <textarea
                          placeholder="List what the student will learn during the internship period"
                          type="date"
                        />
                        <Field name="companyName" type="text" component="input" />

                      </Form.Field> */}
                      <Button type="submit">Submit</Button>
                    </Form>
                  </Container>
                </Card.Content>
              </Card>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const CompForm = reduxForm({
  form: 'companyForm'
})(CompanyForm);

export default connect(null, { submitI1Form })(CompForm);