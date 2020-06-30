import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import useMutate from "../../hooks/useMutation";

const ReponseTable = ({ questionId, data }) => {
  const { mutateData } = useMutate();

  return (
    <Table singleLine celled compact="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell width="10">Libelle</Table.HeaderCell>
          <Table.HeaderCell>TrueOrFalse</Table.HeaderCell>
          <Table.HeaderCell>Created_at </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data &&
          data.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell> {data.reponse} </Table.Cell>
              <Table.Cell> {data.libelle} </Table.Cell>
              <Table.Cell negative>
                <strong> {data.trueFalse ? "True" : "False"} </strong>
              </Table.Cell>
              <Table.Cell>
                <Moment fromNow>{data.createdAt}</Moment>
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Button.Group icon size="tiny">
                  <Button
                    onClick={() =>
                      mutateData(
                        `reponse/${data.reponse}`,
                        null,
                        "delete",
                        `/admin/question/${questionId}/reponse`
                      )
                    }
                  >
                    <Icon name="trash" color="red" />
                  </Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};

export default ReponseTable;
