import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import AddReponseForm from "../../../components/forms/AddReponse";
import { useParams } from "react-router-dom";

const Add = () => {
  const { questionId } = useParams();
  return (
    <Grid centered>
      <Grid.Column>
        <Segment>
          <Card fluid>
            <Card.Content>
              <Card.Header> Add Reponse </Card.Header>
            </Card.Content>
            <Card.Content>
              <AddReponseForm questionId={questionId} />
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Add;
