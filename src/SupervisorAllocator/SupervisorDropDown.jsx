import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class SupervisorDropDown extends Component {
    render() {

        return (
            <Dropdown
                text={(Object.keys(this.props.supervisor).length === 0 && this.props.supervisor.constructor === Object) ? "Not Allocated" : this.props.supervisor.name}
            >
                <Dropdown.Menu>
                    {this.props.supervisors.map(supervisor =>
                        <Dropdown.Item key={supervisor.id} text={supervisor.name} description={supervisor.allocatedInterns} onClick={(event, data) => this.props.onSelect(event, data)} />
                    )}

                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default SupervisorDropDown;