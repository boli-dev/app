import React from "react";
import { Table, Dropdown } from "semantic-ui-react";
import Moment from "react-moment";

const QuestionnaireTable = ({ setQuestionLoading, data }) => {
  return (
    <Table singleLine celled compact="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell width="10">Questionnaire name</Table.HeaderCell>
          <Table.HeaderCell>Questions</Table.HeaderCell>
          <Table.HeaderCell>Created_at </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data &&
          data.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell> {data.questionnaire} </Table.Cell>
              <Table.Cell> {data.libelle} </Table.Cell>
              <Table.Cell negative> {data.question.length} </Table.Cell>
              <Table.Cell>
                <Moment fromNow>{data.createdAt}</Moment>
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Dropdown text="File">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => setQuestionLoading(true)}
                      icon="question"
                      text="Question"
                    />
                    <Dropdown.Divider />
                    <Dropdown.Item text="Download As..." />
                  </Dropdown.Menu>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};

export default QuestionnaireTable;
