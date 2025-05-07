import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[A-Z][a-zA-Z\s]*$/, "The name must start with a capital letter!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\+\d{10,14}$/, "Format should be like +380971234567")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contacts.items);
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // const handleSubmit = (values, { resetForm, setFieldError }) => {
  //   const isDuplicate = contacts.some(
  //     (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
  //   );

  //   if (isDuplicate) {
  //     setFieldError("name", "Contact with this name already exists.");
  //     return;
  //   }

  //   dispatch(addContact(values));
  //   resetForm();
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.formwrap}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.formwrap}>
          <label htmlFor="number">Number</label>
          <Field type="tel" name="number" id="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.contact}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
