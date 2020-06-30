import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import useMutate from "../../hooks/useMutation";
import Input from "../Input";
import * as Yup from "yup";

const AddServiceSchema = Yup.object().shape({
  libelle: Yup.string().required(),
});

const AddServiceForm = () => {
  const { mutateData, loading } = useMutate();

  return (
    <Formik
      initialValues={{ libelle: "" }}
      validationSchema={AddServiceSchema}
      onSubmit={(values, actions) => {
        mutateData("service", values, "post", "/admin/service");
      }}
    >
      {({ errors, touched }) => (
        <Form className="ui form">
          <Input
            type="text"
            name="libelle"
            placeholder="Service"
            label="Service"
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

export default AddServiceForm;
