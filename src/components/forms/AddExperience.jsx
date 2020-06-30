import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Button, Segment, Card } from "semantic-ui-react";
import Input from "../Input";
import * as Yup from "yup";
import FormulaireContext from "../../context/formulaire/FormulaireContext";

const AddExperienceSchema = Yup.object().shape({
  dateFin: Yup.date().required(),
  dateDebut: Yup.date().required(),
  libelee: Yup.string().required(),
});

const AddExperienceForm = ({ nextstep }) => {
  const {
    addExperience,
    state: { loading },
  } = useContext(FormulaireContext);
  return (
    <Formik
      initialValues={{
        dateDebut: "",
        dateFin: "",
        libelee: "",
      }}
      validationSchema={AddExperienceSchema}
      onSubmit={(values, actions) => {
        const { dateDebut, dateFin, libelee } = values;
        addExperience(
          {
            dateDebut,
            dateFin,
            libelee,
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
                  name="libelee"
                  placeholder="Experience"
                  label="experience"
                  error={errors.libelee}
                  touched={touched.libelee}
                />

                <Input
                  type="date"
                  name="dateDebut"
                  placeholder="Date debut"
                  label="Date debut"
                  error={errors.dateDebut}
                  touched={touched.dateDebut}
                />

                <Input
                  type="date"
                  name="dateFin"
                  placeholder="Date fin"
                  label="Date fin"
                  error={errors.dateFin}
                  touched={touched.dateFin}
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

export default AddExperienceForm;
