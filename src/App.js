import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Authentication/Login';
import Header from './Nav/Header';
import Dashboard from './Student/Dashboard/DashBoardComponent';
import './App.css';
import CompanyForm from './Company/CompanyForm';
import Checker from './Authentication/Checker';
import EmailForm from './Company/EmailForm';
import Company from './Allocation/Company';

class App extends Component {

  renderLogin = () => {
    return (
      <div >
        <Login />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>

          <Switch>
            <Route path='/students' component={Dashboard} />
            <Route path='/company/form-i1'component={CompanyForm} />
            <Route path='/company/email' component={EmailForm} />
            <Route path="/company/:company_id" component={Company} />
            <Route exact path='/' render={this.renderLogin} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
