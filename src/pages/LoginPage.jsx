import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import { logIn } from "../redux/auth/operations";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    dispatch(logIn(formData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/contacts");
      }
    });
  };

  return (
    <div className={css.form}>
      <h1 className={css.text}>Log In</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};
export default LoginPage;
