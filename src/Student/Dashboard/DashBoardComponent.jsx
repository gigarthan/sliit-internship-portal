import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import StudentProfile from './StudentProfileComponent';
import { Link } from 'react-router-dom';

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <Grid  >
           <Grid.Row columns={2} >
                <Grid.Column>
                    <StudentProfile />
                </Grid.Column>
                <Grid.Column>
                    <Link to='/student/internship/begin' ><Button> Begin Internship </Button>    </Link>
                </Grid.Column> 
           </Grid.Row>
        </Grid>
      </div>
    )
  }
}
