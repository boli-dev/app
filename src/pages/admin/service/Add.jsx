import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import AddServiceForm from "../../../components/forms/AddService";

const Add = () => {
  return (
    <Grid centered>
      <Grid.Column>
        <Segment>
          <Card fluid>
            <Card.Content>
              <Card.Header> Add Service </Card.Header>
            </Card.Content>
            <Card.Content>
              <AddServiceForm />
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Add;
