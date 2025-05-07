import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { login } from "../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Email:
          <Field type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <Field type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
