import React, { Component } from 'react';
import Intern from './Intern';

class InternList extends Component {

    render() {

        return (
            <div>
                {this.props.interns.map(intern => (
                    <Intern key={intern.id} id={intern.id} name={intern.name} email={intern.email} supervisor={intern.supervisor} supervisors={this.props.supervisors} onSelected={(e, data, intern) => this.props.selection(e, data, intern)} />
                ))}
            </div>
        );
    }
}

export default InternList;