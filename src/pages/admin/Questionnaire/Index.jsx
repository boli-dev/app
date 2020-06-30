import React, { useState } from "react";
import Admin from "../../../layouts/Admin";
import QuestionnaireTable from "../../../components/tables/QuestionnaireTable";
import QuestionsTable from "../../../components/tables/QuestionsTable";
import { Segment, Message } from "semantic-ui-react";
import useQuery from "../../../hooks/useQuery";
import { useParams } from "react-router-dom";

const Index = () => {
  const { offerId } = useParams();
  const { loading, data, error } = useQuery(`questionnaire/offer/${offerId}`);
  const [QuestionLoading, setQuestionLoading] = useState(false);

  if (error)
    return (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p> {error} </p>
      </Message>
    );

  return (
    <React.Fragment>
      <Admin
        title="Questionnaire"
        addLink={`/admin/offer/${offerId}/questionnaire/add`}
        error={error}
      >
        <Segment raised loading={loading}>
          {data && data.length == 0 ? (
            <Message info>
              <Message.Header>Info</Message.Header>
              <p> Questionnaire empty </p>
            </Message>
          ) : (
            <QuestionnaireTable
              setQuestionLoading={setQuestionLoading}
              data={data}
            />
          )}
        </Segment>
      </Admin>

      {QuestionLoading && (
        <Admin
          title="Questions"
          addLink={`/admin/offer/${offerId}/questionnaire/${
            data && data[0].questionnaire
          }`}
          error=""
        >
          <Segment raised loading={loading}>
            {data && data[0].question && data[0].question.length == 0 ? (
              <Message info>
                <Message.Header>Info</Message.Header>
                <p> Questions are empty </p>
              </Message>
            ) : (
              <QuestionsTable offerId={offerId} data={data[0].question} />
            )}
          </Segment>
        </Admin>
      )}
    </React.Fragment>
  );
};

export default Index;
