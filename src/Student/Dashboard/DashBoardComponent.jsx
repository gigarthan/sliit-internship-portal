import React, { Component } from 'react'
import { Container, Grid, Button } from 'semantic-ui-react';
import StudentProfile from './StudentProfileComponent';
import { Link, Route } from 'react-router-dom';
import RegisterForm from './RegisterFormComponent';
import FormI1 from '../FormI1/FormI1Component';

export default class DashBoard extends Component {
  render() {
    return (
      <Container fluid>
        <Grid style={{padding:50}}>
           <Grid.Row columns={2} >
                <Grid.Column width={4}>
                    <StudentProfile />
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
