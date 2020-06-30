import React from "react";
import { Header } from "semantic-ui-react";

const Main = ({ title, children }) => {
  return (
    <React.Fragment>
      <Header as="h3" dividing>
        {title && title}
      </Header>
      {children}
    </React.Fragment>
  );
};

export default Main;
