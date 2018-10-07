import React, { Component } from 'react';
import { connect } from 'react-redux';
import Supervisor from './Supervisor';

class Intern extends Component {

    render() {

        const segmentStyle = this.props.intern.supervisor ? (
            "ui segment raised green"
        ) : (
                "ui segment raised brown"
            );

        return (
            <div className={segmentStyle}>
                <div className="ui two column middle aligned very relaxed stackable divided grid">
                    <div className="column">
                        <h1>{this.props.intern.name}</h1>
                    </div>
                    <div className="column">
                        <p>Supervisor: </p>
                        <Supervisor companyId={this.props.companyId} intern={this.props.intern} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        intern: state.companies.interns.find(intern => intern.id === ownProps.internId)
    }
}

export default connect(mapStateToProps)(Intern);