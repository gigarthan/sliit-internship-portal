import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import DashBoard from './Student/Dashboard/DashBoardComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>

          <Switch>
            <Route path='/' component={DashBoard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
