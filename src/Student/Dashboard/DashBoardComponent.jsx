import React, { Component } from 'react'
import { Container, Grid, Button } from 'semantic-ui-react';
import StudentProfile from './StudentProfileComponent';
import { Link, Route } from 'react-router-dom';
import RegisterForm from './RegisterFormComponent';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import FormI1 from '../FormI1/FormI1Component';

class DashBoard extends Component {

  renderStatusButton = () => {
    
  }


  render() {
    return (
      <Container fluid>
        <Grid style={{padding:50}}>
           <Grid.Row columns={2} >
                <Grid.Column width={4}>
                    <StudentProfile student={this.props.student} />
                </Grid.Column>
                <Grid.Column width={6}>                   
                    <Route path={`${this.props.match.url}/internship/begin`} component={RegisterForm} />
                    <Route path={`${this.props.match.url}/internship/forms/i1`} component={FormI1} />
                    <Route exact path={`${this.props.match.url}`}  render={() => { return <Link to={`${this.props.match.url}/internship/begin`} ><Button> Begin Internship </Button></Link> }} />
                </Grid.Column>
           </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default compose(
  firebaseConnect((props) => {
    return [
      'students'
    ]
  }),
  connect(
    (state) => ({
      student : state.firebase.data.students,
      // profile: state.firebase.profile // load profile
    })
  )
)(DashBoard)
