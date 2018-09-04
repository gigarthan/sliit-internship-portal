import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import StudentProfile from './StudentProfileComponent';

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
                    <Button> Begin Internship </Button>    
                </Grid.Column> 
           </Grid.Row>
        </Grid>
      </div>
    )
  }
}
