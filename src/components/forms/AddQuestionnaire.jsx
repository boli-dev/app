import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import useMutate from "../../hooks/useMutation";
import Input from "../Input";
import * as Yup from "yup";

const AddVilleSchema = Yup.object().shape({
  libelle: Yup.string().required(),
});

const AddQuestionnaire = ({ offerId }) => {
  const { mutateData, loading } = useMutate();

  return (
    <Formik
      initialValues={{ libelle: "" }}
      validationSchema={AddVilleSchema}
      onSubmit={(values, actions) => {
        mutateData(
          `questionnaire/offer/${offerId}`,
          values,
          "post",
          `/admin/offer/${offerId}/questionnaire`
        );
      }}
    >
      {({ errors, touched }) => (
        <Form className="ui form">
          <Input
            type="text"
            name="libelle"
            placeholder="Questionnaire"
            label="Questionnaire"
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

export default AddQuestionnaire;
