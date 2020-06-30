import React from "react";
import { Grid } from "semantic-ui-react";
import Sidebar from "../../components/Sidebar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

import Ville from "./ville/Index";
import AddVille from "./ville/Add";

import NScolaire from "./niveauxScolaire/Index";
import AddNScolaire from "./niveauxScolaire/Add";

import Service from "./service/Index";
import AddService from "./service/Add";

import Offers from "./offers/Index";
import AddOffer from "./offers/Add";
import EditOffer from "./offers/Edit";

import Questionnaire from "./Questionnaire/Index";
import AddQuestionnaire from "./Questionnaire/Add";
import AddQuestion from "./questions/Add";

import AddReponse from "./reponse/Add";
import Reponse from "./reponse/Index";

const routes = [
  {
    path: "/admin",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/admin/ville",
    exact: true,
    main: () => <Ville />,
  },
  {
    path: "/admin/ville/add",
    exact: true,
    main: () => <AddVille />,
  },
  // niveauscolaire
  {
    path: "/admin/niveauscolaire",
    exact: true,
    main: () => <NScolaire />,
  },
  {
    path: "/admin/niveauscolaire/add",
    exact: true,
    main: () => <AddNScolaire />,
  },
  //service
  {
    path: "/admin/service",
    exact: true,
    main: () => <Service />,
  },
  {
    path: "/admin/service/add",
    exact: true,
    main: () => <AddService />,
  },
  //offres
  {
    path: "/admin/offres",
    exact: true,
    main: () => <Offers />,
  },
  {
    path: "/admin/offres/add",
    exact: true,
    main: () => <AddOffer />,
  },
  {
    path: "/admin/offres/:offerId",
    exact: true,
    main: () => <EditOffer />,
  },
  //questionnaire
  {
    path: "/admin/offer/:offerId/questionnaire",
    exact: true,
    main: () => <Questionnaire />,
  },
  {
    path: "/admin/offer/:offerId/questionnaire/add",
    exact: true,
    main: () => <AddQuestionnaire />,
  },
  //question
  {
    path: "/admin/offer/:offerId/questionnaire/:questionnaireId",
    exact: true,
    main: () => <AddQuestion />,
  },
  //reponse
  {
    path: "/admin/question/:questionId/reponse",
    exact: true,
    main: () => <Reponse />,
  },
  {
    path: "/admin/question/:questionId/reponse/add",
    exact: true,
    main: () => <AddReponse />,
  },
];

const HomeAdmin = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <Sidebar />
        </Grid.Column>
        <Grid.Column celled="true" width={13} className="padd">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomeAdmin;
