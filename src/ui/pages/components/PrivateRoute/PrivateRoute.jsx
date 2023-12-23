import { useContext } from "react";
import AuthContext from "../../../../context/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return <>{auth.token ? children : <Navigate to={"/"} />}</>;
};

export default PrivateRoute;
