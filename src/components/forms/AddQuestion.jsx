import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import useMutate from "../../hooks/useMutation";
import Input from "../Input";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

const AddVilleSchema = Yup.object().shape({
  qs: Yup.string().required(),
});

const AddQuestion = ({ questionnaireId, offerId }) => {
  const { mutateData, loading } = useMutate();

  return (
    <Formik
      initialValues={{ libelle: "" }}
      validationSchema={AddVilleSchema}
      onSubmit={(values, actions) => {
        const { qs } = values;
        mutateData(
          "question",
          {
            qs,
            questionnaire: { questionnaire: questionnaireId },
          },
          "post",
          `/admin/offer/${offerId}/questionnaire`
        );
      }}
    >
      {({ errors, touched }) => (
        <Form className="ui form">
          <Input
            type="text"
            name="qs"
            placeholder="Question"
            label="Question"
            error={errors.qs}
            touched={touched.qs}
          />

          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddQuestion;
