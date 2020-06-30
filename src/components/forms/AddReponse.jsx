import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "semantic-ui-react";
import useMutate from "../../hooks/useMutation";
import Input from "../Input";
import * as Yup from "yup";

const AddReponseSchema = Yup.object().shape({
  libelle: Yup.string().required(),
  trueFalse: Yup.string().required(),
});

const AddReponseForm = ({ questionId }) => {
  const { mutateData, loading } = useMutate();
  return (
    <Formik
      initialValues={{ libelle: "", trueFalse: "" }}
      validationSchema={AddReponseSchema}
      onSubmit={(values, actions) => {
        const { libelle, trueFalse } = values;
        mutateData(
          `reponse/question/${questionId}`,
          values,
          "post",
          `/admin/question/${questionId}/reponse`
        );
      }}
    >
      {({ errors, touched }) => (
        <Form className="ui form">
          <Input
            type="text"
            name="libelle"
            placeholder="Libelle"
            label="Libelle"
            error={errors.libelle}
            touched={touched.libelle}
          />

          <div
            className={`field ${
              errors.trueFalse && touched.trueFalse ? "error" : ""
            }`}
          >
            <label>trueOrFalse</label>
            <Field name="trueFalse" component="select">
              <option className="selected item" value="">
                .................
              </option>
              <option className="item" value="true">
                true
              </option>
              <option className="item" value="false">
                false
              </option>
            </Field>
            <ErrorMessage component="label" name="trueFalse" />
          </div>

          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddReponseForm;
