import React, { Component } from 'react';
import Intern from './SupervisorAllocator/Intern';


class App extends Component {
    state = {
        companies: [
            { id: 1, name: "Softlogic" },
            { id: 2, name: "Hardlogic" },
            { id: 3, name: "99x" }
        ],
        supervisors: [
            { id: 1, name: "Peter", title: "UX", email: "peter@gmail.com", companyId: 1, allocatedInterns: [] },
            { id: 5, name: "Tom", title: "SE", email: "tom@gmail.com", companyId: 1, allocatedInterns: 1 },
            { id: 7, name: "John", title: "SE", email: "john@gmail.com", companyId: 3, allocatedInterns: [] }

        ],
        interns: [
            { id: 1, name: "Max", email: "max@gmail.com", supervisor: {}, companyId: 1 },
            { id: 2, name: "Mary", email: "Mary@gmail.com", supervisor: { id: 5, name: "Tom", title: "SE", email: "tom@gmail.com", companyId: 1, allocatedInterns: 1 }, companyId: 1 },
            { id: 3, name: "Jack", email: "Jack@gmail.com", supervisor: {}, companyId: 1 },
            { id: 4, name: "Tim", email: "Tim@gmail.com", supervisor: {}, companyId: 3 },
            { id: 5, name: "Jerry", email: "Jerry@gmail.com", supervisor: {}, companyId: 3 }
        ]
    }
    render() {
        return (
            <div className="App">
                {/* <Intern name="Max" email="max@gmail.com" supervisor="" /> */}
                {/* <Intern name="Mary" email="Mary@gmail.com" supervisor="Peter" /> */}
                {/* <Intern name={this.state.interns[1].name} email={this.state.interns[1].email} supervisor={this.state.interns[1].supervisor.name} /> */}

                {this.state.interns.map(intern => (
                    <Intern key={intern.id} name={intern.name} email={intern.email} supervisor={intern.supervisor} supervisors={this.state.supervisors} />

                ))}
            </div>
        );
    }
}

export default App;
