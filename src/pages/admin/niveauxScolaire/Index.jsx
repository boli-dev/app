import React from "react";
import Admin from "../../../layouts/Admin";
import NScolaireTable from "../../../components/tables/NScolaireTable";
import { Segment, Message } from "semantic-ui-react";
import useQuery from "../../../hooks/useQuery";

const Index = () => {
  const { loading, data, error } = useQuery("niveauscolarite");

  if (error)
    return (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p> {error} </p>
      </Message>
    );

  return (
    <Admin
      title="niveaux scolaires"
      addLink="/admin/niveauscolaire/add"
      error={error}
    >
      <Segment raised loading={loading}>
        {data && data.length == 0 ? (
          <Message negative>
            <Message.Header>Error</Message.Header>
            <p> {error} </p>
          </Message>
        ) : (
          <NScolaireTable data={data} />
        )}
      </Segment>
    </Admin>
  );
};

export default Index;
