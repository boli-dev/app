import React from "react";
import Admin from "../../../layouts/Admin";
import ServiceTable from "../../../components/tables/ServiceTable";
import { Segment, Message } from "semantic-ui-react";
import useQuery from "../../../hooks/useQuery";

const Index = () => {
  const { loading, data, error } = useQuery("service");

  if (error)
    return (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p> {error} </p>
      </Message>
    );

  return (
    <Admin title="Services" addLink="/admin/service/add" error={error}>
      <Segment raised loading={loading}>
        {data && data.length == 0 ? (
          <Message negative>
            <Message.Header>Error</Message.Header>
            <p> {error} </p>
          </Message>
        ) : (
          <ServiceTable data={data} />
        )}
      </Segment>
    </Admin>
  );
};

export default Index;
