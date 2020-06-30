import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = ({ label, placeholder, name, type, error, touched }) => {
  return (
    <React.Fragment>
      <div className={`field ${error && touched && "error"}`}>
        <label htmlFor="form-input-first-name">{label}</label>
        <Field
          className="ui fluid input"
          type={type}
          name={name}
          placeholder={placeholder}
        />
        <ErrorMessage component="label" name={name} />
      </div>
    </React.Fragment>
  );
};

export default Input;
