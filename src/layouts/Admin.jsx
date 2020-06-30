import React from "react";
import { Header, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Admin = ({ title, addLink, children }) => {
  return (
    <React.Fragment>
      <Header as="h3" dividing>
        {title && title}
        <Header as="div" floated="right">
          <List.Item as={Link} to={addLink && addLink}>
            add
          </List.Item>
        </Header>
      </Header>

      {children}
    </React.Fragment>
  );
};

export default Admin;
