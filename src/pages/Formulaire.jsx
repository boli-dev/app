import React, { useState } from "react";
import Default from "../layouts/Default";
import Main from "../layouts/Main";
import Step from "../components/Step";
import AddInfoPersoForm from "../components/forms/AddInfoPerso";
import AddDiplomeForm from "../components/forms/AddDiplome";
import AddCertificatForm from "../components/forms/AddCertificat";
import AddExperienceForm from "../components/forms/AddExperience";
import Confirmation from "../components/Confirmation";
import { Card, Button, Form } from "semantic-ui-react";
import useMutation from "../hooks/useMutation";
import { useParams } from "react-router-dom";
import Questions from "../components/Questions";

const steps = [
  {
    step: 1,
    title: "Info perso",
    description: "enter your personal info",
    icon: "info",
    component: ({ nextstep }) => <AddInfoPersoForm nextstep={nextstep} />,
  },
  {
    step: 2,
    title: "Les diplomes",
    description: "your diplome",
    icon: "graduation cap",
    component: ({ nextstep }) => <AddDiplomeForm nextstep={nextstep} />,
  },
  {
    step: 3,
    title: "Les certificats",
    description: "your certificat",
    icon: "certificate",
    component: ({ nextstep }) => <AddCertificatForm nextstep={nextstep} />,
  },
  {
    step: 4,
    title: "Les experiences",
    description: "your experience",
    icon: "expand arrows alternate",
    component: ({ nextstep }) => <AddExperienceForm nextstep={nextstep} />,
  },
  {
    step: 5,
    title: "Confirmation",
    description: "confirm you apply",
    icon: "cog",
    component: ({ nextstep }) => <Confirmation nextstep={nextstep} />,
  },
  {
    step: 6,
    title: "Questions",
    description: "test you noledg",
    icon: "question",
    component: () => <Questions />,
  },
];

const Formulaire = () => {
  const { id } = useParams();
  const { loading, mutateData } = useMutation();
  const [key, setKey] = useState(0);
  const [question, setQuestion] = useState(false);
  const [state, setState] = useState({
    status: "",
    show: true,
    form: false,
  });

  const onChange = ({ target }) => {
    setKey(target.value);
  };

  return (
    <Default>
      <Main title="Formulaire">
        {state.show && (
          <Card fluid>
            <Card.Content>
              <Card.Header>are you already have a form ?</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="green"
                  onClick={() => setState({ status: "deja" })}
                >
                  Yes
                </Button>
                <Button
                  basic
                  color="red"
                  onClick={() => setState({ status: "no" })}
                >
                  No
                </Button>
              </div>
            </Card.Content>
          </Card>
        )}

        {state.status === "no" && <Step steps={steps} />}
        {state.status === "deja" && (
          <Card fluid>
            <Card.Content>
              <Card.Header>You whant to apply to this offer ?</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="green"
                  onClick={() => setState({ form: true })}
                >
                  Yes
                </Button>
                <Button
                  basic
                  color="red"
                  onClick={() => setState({ show: true })}
                >
                  No
                </Button>
              </div>
            </Card.Content>
          </Card>
        )}
        {state.form && (
          <Card fluid>
            <Card.Content>
              <Card.Header>You whant to apply to this offer ?</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Form>
                <Form.Field>
                  <label>Your Key</label>
                  <input
                    onChange={onChange}
                    placeholder="key"
                    name="key"
                    value={key}
                    type="number"
                  />
                </Form.Field>
                <Button
                  loading={loading}
                  onClick={() => {
                    setQuestion(true);
                    mutateData(
                      `candidatoffres/candidat/${key}/offer/${id}`,
                      null,
                      "post",
                      `/${id}/formulaire`
                    );
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        )}

        {question && <Questions />}
      </Main>
    </Default>
  );
};

export default Formulaire;
