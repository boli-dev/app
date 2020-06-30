import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import AddOfferForm from "../../../components/forms/AddOffer";
import useQuery from "../../../hooks/useQuery";

const Add = () => {
  const { loading, data: serviceData } = useQuery("service");
  const { loading: nLoading, data: niveauScolariteData } = useQuery(
    "niveauscolarite"
  );

  return (
    <Grid centered>
      <Grid.Column>
        <Segment loading={loading && nLoading}>
          <Card fluid>
            <Card.Content>
              <Card.Header> Add Offer </Card.Header>
            </Card.Content>
            <Card.Content>
              <AddOfferForm
                serviceData={serviceData}
                niveauScolariteData={niveauScolariteData}
              />
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Add;
