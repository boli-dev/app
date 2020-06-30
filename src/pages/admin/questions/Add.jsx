import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import AddQuestionForm from "../../../components/forms/AddQuestion";
import { useParams } from "react-router-dom";

const Add = () => {
  const { questionnaireId, offerId } = useParams();
  return (
    <Grid centered>
      <Grid.Column>
        <Segment>
          <Card fluid>
            <Card.Content>
              <Card.Header> Add Questions </Card.Header>
            </Card.Content>
            <Card.Content>
              <AddQuestionForm
                questionnaireId={questionnaireId}
                offerId={offerId}
              />
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Add;
