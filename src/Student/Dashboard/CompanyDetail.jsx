import React from "react";
import { Card, List } from "semantic-ui-react";

export default ({ company }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Your Company Details</Card.Header>
        <Card.Meta />
        <Card.Description>
          <List>
            <List.Item>
              <List.Icon name="users" />
              <List.Content> {company.companyName} </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content> {company.address} </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:jack@semantic-ui.com"> {company.email} </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>{company.contactNumber}</List.Content>
            </List.Item>
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
