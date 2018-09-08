import React, { Component } from 'react';
import { Button, Input, Form, Message } from 'semantic-ui-react'
import FormCompany from './form_company'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isCompanyFormClicked : false
    }
    this.funcFormCompany = this.funcFormCompany.bind(this);
  }
  funcFormCompany(){
    this.setState({
      isCompanyFormClicked : !this.state.isCompanyFormClicked});
}
  render() {
 
    return (
      <div className="App">
        <h1>Internship Portal</h1>
        <Button onClick={this.funcFormCompany}>To be filled by the company</Button>
         <div className="FormCompany">
         { this.state.isCompanyFormClicked? <FormCompany/>:null}
        </div> 
      </div>
    );
  }
}

export default App;
