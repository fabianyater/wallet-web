import { useContext, useEffect } from "react";
import LoginForm from "../../../components/forms/LoginForm";
import AuthContext from "../../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      navigate("/overview");
    }
  }, [auth.token, navigate]);

  return <LoginForm />;
};

export default LoginPage;
