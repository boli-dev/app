import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import { Segment, Card, List, Icon, Checkbox, Button } from "semantic-ui-react";

const Questions = () => {
  const history = useHistory();
  const { id } = useParams();
  const [state, setState] = useState(false);
  const { loading, data } = useQuery(`questionnaire/offer/${id}`);

  return (
    <Segment loading={loading}>
      {data &&
        data.length > 0 &&
        data.map((q, i) => (
          <Card fluid key={i}>
            <Card.Content>
              <Card.Header> {q.libelle} </Card.Header>
            </Card.Content>
            <Card.Content>
              {q.question &&
                q.question.length > 0 &&
                q.question.map((q, i) => (
                  <List key={i}>
                    <List.Item as="a">
                      <Icon name="help" />
                      <List.Content>
                        <List.Header> {q.qs} </List.Header>
                        <List.Description>
                          {q.reponseS &&
                            q.reponseS.length > 0 &&
                            q.reponseS.map((r, i) => (
                              <React.Fragment>
                                <Checkbox
                                  key={i}
                                  label={r.libelle}
                                  name={r.libelle}
                                  id={r.reponse}
                                />
                                <br />
                              </React.Fragment>
                            ))}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                ))}
            </Card.Content>
            <Card.Content extra>
              <Button
                loading={state}
                onClick={() => {
                  setState(true);
                  setTimeout(() => {
                    setState(false);
                    history.push("/");
                  }, 1000);
                }}
              >
                Submit
              </Button>
            </Card.Content>
          </Card>
        ))}
    </Segment>
  );
};

export default Questions;
