import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import UpdateOfferForm from "../../../components/forms/UpdateOffer";
import useQuery from "../../../hooks/useQuery";
import { useParams } from "react-router-dom";

const Add = () => {
  const { offerId } = useParams();
  const { data, loading: offerLoading } = useQuery(`offres/${offerId}`);
  const { loading, data: serviceData } = useQuery("service");
  const { loading: nLoading, data: niveauScolariteData } = useQuery(
    "niveauscolarite"
  );

  return (
    <Grid centered>
      <Grid.Column>
        <Segment loading={loading && nLoading && offerLoading}>
          <Card fluid>
            <Card.Content>
              <Card.Header> Update Offer </Card.Header>
            </Card.Content>
            <Card.Content>
              <UpdateOfferForm
                offerId={offerId}
                offer={data}
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
