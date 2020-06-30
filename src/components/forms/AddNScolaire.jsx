import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import useMutate from "../../hooks/useMutation";
import Input from "../Input";
import * as Yup from "yup";

const AddNScolaireSchema = Yup.object().shape({
  libelle: Yup.string().required(),
});

const AddNScolaire = () => {
  const { mutateData, loading } = useMutate();

  return (
    <Formik
      initialValues={{ libelle: "" }}
      validationSchema={AddNScolaireSchema}
      onSubmit={(values, actions) => {
        mutateData("niveauscolarite", values, "post", "/admin/niveauscolaire");
      }}
    >
      {({ errors, touched }) => (
        <Form className="ui form">
          <Input
            type="text"
            name="libelle"
            placeholder="Niveau scolaire"
            label="niveau scolaire"
            error={errors.libelle}
            touched={touched.libelle}
          />

          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddNScolaire;
