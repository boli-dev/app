import React from "react";
import { Table, Dropdown } from "semantic-ui-react";
import Moment from "react-moment";
import useMutate from "../../hooks/useMutation";
import { Link } from "react-router-dom";

const QuestionsTable = ({ data, offerId }) => {
  const { mutateData } = useMutate();
  return (
    <Table singleLine celled compact="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell width="10">Question</Table.HeaderCell>
          <Table.HeaderCell>Reponse</Table.HeaderCell>
          <Table.HeaderCell>Created_at </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data &&
          data.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell> {data.question} </Table.Cell>
              <Table.Cell> {data.qs} </Table.Cell>
              <Table.Cell negative> {data.reponseS.length} </Table.Cell>
              <Table.Cell>
                <Moment fromNow>{data.createdAt}</Moment>
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Dropdown text="File">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() =>
                        mutateData(
                          `question/${data.question}`,
                          null,
                          "delete",
                          `admin/offer/${offerId}/questionnaire`
                        )
                      }
                      icon="trash"
                      text="move to trash"
                    />
                    <Dropdown.Item
                      as={Link}
                      to={`/admin/question/${data.question}/reponse`}
                      icon=""
                      text="Reponse"
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};

export default QuestionsTable;
