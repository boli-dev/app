import React from "react";
import { Switch, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";
import Home from "./pages/Home";
import Toolbar from "./components/Toolbar";
import Login from "./pages/Login";
import Admin from "./pages/admin/Index";
import Details from "./pages/Details";
import Formulaire from "./pages/Formulaire";
import Profiel from "./pages/Profiel";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Toolbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profiel" component={Profiel} />
          <Route exact path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route exact path="/:id" component={Details} />
          <Route exact path="/:id/formulaire" component={Formulaire} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
