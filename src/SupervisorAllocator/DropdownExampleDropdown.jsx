import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleDropdown = (props) => {

    if (props.supervisor === null || props.supervisor === "" || props.supervisor === undefined) {
        return (<Dropdown text='Unallocated'>
            <Dropdown.Menu>
                <Dropdown.Item text='New' />
                <Dropdown.Item text='Open...' description='ctrl + o' />
                <Dropdown.Item text='Save as...' description='ctrl + s' />
                <Dropdown.Item text='Rename' description='ctrl + r' />
                <Dropdown.Item text='Make a copy' />
                <Dropdown.Item icon='folder' text='Move to folder' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Divider />
                <Dropdown.Item text='Download As...' />
                <Dropdown.Item text='Publish To Web' />
                <Dropdown.Item text='E-mail Collaborators' />
            </Dropdown.Menu>
        </Dropdown>
        );
    }
    else {
        <Dropdown text={props.supervisor.name}>
            <Dropdown.Menu>
                <Dropdown.Item text='New' />
                <Dropdown.Item text='Open...' description='ctrl + o' />
                <Dropdown.Item text='Save as...' description='ctrl + s' />
                <Dropdown.Item text='Rename' description='ctrl + r' />
                <Dropdown.Item text='Make a copy' />
                <Dropdown.Item icon='folder' text='Move to folder' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Divider />
                <Dropdown.Item text='Download As...' />
                <Dropdown.Item text='Publish To Web' />
                <Dropdown.Item text='E-mail Collaborators' />
            </Dropdown.Menu>
        </Dropdown>
    }
}

export default DropdownExampleDropdown;