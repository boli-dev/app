import React, { useContext } from "react";
import { Header, Icon, Segment, Button, Label } from "semantic-ui-react";
import FormulaireContext from "../context/formulaire/FormulaireContext";
import { useParams, Link } from "react-router-dom";

const Confirmation = ({ nextstep }) => {
  const { id } = useParams();
  const {
    confirmation,
    state: { loading, key },
  } = useContext(FormulaireContext);

  return (
    <Segment textAlign="center">
      <div className="Spadding">
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>Confirme your Apply</Header.Content>
          <Header.Subheader>
            Click confirm, to get profiel key.
          </Header.Subheader>
        </Header>
        {key && (
          <React.Fragment>
            <Label size="large" style={{ marginBottom: 15 }}>
              <Icon name="key" />
              <Label.Detail>
                <strong style={{ color: "red" }}> {key} </strong>
              </Label.Detail>
            </Label>
            <br />
            <Button onClick={() => nextstep()}>Go</Button>
          </React.Fragment>
        )}

        {!key && (
          <Button loading={loading} onClick={() => confirmation(id)}>
            Confirm
          </Button>
        )}
      </div>
    </Segment>
  );
};

export default Confirmation;
