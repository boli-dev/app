import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import OffersState from "./context/offers/OffersState";
import FormulaireState from "./context/formulaire/FormulaireState";
import App from "./App";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

render(
  <Router>
    <AuthState>
      <OffersState>
        <FormulaireState>
          <App />
        </FormulaireState>
      </OffersState>
    </AuthState>
  </Router>,
  document.getElementById("root")
);
