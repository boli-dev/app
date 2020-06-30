import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import AddVilleForm from "../../../components/forms/AddVille";

const Add = () => {
  return (
    <Grid centered>
      <Grid.Column>
        <Segment>
          <Card fluid>
            <Card.Content>
              <Card.Header> Add Ville </Card.Header>
            </Card.Content>
            <Card.Content>
              <AddVilleForm />
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Add;
