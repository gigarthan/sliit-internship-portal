import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Container, Button, Checkbox, Form, Card } from "semantic-ui-react";
import { sendmail } from "../store/actions/mail_actions";
import {firebaseConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class EmailForm extends Component {
    submit = values => {
      this.props.sendmail(this.props.location.state.index, values, this.props.history);
    }; 

render() {
    const { handleSubmit } = this.props;

    return (
      <Card fluid>
        <Card.Content>
          <Container fluid>
            <Form onSubmit={handleSubmit(this.submit)}>
            <Form.Field>
                <label>From : </label>
                <label>{this.props.company?this.props.company[0].email:null}</label>
              </Form.Field>
              <Form.Field>
                <label>Send To : </label>
                <label>Saman.g@sliit.lk</label>
              </Form.Field>
              <Form.Field>
                <label>Subject</label>
                <Field
                  name="subject"
                  component="input"
                  type="text"
                  placeholder="Subject"
                />
              </Form.Field>
              <Form.Field>
                <label>Message</label>
                <Field
                  name="message"
                  component="input"
                  type="text"
                  placeholder="Message"
                />
              </Form.Field>
              
              <Button type="submit">Send</Button>
            </Form>
          </Container>
        </Card.Content>
      </Card>
    );
  }
}

const mailForm = reduxForm({
    form: "email"
  })(EmailForm);

  const withRouterComp = withRouter(mailForm);

  function mapStateToProps(state){
      return {
          company: state.firebase.data.companies
      }
  }
  export default compose(firebaseConnect(props=>{return ["companies"];}),connect(
    mapStateToProps,
    {sendmail}))(withRouterComp);