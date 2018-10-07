import React, { Component } from "react";
import { Container, Grid, Button, Card } from "semantic-ui-react";
import StudentProfile from "./StudentProfileComponent";
import { Link, Route } from "react-router-dom";
import RegisterForm from "./RegisterFormComponent";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import FormI1 from "../FormI1/FormI1Component";
import CompanyDetail from "./CompanyDetail";
import I1Detail from "./I1Detail";

class DashBoard extends Component {
  getStudentStatus = () => {
    const student = this.props.selectedStudent;
    let statuses = {
      notStarted: "You are yet to start your internship",
      submitI1Form: "I1 Form Needs to be submitted",
      i1FormSubmitted: "Waiting for supervior to submit I1 Form"
    };

    let status = student ? statuses[student.status] : "";

    return status;
  };

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
            <Card style={{ padding: 20 }}>
              <Card.Header>Begin Your Internship Journey</Card.Header>{" "}
            </Card>
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
      } else if (student.status === "i1FormSubmitted") {
        return (
          <div>
            
          </div>
        );
      }
    } else {
      return <div>Loading...</div>;
    }
  };

  renderInternalRouting = () => (
    <div>
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
    </div>
  );

  renderCompanyDetail = () => {
    if (this.props.selectedStudent && this.props.selectedStudent.company) {
      return <CompanyDetail company={this.props.selectedStudent.company} />;
    }
  };

  renderI1Detail = () => {
    if (this.props.selectedStudent) {
      return (
        <Grid.Column width={5}>
          <I1Detail i={this.props.selectedStudent.formI1} />
        </Grid.Column>
      );
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
            <Grid.Column width={10}>
              <Card fluid color="blue" header={this.getStudentStatus()} />

              <Grid>
                <Grid.Column width={5}>
                  {this.renderCompanyDetail()}
                </Grid.Column>
                { this.renderI1Detail() }
                <Grid.Column width={11}>
                  {this.renderInternalRouting()}
                </Grid.Column>
              </Grid>
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
      if (!s) {
        continue;
      }

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
