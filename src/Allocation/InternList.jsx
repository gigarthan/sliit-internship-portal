import React, { Component } from 'react';
import { connect } from 'react-redux';
import Intern from './Intern';
import { withRouter } from 'react-router-dom';

class InternList extends Component {
    render() {
        console.log(this.props);
        let compId = Number(this.props.match.params.company_id);

        return (
            <div className="ui container">
                <div className="ui segments">
                    <div className="ui segment">
                        <h1>Interns</h1>
                        {this.props.interns.map((intern) => {
                            return <Intern key={intern.id} internId={intern.id} companyId={compId} />
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let companyId = Number(ownProps.match.params.company_id);

    return {
        interns: state.companies.interns.filter(intern => intern.companyId === companyId)
    }
}

export default withRouter(connect(mapStateToProps)(InternList));  