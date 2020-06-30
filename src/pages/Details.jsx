import React from "react";
import Card from "../components/Card";
import useQuery from "../hooks/useQuery";
import { useParams, Link } from "react-router-dom";
import { Loader, Message, Button } from "semantic-ui-react";
import Default from "../layouts/Default";
import Main from "../layouts/Main";

const Details = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(`offres/${id}`);
  if (loading) return <Loader active inline="centered" />;
  if (error)
    return (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p> {error} </p>
      </Message>
    );
  return (
    <Default>
      <Main title="Offer details">
        {data && (
          <Card
            offerId={data.offres}
            title={data.libelle}
            created={data.createdAt}
            service={data.pfaServic && data.pfaServic.libelle}
            niveau={data.niveauScolarite && data.niveauScolarite.libelle}
            key={data.offres}
          />
        )}

        <Button as={Link} to={`/${data.offres}/formulaire`} color="orange">
          Apply
        </Button>
      </Main>
    </Default>
  );
};
export default Details;
