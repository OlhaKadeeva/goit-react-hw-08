import RegistrationForm from "./RegistrationForm";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={css.wraper}>
      <h1 className={css.text}>Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
