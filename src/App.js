import React, { Component } from 'react';
import CardExampleCard from './SupervisorAllocator/CardExampleCard';
import CardExampleGroups from './SupervisorAllocator/CardExampleGroups';


class App extends Component {
  state = {
    companies: [
      { id: 1, name: "Softlogic" },
      { id: 2, name: "Hardlogic" },
      { id: 3, name: "99x" }
    ],
    supervisors: [
      { id: 1, name: "Peter", title: "UX", email: "peter@gmail.com", companyId: 1, allocatedInterns: [] },
      { id: 5, name: "Tom", title: "SE", email: "tom@gmail.com", companyId: 1, allocatedInterns: [] },
      { id: 7, name: "John", title: "SE", email: "john@gmail.com", companyId: 3, allocatedInterns: [] }

    ],
    interns: [
      { id: 1, name: "Max", email: "max@gmail.com", supervisor: {}, companyId: 1 },
      { id: 2, name: "Mary", email: "Mary@gmail.com", supervisor: {}, companyId: 1 },
      { id: 3, name: "Jack", email: "Jack@gmail.com", supervisor: {}, companyId: 1 },
      { id: 4, name: "Tim", email: "Tim@gmail.com", supervisor: {}, companyId: 3 },
      { id: 5, name: "Jerry", email: "Jerry@gmail.com", supervisor: {}, companyId: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <CardExampleCard name="Max" email="max@gmail.com" supervisor="" />
        <CardExampleGroups />
      </div>
    );
  }
}

export default App;
