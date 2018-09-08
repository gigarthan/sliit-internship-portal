import React, { Component } from "react";
import { Container, Button, Checkbox, Form } from "semantic-ui-react";

export default class CompanyForm extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Employer's Name</label>
            <input placeholder="Company Name" />
          </Form.Field>
          <Form.Field>
            <label>Employer's address</label>
            <input placeholder="Employer's address"  />
          </Form.Field>
          <Form.Field>
            <label>Supervisor's Name</label>
            <input placeholder="Supervisor's Name" />
          </Form.Field>
          <Form.Field>
            <label>Supervisor's Phone</label>
            <input placeholder="Supervisor's Phone" type="number"/>
          </Form.Field>
          <Form.Field>
            <label>Supervisor's Title</label>
            <input placeholder="Supervisor's Title" />
          </Form.Field>
          <Form.Field>
            <label>Supervisor's email</label>
            <input placeholder="Supervisor's email" type="email"  />
          </Form.Field>
          <Form.Field>
            <label>Internship start date</label>
            <input placeholder="Internship start date" type="date" />
          </Form.Field>
          <Form.Field>
            <label>Internship end date</label>
            <input placeholder="Internship end date" type="date"/>
          </Form.Field>
          <Form.Field>
            <label>No of hours per week</label>
            <input placeholder="No of hours per week" type="number" />
          </Form.Field>
          <Form.Field>
            <label>Please list the tasks the student is expected to complete</label>
            <textarea placeholder="Please list the tasks the student is expected to complete"/>
          </Form.Field>
          <Form.Field>
            <label>List what the student will learn during the internship period</label>
            <textarea placeholder="List what the student will learn during the internship period"/>
          </Form.Field>
          <Form.Field>
            <label>External supervisor's Name</label>
            <textarea placeholder="External supervisor's Name" type="date"/>
          </Form.Field>
          <Form.Field>
            <label>List what the student will learn during the internship period</label>
            <textarea placeholder="List what the student will learn during the internship period" type="date"/>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
