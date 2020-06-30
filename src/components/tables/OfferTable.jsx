import React from "react";
import { Table, Dropdown, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import useMutate from "../../hooks/useMutation";
import { Link } from "react-router-dom";

const OfferTable = ({ data }) => {
  const { mutateData } = useMutate();

  return (
    <Table singleLine celled compact="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell width="10">Offer name</Table.HeaderCell>
          <Table.HeaderCell width="10">Service</Table.HeaderCell>
          <Table.HeaderCell width="10">Niveau scolarite</Table.HeaderCell>
          <Table.HeaderCell>Created_at </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data &&
          data.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell> {data.offres} </Table.Cell>
              <Table.Cell> {data.libelle} </Table.Cell>
              <Table.Cell positive> {data.pfaServic.libelle} </Table.Cell>
              <Table.Cell negative> {data.niveauScolarite.libelle} </Table.Cell>
              <Table.Cell>
                <Moment fromNow>{data.createdAt}</Moment>
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Dropdown text="File">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      icon="trash"
                      text="Move to trash"
                      onClick={() =>
                        mutateData(
                          `offres/${data.offres}`,
                          null,
                          "delete",
                          "/admin/offres"
                        )
                      }
                    />
                    <Dropdown.Item
                      as={Link}
                      to={`/admin/offres/${data.offres}`}
                      icon="edit"
                      text="Edit offer"
                    />
                    <Dropdown.Item
                      as={Link}
                      to={`/admin/offer/${data.offres}/questionnaire`}
                      icon="question"
                      text="Questionnaire"
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

export default OfferTable;
