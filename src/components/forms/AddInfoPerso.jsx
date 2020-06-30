import React, { useContext } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Button, Segment, Card } from "semantic-ui-react";
import Input from "../Input";
import * as Yup from "yup";
import useQuery from "../../hooks/useQuery";
import FormulaireContext from "../../context/formulaire/FormulaireContext";

const AddInfoPersoSchema = Yup.object().shape({
  birthday: Yup.string().required(),
  email: Yup.string().email().required(),
  nom: Yup.string().required(),
  prenom: Yup.string().required(),
  niveau_scolarite_niveau_scolarite: Yup.number().required(),
  ville_ville: Yup.number().required(),
});

const AddInfoPersoForm = ({ nextstep }) => {
  const {
    addFormulaire,
    state: { loading },
  } = useContext(FormulaireContext);
  const { loading: vLoading, data: villeData } = useQuery("ville");
  const { loading: nLoading, data: niveauScolariteData } = useQuery(
    "niveauscolarite"
  );
  return (
    <Formik
      initialValues={{
        birthday: "",
        email: "",
        nom: "",
        prenom: "",
        niveau_scolarite_niveau_scolarite: "",
        ville_ville: "",
      }}
      validationSchema={AddInfoPersoSchema}
      onSubmit={(values, actions) => {
        const {
          birthday,
          email,
          nom,
          prenom,
          niveau_scolarite_niveau_scolarite,
          ville_ville,
        } = values;
        addFormulaire(
          {
            birthday,
            email,
            nom,
            prenom,
            niveauScolarite: {
              niveauScolarite: niveau_scolarite_niveau_scolarite,
            },
            ville: {
              ville: ville_ville,
            },
          },
          nextstep
        );
      }}
    >
      {({ errors, touched }) => (
        <Segment loading={(vLoading && nLoading) || loading}>
          <Card fluid>
            <Card.Content>
              <Form className="ui form">
                <Input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  label="Nom"
                  error={errors.nom}
                  touched={touched.nom}
                />

                <Input
                  type="text"
                  name="prenom"
                  placeholder="Prenom"
                  label="Prenom"
                  error={errors.prenom}
                  touched={touched.prenom}
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  label="Email"
                  error={errors.email}
                  touched={touched.email}
                />

                <Input
                  type="date"
                  name="birthday"
                  placeholder="Date de naissance"
                  label="Date de naissance"
                  error={errors.birthday}
                  touched={touched.birthday}
                />

                <div
                  className={`field ${
                    errors.niveau_scolarite_niveau_scolarite &&
                    touched.niveau_scolarite_niveau_scolarite
                      ? "error"
                      : ""
                  }`}
                >
                  <label>Niveaux scolaire</label>
                  <Field
                    name="niveau_scolarite_niveau_scolarite"
                    component="select"
                  >
                    <option className="selected item" value="">
                      niveaux scolaire....
                    </option>
                    {niveauScolariteData &&
                      niveauScolariteData.map((n, index) => (
                        <option
                          key={index}
                          className="item"
                          value={n.niveauScolarite}
                        >
                          {n.libelle}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage
                    component="label"
                    name="niveau_scolarite_niveau_scolarite"
                  />
                </div>

                <div
                  className={`field ${
                    errors.ville_ville && touched.ville_ville ? "error" : ""
                  }`}
                >
                  <label>Ville</label>
                  <Field name="ville_ville" component="select">
                    <option className="selected item" value="">
                      ..........
                    </option>
                    {villeData &&
                      villeData.map((n, index) => (
                        <option key={index} className="item" value={n.ville}>
                          {n.libelle}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage component="label" name="ville_ville" />
                </div>

                <Button loading={loading} type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Segment>
      )}
    </Formik>
  );
};

export default AddInfoPersoForm;
