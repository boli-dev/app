import React, { useContext } from "react";
import Default from "../layouts/Default";
import Card from "../components/Card";
import { Grid, Loader, Message } from "semantic-ui-react";
import Main from "../layouts/Main";
import OfferContext from "../context/offers/OffersContext";
import useQuery from "../hooks/useQuery";

const Home = () => {
  const {
    state: { offers, loading },
  } = useContext(OfferContext);
  const { loading: tLoading, data: tData } = useQuery("offres/top");

  return (
    <Default>
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <Main title="Offers">
              {loading || tLoading ? (
                <Loader active inline="centered" />
              ) : (
                <React.Fragment>
                  {offers && offers.length == 0 ? (
                    <Message info>
                      <Message.Header>Info</Message.Header>
                      <p> Offers are emty </p>
                    </Message>
                  ) : (
                    <React.Fragment>
                      {offers &&
                        offers.map((o, index) => (
                          <Card
                            offerId={o.offres}
                            title={o.libelle}
                            created={o.createdAt}
                            service={o.pfaServic && o.pfaServic.libelle}
                            niveau={
                              o.niveauScolarite && o.niveauScolarite.libelle
                            }
                            key={index}
                          />
                        ))}
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </Main>
          </Grid.Column>
          <Grid.Column width={5}>
            <Main title="Famouse Offers">
              {tData &&
                tData.map((t, i) => (
                  <Card
                    offerId={t.offres}
                    title={t.libelle}
                    created={t.createdAt}
                    service={t.pfaServic && t.pfaServic.libelle}
                    niveau={t.niveauScolarite && t.niveauScolarite.libelle}
                    key={i}
                  />
                ))}
            </Main>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Default>
  );
};

export default Home;
