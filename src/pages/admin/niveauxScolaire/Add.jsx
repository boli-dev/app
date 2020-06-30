import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import AddNScolaireForm from "../../../components/forms/AddNScolaire";

const Add = () => {
  return (
    <Grid centered>
      <Grid.Column>
        <Segment>
          <Card fluid>
            <Card.Content>
              <Card.Header> Add Niveaux scolaire </Card.Header>
            </Card.Content>
            <Card.Content>
              <AddNScolaireForm />
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Add;
