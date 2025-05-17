import { useNavigate } from "react-router-dom";
import NewLogin from "../components/NewLogin";
import Register from "../components/Register";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = (token) => {
    localStorage.setItem("token", token);
    navigate("/home");
  };

  const handleRegisterSuccess = () => {
    navigate("/login");
  };

  const [isLogin, setIsLogin] = useState(true);
  const [isSuccessRegister, setIsSuccessRegister] = useState(false);

  function handleLoginRegister() {
    setIsSuccessRegister(false);
    setIsLogin((prev) => !prev);
  }

  return (
    <>
      {isLogin ? (
        <NewLogin
          loginRegister={isLogin}
          onLoginRegister={handleLoginRegister}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <Register
          loginRegister={isLogin}
          onRegisterSuccess={handleRegisterSuccess}
          onLoginRegister={handleLoginRegister}
          isSuccessRegister={isSuccessRegister}
          handleSuccessRegistration={() =>
            setIsSuccessRegister((prev) => !prev)
          }
        />
      )}
    </>
  );
}
