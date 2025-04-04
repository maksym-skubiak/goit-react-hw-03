import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Це поле обов'язкове"),
    number: Yup.string().required("Це поле обов'язкове"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name:
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Number:
          <Field type="text" name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
