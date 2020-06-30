import React from "react";
import Admin from "../../../layouts/Admin";
import VillesTable from "../../../components/tables/VillesTable";
import { Segment, Message } from "semantic-ui-react";
import useQuery from "../../../hooks/useQuery";

const Index = () => {
  const { loading, data, error } = useQuery("ville");

  if (error)
    return (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p> {error} </p>
      </Message>
    );

  return (
    <Admin title="Villes" addLink="/admin/ville/add" error={error}>
      <Segment raised loading={loading}>
        {data && data.length == 0 ? (
          <Message negative>
            <Message.Header>Error</Message.Header>
            <p> {error} </p>
          </Message>
        ) : (
          <VillesTable data={data} />
        )}
      </Segment>
    </Admin>
  );
};

export default Index;
