import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import useMutate from "../../hooks/useMutation";

const VillesTable = ({ data }) => {
  const { mutateData } = useMutate();

  return (
    <Table singleLine celled compact="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell width="10">Ville name</Table.HeaderCell>
          <Table.HeaderCell>Created_at </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data &&
          data.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell> {data.ville} </Table.Cell>
              <Table.Cell> {data.libelle} </Table.Cell>
              <Table.Cell>
                <Moment fromNow>{data.createdAt}</Moment>
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Button.Group icon size="tiny">
                  <Button
                    onClick={() =>
                      mutateData(
                        `ville/${data.ville}`,
                        null,
                        "delete",
                        "/admin/ville"
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

export default VillesTable;
