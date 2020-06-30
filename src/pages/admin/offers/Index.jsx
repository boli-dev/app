import React from "react";
import Admin from "../../../layouts/Admin";
import OfferTable from "../../../components/tables/OfferTable";
import { Segment, Message } from "semantic-ui-react";
import useQuery from "../../../hooks/useQuery";

const Index = () => {
  const { loading, data, error } = useQuery("offres");

  if (error)
    return (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p> {error} </p>
      </Message>
    );

  return (
    <Admin title="Offers" addLink="/admin/offres/add" error={error}>
      <Segment raised loading={loading}>
        {data && data.length == 0 ? (
          <Message info>
            <Message.Header>Info</Message.Header>
            <p> Offers are emty </p>
          </Message>
        ) : (
          <OfferTable data={data} />
        )}
      </Segment>
    </Admin>
  );
};

export default Index;
