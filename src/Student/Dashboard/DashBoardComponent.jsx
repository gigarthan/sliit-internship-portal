import React, { Component } from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import StudentProfile from "./StudentProfileComponent";
import { Link, Route } from "react-router-dom";
import RegisterForm from "./RegisterFormComponent";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import FormI1 from "../FormI1/FormI1Component";

class DashBoard extends Component {
  renderDashboardButtons = () => {
    if (this.props.student) {
      const student = this.props.selectedStudent;
      if (student.status === "notStarted") {
        return (
          <Link
            to={{
              pathname: `${this.props.match.url}/internship/begin`,
              state: { index: this.props.index }
            }}
          >
            <Button> Begin Internship </Button>
          </Link>
        );
      } else if (student.status === "submitI1Form") {
        return (
          <Link
            to={{
              pathname: `${this.props.match.url}/internship/forms/i1`,
              state: { index: this.props.index }
            }}
          >
            <Button> Submit I1 Form </Button>
          </Link>
        );
      } else if(student.status === 'i1FormSubmitted') {
        return(<div><h3>Waiting for supervior to submit I1 Form</h3></div>)
      }
    } else {
      return <div>Loading...</div>;
    }
  };

  render() {
    return (
      <Container fluid>
        <Grid style={{ padding: 50 }}>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <StudentProfile student={this.props.selectedStudent} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Route
                path={`${this.props.match.url}/internship/begin`}
                component={RegisterForm}
              />
              <Route
                path={`${this.props.match.url}/internship/forms/i1`}
                component={FormI1}
              />
              <Route
                exact
                path={`${this.props.match.url}`}
                render={this.renderDashboardButtons}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  let selected = null;
  let i = null;

  if (state.firebase.data.students)
    for (let [index, s] of state.firebase.data.students.entries()) {
      if (s.email === state.firebase.auth.email) {
        selected = s;
        i = index;
      }
    }

  return {
    student: state.firebase.data.students,
    profile: state.firebase.profile, // load profile,
    selectedStudent: selected,
    index: i
  };
}

export default compose(
  firebaseConnect(props => {
    return ["students"];
  }),
  connect(mapStateToProps)
)(DashBoard);
