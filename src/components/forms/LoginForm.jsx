import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import authContext from "../../context/auth/authContext";
import Input from "../Input";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(4).required(),
  password: Yup.string().min(6).required(),
});

const LoginForm = () => {
  const {
    login,
    state: { loading },
  } = useContext(authContext);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        login(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="ui form">
          <Input
            type="text"
            name="username"
            placeholder="Username"
            label="Username"
            error={errors.username}
            touched={touched.username}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            error={errors.password}
            touched={touched.password}
          />

          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
