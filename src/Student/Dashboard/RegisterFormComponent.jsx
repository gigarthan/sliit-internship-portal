import React, { Component } from "react";
<<<<<<< HEAD
import { Container, Button, Checkbox, Form, Card } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { registerCompany } from "../../store/actions/student_actions";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class RegisterForm extends Component {
  submit = values => {
    this.props.registerCompany(this.props.location.state.index, values, this.props.history);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Card fluid>
        <Card.Content>
          <Container fluid>
            <Form onSubmit={handleSubmit(this.submit)}>
              <Form.Field>
                <label>Company Name</label>
                <Field
                  name="companyName"
                  component="input"
                  type="text"
                  placeholder="Company Name"
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Email"
                />
              </Form.Field>
              <Form.Field>
                <label>Contact Number</label>
                <Field
                  name="contactNumber"
                  component="input"
                  type="text"
                  placeholder="Contact Number"
                />
              </Form.Field>
              <Form.Field>
                <label>Address</label>
                <Field
                  name="adress"
                  component="input"
                  type="text"
                  placeholder="Address"
                />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Container>
        </Card.Content>
      </Card>
    );
  }
}

const RegForm = reduxForm({
  // a unique name for the form
  form: "register"
})(RegisterForm);

const withRouterComp = withRouter(RegForm);

export default connect(
  null,
  { registerCompany }
)(withRouterComp);
=======
import { Container, Button, Checkbox, Form } from "semantic-ui-react";

export default class RegisterForm extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Company Name</label>
            <input placeholder="Company Name" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" type="email" />
          </Form.Field>
          <Form.Field>
            <label>Contact Number</label>
            <input placeholder="Contact Number" />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input placeholder="Address" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
>>>>>>> Semantic form ui fixed
