import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Button, Segment, Card } from "semantic-ui-react";
import Input from "../Input";
import * as Yup from "yup";
import FormulaireContext from "../../context/formulaire/FormulaireContext";

const AddDiplomeSchema = Yup.object().shape({
  dateObt: Yup.date().required(),
  nom_unive: Yup.string().required(),
});

const AddDiplomeForm = ({ nextstep }) => {
  const {
    addDiplome,
    state: { loading, formulaire },
  } = useContext(FormulaireContext);
  return (
    <Formik
      initialValues={{
        dateObt: "",
        nom_unive: "",
      }}
      validationSchema={AddDiplomeSchema}
      onSubmit={(values, actions) => {
        const { dateObt, nom_unive } = values;
        addDiplome(
          {
            nom_unive,
            dateObt,
            formulaire: {
              formulaire: localStorage.getItem("formulaire"),
            },
          },
          nextstep
        );
      }}
    >
      {({ errors, touched }) => (
        <Segment loading={loading}>
          <Card fluid>
            <Card.Content>
              <Form className="ui form">
                <Input
                  type="text"
                  name="nom_unive"
                  placeholder="Nom d'université"
                  label="Nom d'université"
                  error={errors.nom_unive}
                  touched={touched.nom_unive}
                />

                <Input
                  type="date"
                  name="dateObt"
                  placeholder="Date d'obtation"
                  label="Date d'obtation"
                  error={errors.dateObt}
                  touched={touched.dateObt}
                />

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

export default AddDiplomeForm;
