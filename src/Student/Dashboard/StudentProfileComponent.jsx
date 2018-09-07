import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default class SudentProfile extends Component {
  render() {
    return (
      <div>
        <Card>
          <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">IT16061712</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Internship Not Started
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
