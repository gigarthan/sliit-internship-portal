import React, { Component } from 'react';
import { Container, Button, Checkbox, Form, } from "semantic-ui-react";
import { Field, reduxForm } from 'redux-form';


class FormI1 extends Component {

  // handleSubmit(val) {
  //   console.log('HI');
  // }

  render() {
    return (

      <Container>
        <h1>Form I-1</h1>
        <h2>Internship Acceptance Form</h2>
        <Form>
          <Form.Field>
            <label>Student ID No</label>
            <Field name="studentId" placeholder="IT16041776" component={renderField} type="text" />
          </Form.Field>
          <Form.Field>
            <label>Student Name</label>
            <Field name="studentName" placeholder="Vithushan.J" component={renderField} type="text" />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <Field name="address" placeholder="11/15, St.Mary's Road, Mount Lavinia" component="input" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Home Phone</label>
            <Field name="home" placeholder="011 2559575" component="input" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Mobile Phone</label>
            <Field name="mobile" placeholder="076 854 3185" component="input" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Field name="email" placeholder="vithuj@sliit.lk" component={renderField} type="email" />
          </Form.Field>

          <Form.Field>
            <label>Year: </label>
            <Field name="year" component="select" >
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </Field>
          </Form.Field>

          <Form.Field>
           <label>Semester: </label>
           <Field name="semester" component="select" >
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
              <option value="3">3rd Semester</option>
              <option value="4">4th Semester</option>
            </Field>
          </Form.Field>

          <Form.Field>
           <label>CGPA: </label>
           <Field name="cgpa" placeholder="3.82"  component={renderField} type="number" />
          </Form.Field>
         
          <Button type="submit">Submit</Button>

        </Form>
      </Container>
    )
  }
}


const validate = values => {
  const errors = {}
  if (!values.studentName) {
    errors.studentName = 'Required'
  } else if (values.studentName.length > 15) {
    errors.studentName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.cgpa) {
    errors.cgpa = 'Required'
  } else if (isNaN(Number(values.cgpa))) {
    errors.cgpa = 'Must be a number'
  } else if (Number(values.cgpa) > 4 && Number(values.cgpa) < 0) {
    errors.cgpa = 'CGPA must be inbetween 0 and 4'
  }
  return errors
}


const renderField = ({
  input,
  placeholder,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)


const warn = values => {
  const warnings = {}
  if (values.cgpa > 4 ) {
    warnings.cgpa = 'CGPA cannot be greater than 4.0 ';
    console.log('less');
  }
  return warnings
}

FormI1 = reduxForm({
  // a unique name for the form
  form: 'FormI1-Part1',
  validate,
  warn
})(FormI1)

export default FormI1;