import React, { Component } from 'react';
import InternList from './SupervisorAllocator/InternList';


class App extends Component {
    state = {
        companies: [
            { id: 1, companyName: "Softlogic" },
            { id: 2, companyName: "Hardlogic" },
            { id: 3, companyName: "99x" }
        ],
        supervisors: [
            { id: 1, key: 1, name: "Peter", title: "UX", email: "peter@gmail.com", companyid: 1, allocatedinterns: 0 },
            { id: 5, key: 2, name: "Tom", title: "SE", email: "tom@gmail.com", companyid: 1, allocatedinterns: 1 },
            { id: 7, key: 3, name: "John", title: "SE", email: "john@gmail.com", companyid: 3, allocatedinterns: 0 }

        ],
        interns: [
            { id: 1, name: "Max", email: "max@gmail.com", supervisor: {}, companyId: 1 },
            { id: 2, name: "Mary", email: "Mary@gmail.com", supervisor: { id: 5, name: "Tom", title: "SE", email: "tom@gmail.com", companyId: 1, allocatedInterns: 1 }, companyId: 1 },
            { id: 3, name: "Jack", email: "Jack@gmail.com", supervisor: {}, companyId: 1 },
            { id: 4, name: "Tim", email: "Tim@gmail.com", supervisor: {}, companyId: 3 },
            { id: 5, name: "Jerry", email: "Jerry@gmail.com", supervisor: {}, companyId: 3 }
        ]
    }

    handleSelection = (e, data, internid) => {
        const [selectedSupervisor] = this.state.supervisors.filter((s) => s.id === data.id);

        let intIndex = this.state.interns.findIndex((intern) => intern.id === internid);
        this.state.interns[intIndex].supervisor = selectedSupervisor;
        this.forceUpdate();
    }

    render() {
        return (
            <div className="App">
                <InternList interns={this.state.interns} supervisors={this.state.supervisors} selection={this.handleSelection} />
            </div>
        );
    }
}

export default App;
