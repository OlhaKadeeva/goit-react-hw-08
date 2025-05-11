import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(7, "Minimum 7 characters").required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div className={css.form_wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form autoComplete="off" className={css.login_container}>
          <label className={css.label}>
            Email:
            <Field
              type="email"
              name="email"
              className={css.imput}
              autoComplete="email"
              required
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <br />
          <label className={css.label}>
            Password:
            <Field
              type="password"
              name="password"
              className={css.imput}
              autoComplete="current-password"
              required
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          <br />
          <button type="submit" className={css.button}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
