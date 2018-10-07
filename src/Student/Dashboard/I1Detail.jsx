import React from "react";
import { Card, List } from "semantic-ui-react";

export default ({ i }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>I1 Form</Card.Header>
        <Card.Meta />
        <Card.Description>
          <List>
            <List.Item>
              <List.Icon name="users" />
              <List.Content> { i.studentId } </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content> { i.studentName } </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:jack@semantic-ui.com"> { i.email } </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>{ i.mobile }</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>{ i.address }</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>CGPA : { i.cgpa }</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>Semester : { i.semester }</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>Year : { i.year }</List.Content>
            </List.Item>
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
