import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allocateSupervisor } from '../store/actions/allocateSupervisorActions';

class Supervisor extends Component {

    handleChange = (event) => {
        //dispatch action to reducer
        this.props.allocateSupervisor(this.props.intern.id, event.target.value);
    }

    render() {
        console.log("selectedSupervisor:", this.props.supervisor);
        console.log("Props: ", this.props);
        const selection = (
            <form>
                <label>
                    Select Supervisor:
                    <select onChange={this.handleChange} className="ui selection dropdown" style={{ margin: 10 }}>
                        {/* {isAllocated && defaultSelection};  Using logical operator for conditional in React, true && expresion == expression. false && expression == false. Or using conditional operator--> {isAllocated ? defaultSelection : false} */}
                        <option value="1"> Not Allocated </option>
                        {/* <option value="10"> Tom </option> */}

                        {this.props.supervisorList.map(
                            supervisor => {
                                return (
                                    <option key={supervisor.id} value={supervisor.id}>
                                        {supervisor.name}
                                    </option>
                                )
                            }
                        )}
                    </select>
                </label>
            </form>
        );

        if (this.props.supervisor !== undefined) {
            return (
                <div>
                    <div>
                        <h2>{this.props.supervisor.name}</h2>
                        <p>{this.props.supervisor.email}</p>
                    </div>
                    {selection}
                </div >
            );
        }
        else {
            return (
                <div>
                    <div><h2>Not Set</h2></div>
                    <div>{selection}</div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => { //also passed ownProps (here the supervisorId we set in Intern) to be passed along with new props created below to this component.

    return {
        supervisor: state.companies.supervisors.find(supervisor => supervisor.id === ownProps.intern.supervisor),
        supervisorList: state.companies.supervisors.filter(supervisor => supervisor.companyId === ownProps.companyId)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        allocateSupervisor: (intId, supId) => { dispatch(allocateSupervisor(intId, supId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Supervisor);

