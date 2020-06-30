import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Form as SForm } from "semantic-ui-react";
import useMutate from "../../hooks/useMutation";
import Input from "../Input";
import * as Yup from "yup";

const AddOfferFormSchema = Yup.object().shape({
  libelle: Yup.string().required(),
  niveau_scolarite_niveau_scolarite: Yup.number().required(),
  pfa_servic_pfa_servic: Yup.number().required(),
});

const AddOfferForm = ({ serviceData, niveauScolariteData }) => {
  const { mutateData, loading } = useMutate();

  return (
    <Formik
      initialValues={{
        libelle: "",
        niveau_scolarite_niveau_scolarite: "",
        pfa_servic_pfa_servic: "",
      }}
      validationSchema={AddOfferFormSchema}
      onSubmit={(values, actions) => {
        const {
          pfa_servic_pfa_servic,
          niveau_scolarite_niveau_scolarite,
          libelle,
        } = values;
        mutateData(
          `offres/service/${pfa_servic_pfa_servic}/niveau/${niveau_scolarite_niveau_scolarite}`,
          { libelle },
          "post",
          "/admin/offres"
        );
      }}
    >
      {({ errors, touched }) => (
        <Form className="ui form">
          <Input
            type="text"
            name="libelle"
            placeholder="Ville"
            label="Offer"
            error={errors.libelle}
            touched={touched.libelle}
          />

          <div
            className={`field ${
              errors.pfa_servic_pfa_servic && touched.pfa_servic_pfa_servic
                ? "error"
                : ""
            }`}
          >
            <label>Service</label>
            <Field name="pfa_servic_pfa_servic" component="select">
              <option className="selected item" value="">
                service....
              </option>
              {serviceData &&
                serviceData.map((s, index) => (
                  <option
                    key={index}
                    className="selected item"
                    value={s.pfaServic}
                  >
                    {s.libelle}
                  </option>
                ))}
            </Field>
            <ErrorMessage component="label" name="pfa_servic_pfa_servic" />
          </div>

          <div
            className={`field ${
              errors.niveau_scolarite_niveau_scolarite &&
              touched.niveau_scolarite_niveau_scolarite
                ? "error"
                : ""
            }`}
          >
            <label>Niveaux scolaire</label>
            <Field name="niveau_scolarite_niveau_scolarite" component="select">
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

          <SForm.TextArea
            label="Details"
            placeholder="offer details.........."
          />

          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddOfferForm;
