import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Button, Segment, Card } from "semantic-ui-react";
import Input from "../Input";
import * as Yup from "yup";
import FormulaireContext from "../../context/formulaire/FormulaireContext";

const AddCertificatSchema = Yup.object().shape({
  birthday: Yup.string().required(),
  libelle: Yup.string().required(),
});

const AddCertificatForm = ({ nextstep }) => {
  const {
    addCertificat,
    state: { loading, formulaire },
  } = useContext(FormulaireContext);
  return (
    <Formik
      initialValues={{
        birthday: "",
        libelle: "",
      }}
      validationSchema={AddCertificatSchema}
      onSubmit={(values, actions) => {
        const { birthday, libelle } = values;
        addCertificat(
          {
            libelle: libelle,
            birthday: birthday,
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
                  name="libelle"
                  placeholder="Certificat"
                  label="Certificat"
                  error={errors.libelle}
                  touched={touched.libelle}
                />

                <Input
                  type="date"
                  name="birthday"
                  placeholder="Date d'obtation"
                  label="Date d'obtation"
                  error={errors.birthday}
                  touched={touched.birthday}
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

export default AddCertificatForm;
