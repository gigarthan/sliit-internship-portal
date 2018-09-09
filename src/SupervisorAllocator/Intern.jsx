import React, { Component } from 'react'
import { Card, Icon, Segment } from 'semantic-ui-react'
import SupervisorDropDown from './SupervisorDropDown';

class Intern extends Component {
    render() {
        return (

            <Segment clearing>
                <Card.Group>
                    <Card color="green">
                        <Card.Content>
                            <Card.Header>{this.props.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{this.props.email}</span>
                            </Card.Meta>
                            <Card.Description></Card.Description>
                        </Card.Content>
                        <Card.Content extra>

                            <Icon name='info' />
                            Supervisor:  <SupervisorDropDown supervisor={this.props.supervisor} supervisors={this.props.supervisors} onSelect={(e, data) => this.props.onSelected(e, data)} />
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>
        )
    }
}

export default Intern;