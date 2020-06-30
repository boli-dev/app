import React from "react";
import { Grid } from "semantic-ui-react";
import HomeSidebar from "../components/HomeSidebar";
import Main from "./Main";

const Default = ({ children }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <HomeSidebar />
        </Grid.Column>
        <Grid.Column width={13}>{children}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Default;
