import React, { useState } from "react";
import Default from "../layouts/Default";
import Main from "../layouts/Main";
import { Grid, Card, Tab, Form, Button } from "semantic-ui-react";
import Tab1 from "../components/tabs/Tab1";
import http from "../Http";

const Profiel = () => {
  const [state, setState] = useState({
    key: 0,
  });

  const [profiel, setProfiel] = useState({
    loading: false,
    profiel: {},
  });

  const onChange = ({ target }) => {
    setState({
      key: target.value,
    });
  };

  const getProfiel = () => {
    setProfiel({
      loading: true,
    });
    http
      .get(`candidat/${state.key}`)
      .then(({ data }) =>
        setProfiel({
          loading: false,
          profiel: data,
        })
      )
      .catch((e) => {
        console.log(e);
      });
  };

  const panes = [
    {
      menuItem: "Info",
      render: () => (
        <Tab.Pane loading={profiel.loading} className="pane">
          <Tab1 profiel={profiel.profiel} />
        </Tab.Pane>
      ),
    },
    { menuItem: "Questions", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  ];

  console.log(state.key);

  return (
    <Default>
      <Main title="Profiel">
        {profiel.profiel && Object.keys(profiel.profiel).length === 0 && (
          <Form>
            <Form.Field>
              <label>Key</label>
              <input
                name="key"
                type="number"
                value={state.key}
                onChange={onChange}
                placeholder="Key"
              />
            </Form.Field>
            <Button
              loading={profiel.loading}
              onClick={getProfiel}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}

        {profiel.profiel && Object.keys(profiel.profiel).length > 0 && (
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <Card
                  fluid
                  raised
                  image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                />
              </Grid.Column>
              <Grid.Column width={11}>
                <Tab panes={panes} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </Main>
    </Default>
  );
};

export default Profiel;
