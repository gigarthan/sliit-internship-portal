import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { login } from './../store/actions/auth_actions';
import { connect } from 'react-redux';

const LoginForm = ({ handleSubmit, login }) => (
  <Form onSubmit={handleSubmit(login)} >
    <Form.Field>
      <label>Email</label>
      <Field name="email" component="input" type="text" placeholder="Email" />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <Field name="password" component="input" type="password" placeholder="password" />      
    </Form.Field>
    <Button type='submit'>Login</Button>
  </Form>
)

const Login = reduxForm({
    form: 'login'
})(LoginForm)

export default connect(null, { login })(Login);