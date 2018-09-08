import React, { Component } from "react";
import { Container, Button, Checkbox, Form } from "semantic-ui-react";

export default class MailForm extends Component {
  render() {
    return (
      <Container>
        <Form>
        <Form.Field>
            <label>Send To</label>
            <input placeholder="Email" type="email" />
          </Form.Field>
          <Form.Field>
            <label>Subject</label>
            <input placeholder="Subject" />
          </Form.Field>
          <Form.Field>
            <label>Message</label>
            <input placeholder="Message" />
          </Form.Field>
          <Button type="send">Send</Button>
        </Form>
      </Container>
    );
  }
}
