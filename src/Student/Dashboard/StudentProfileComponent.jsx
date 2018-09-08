import React, { Component } from "react";
<<<<<<< HEAD
import { Card, Icon, Image, Button } from "semantic-ui-react";
import {logout} from '../../store/actions/auth_actions';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


class StudentProfile extends Component {
  renderStatus(status = "") {
    if (status === "notStarted") {
      return (
        <a>
          <Icon name="user" />
          Internship Not Started
        </a>
      );
    } else if (status === 'submitI1Form') {
      return (
        <a>
          <Icon name="user" />
          Submit I1 Form
        </a>
      );
    } else if(status === 'i1FormSubmitted') {
      return (
        <a>
          <Icon name="user" />
            I1 Form Submitted
        </a>
      );
    }
  }

  render() {
    let student = {};

    if (this.props.student) {
      student = this.props.student;
    }

=======
import { Card, Icon, Image } from "semantic-ui-react";

export default class SudentProfile extends Component {
  render() {
>>>>>>> Semantic form ui fixed
    return (
      <div>
        <Card>
          <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
          <Card.Content>
<<<<<<< HEAD
            <Card.Header> {student.name} </Card.Header>
            <Card.Meta>
              <span className="date">{student.regNo}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>{this.renderStatus(student.status)}</Card.Content>
          <Card.Content><Button onClick={() => { this.props.logout(this.props.history) }} >Logout</Button></Card.Content>
=======
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">IT16061712</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Internship Not Started
            </a>
          </Card.Content>
>>>>>>> Semantic form ui fixed
        </Card>
      </div>
    );
  }
}
<<<<<<< HEAD

export default withRouter(connect(null, {logout})(StudentProfile));
=======
>>>>>>> Semantic form ui fixed
