import React from 'react'
import { Card, Icon, Segment } from 'semantic-ui-react'
import SupervisorDropDown from './SupervisorDropDown';

const Intern = (props) => (
    <Segment clearing>
        <Card.Group>
            <Card color="green">
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.email}</span>
                    </Card.Meta>
                    <Card.Description></Card.Description>
                </Card.Content>
                <Card.Content extra>

                    <Icon name='info' />
                    Supervisor:  <SupervisorDropDown supervisor={props.supervisor} supervisors={props.supervisors} />
                </Card.Content>
            </Card>
        </Card.Group>
    </Segment>
)

export default Intern;