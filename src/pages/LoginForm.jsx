import { Formik, Form, Field } from "formik";

import css from "./LoginForm.module.css";

export default function LoginForm({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form autoComplete="off" className={css.login_container}>
        <label>
          Email:
          <Field type="email" name="email" className={css.imput} required />
        </label>
        <br />
        <label>
          Password:
          <Field
            type="password"
            name="password"
            className={css.imput}
            required
          />
        </label>
        <br />
        <button type="submit" className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
