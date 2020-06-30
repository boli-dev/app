import React from "react";
import { Card, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const CardCom = ({ title, created, service, niveau, offerId }) => {
  return (
    <Card fluid raised color="orange" as={Link} to={`/${offerId}`}>
      <Card.Content>
        <Card.Header> {title} </Card.Header>
        <Card.Meta>
          <span className="date">
            {service} <strong> &middot; </strong> {niveau}
          </span>
        </Card.Meta>
        <Card.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="calendar" />
          <Moment format="YYYY/MM/DD">{created}</Moment>
        </a>
      </Card.Content>
    </Card>
  );
};

export default CardCom;
