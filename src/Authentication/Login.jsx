import React, { Component } from "react";
import { Button, Checkbox, Form, Card } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { login } from "./../store/actions/auth_actions";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

const LoginForm = ({ handleSubmit, login, history }) => (
  <Card style={ { marginTop: '20px' ,marginLeft: 'auto', marginRight : 'auto' } } >
    <Card.Content>
      <Form onSubmit={handleSubmit((val) => { login(val, history ) })}>
        <Form.Field>
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="password"
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </Card.Content>
  </Card>
);

const Login = reduxForm({
  form: "login"
})(LoginForm);

export default withRouter(connect(
  null,
  { login }
)(Login));
