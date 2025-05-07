import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <Field type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <Field type="password" name="password" />
        </label>
        <br />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
