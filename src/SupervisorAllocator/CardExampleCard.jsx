import React from 'react'
import { Card, Icon, Segment } from 'semantic-ui-react'
import DropdownExampleDropdown from './DropdownExampleDropdown';

const CardExampleCard = (props) => (
    <Segment clearing>
        <Card.Group>
            <Card color="green">
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.email}</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>

                    <Icon name='info' />
                    Supervisor:  <DropdownExampleDropdown supervisor={props.supervisor} />


                </Card.Content>
            </Card>
        </Card.Group>
    </Segment>
)

export default CardExampleCard;