import React from "react";
import Admin from "../../../layouts/Admin";
import ReponseTable from "../../../components/tables/ReponseTable";
import { Segment, Message } from "semantic-ui-react";
import useQuery from "../../../hooks/useQuery";
import { useParams } from "react-router-dom";

const Index = () => {
  const { questionId } = useParams();
  const { loading, data, error } = useQuery(`reponse/question/${questionId}`);

  if (error)
    return (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p> {error} </p>
      </Message>
    );

  return (
    <Admin
      title="Reponses"
      addLink={`/admin/question/${questionId}/reponse/add`}
      error={error}
    >
      <Segment raised loading={loading}>
        {data && data.length == 0 ? (
          <Message info>
            <Message.Header>Info</Message.Header>
            <p> reponse are emty for this question </p>
          </Message>
        ) : (
          <ReponseTable questionId={questionId} data={data} />
        )}
      </Segment>
    </Admin>
  );
};

export default Index;
