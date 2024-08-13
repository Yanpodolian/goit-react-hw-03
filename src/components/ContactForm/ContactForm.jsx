import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be less than 50 characters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className={css.form}>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Number
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <button className={css.buttonAddcontact} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
