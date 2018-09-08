import React, { Component } from 'react';
import { Container, Button, Checkbox, Form, } from "semantic-ui-react";



export default class FormI1 extends Component {

  handleSubmit(val) {

    
    console.log('HI');
  }




  render() {
    return (

      <Container>
        <h1>Form I-1</h1>
        <h2>Internship Acceptance Form</h2>
        <Form onSubmit={() => this.handleSubmit()}>
          <Form.Field>
            <label>Student ID No</label>
            <input placeholder="IT16041776" type="text"/>
          </Form.Field>
          <Form.Field>
            <label>Student Name</label>
            <input placeholder="Vithushan.J" type="text"/>
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input placeholder="11/15, St.Mary's Road, Mount Lavinia" type="text"/>
          </Form.Field>
          <Form.Field>
            <label>Home Phone</label>
            <input placeholder="011 2559575" type="text"/>
          </Form.Field>
          <Form.Field>
            <label>Mobile Phone</label>
            <input placeholder="076 854 3185" type="text"/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="vithuj@sliit.lk" type="email" />
          </Form.Field>

          <Form.Field>
            <label>Year: </label>
            <select type="number">
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </Form.Field>

          <Form.Field>
           <label>Semester: </label>
           <select type="number">
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
              <option value="3">3rd Semester</option>
              <option value="4">4th Semester</option>
            </select>
          </Form.Field>

          <Form.Field>
           <label>CGPA: </label>
           <input placeholder="3.82" />
          </Form.Field>
         
         
          <Button type="submit">Submit</Button>

        </Form>
      </Container>


    )
  }
}
