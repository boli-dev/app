import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import useMutate from "../../hooks/useMutation";

const ServiceTable = ({ data }) => {
  const { mutateData } = useMutate();

  return (
    <Table singleLine celled compact="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell width="10">Service name</Table.HeaderCell>
          <Table.HeaderCell>Created_at </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data &&
          data.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell> {data.pfaServic} </Table.Cell>
              <Table.Cell> {data.libelle} </Table.Cell>
              <Table.Cell>
                <Moment fromNow>{data.createdAt}</Moment>
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Button.Group icon size="tiny">
                  <Button
                    onClick={() =>
                      mutateData(
                        `service/${data.pfaServic}`,
                        null,
                        "delete",
                        "/admin/service"
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

export default ServiceTable;
