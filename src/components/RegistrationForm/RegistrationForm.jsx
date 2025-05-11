import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .matches(
        /^[A-Z][a-zA-Z\s]*$/,
        "The name must start with a capital letter!"
      )
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(10, "Password must be at least 10 characters")
      .required("Password is required"),
  });

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className={css.form_wrapper}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name:
            <Field
              type="text"
              name="name"
              className={css.input}
              autoComplete="name"
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <br />
          <label className={css.label}>
            Email:
            <Field
              type="email"
              name="email"
              className={css.input}
              autoComplete="email"
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <br />
          <label className={css.label}>
            Password:
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          <br />
          <button type="submit" className={css.button}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
