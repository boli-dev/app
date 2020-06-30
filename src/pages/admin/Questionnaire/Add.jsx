import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import AddQuestionnaireForm from "../../../components/forms/AddQuestionnaire";
import { useParams } from "react-router-dom";

const Add = () => {
  const { offerId } = useParams();
  return (
    <Grid centered>
      <Grid.Column>
        <Segment>
          <Card fluid>
            <Card.Content>
              <Card.Header> Add Questionnaire </Card.Header>
            </Card.Content>
            <Card.Content>
              <AddQuestionnaireForm offerId={offerId} />
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Add;
