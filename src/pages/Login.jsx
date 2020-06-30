import React, { useContext } from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import LoginForm from "../components/forms/LoginForm";
import authContext from "../context/auth/authContext";

const Login = () => {
  const {
    state: { loading },
  } = useContext(authContext);

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Segment loading={loading}>
          <Card fluid>
            <Card.Content>
              <Card.Header> Login </Card.Header>
            </Card.Content>
            <Card.Content>
              <LoginForm />
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
