import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values)); // values = { name, email, password }
    resetForm();
  };

  return (
    <div className={css.form_wrapper}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name:
            <Field type="text" name="name" className={css.input} />
          </label>
          <br />
          <label className={css.label}>
            Email:
            <Field type="email" name="email" className={css.input} />
          </label>
          <br />
          <label className={css.label}>
            Password:
            <Field type="password" name="password" className={css.input} />
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
