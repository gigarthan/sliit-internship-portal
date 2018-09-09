import React, { Component } from 'react'
import { Card, Icon, Segment } from 'semantic-ui-react'
import SupervisorDropDown from './SupervisorDropDown';

class Intern extends Component {
    render() {

        let newIntern = (Object.keys(this.props.supervisor).length === 0 && this.props.supervisor.constructor === Object);

        return (
            <Segment clearing>
                <Card.Group>
                    <Card color={newIntern ? "green" : "brown"}>
                        <Card.Content>
                            <Card.Header>{this.props.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{this.props.email}</span>
                            </Card.Meta>
                            <Card.Description></Card.Description>
                        </Card.Content>
                        <Card.Content extra>

                            <Icon name={newIntern ? 'info' : ''} />
                            Supervisor:  <SupervisorDropDown supervisor={this.props.supervisor} supervisors={this.props.supervisors} onSelect={(e, data) => this.props.onSelected(e, data, this.props.id)} />
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>
        )
    }
}

export default Intern;