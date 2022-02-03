import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Auth(props) {
  const { onCloseModal, setTitleModal, setSize } = props;
  const [showLogin, setshowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal("Inicia sesión");
    setSize("tiny");
    setshowLogin(true);
  };
  const showRegisterForm = () => {
    setTitleModal("Crear nuevo usuario");
    setSize("large");
    setshowLogin(false);
  };

  return showLogin ? (
    <LoginForm
      showRegisterForm={showRegisterForm}
      onCloseModal={onCloseModal}
    />
  ) : (
    <RegisterForm showLoginForm={showLoginForm} />
  );
}
