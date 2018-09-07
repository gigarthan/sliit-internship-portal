import React, { Component } from "react";
import { Container, Button, Checkbox, Form } from "semantic-ui-react";
import { Field, reduxForm } from 'redux-form';
import { registerCompany } from '../../store/actions/student_actions';
import { connect } from "react-redux";

class RegisterForm extends Component {

  submit = values => {
    this.props.registerCompany(values);
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <Container>
        <Form onSubmit={handleSubmit(this.submit)} >
          <Form.Field>
            <label>Company Name</label>
            <Field name="companyName" component="input" type="text" placeholder="Company Name" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Field name="email" component="input" type="email" placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Contact Number</label>
            <Field name="contactNumber" component="input" type="text" placeholder="Contact Number" />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <Field name="adress" component="input" type="text" placeholder="Address" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

const RegForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default connect(
  null,
  { registerCompany }
)(RegForm);
