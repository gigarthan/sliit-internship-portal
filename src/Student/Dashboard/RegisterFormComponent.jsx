import React, { Component } from "react";
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
