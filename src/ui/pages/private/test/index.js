import { useContext } from "react";
import AuthContext from "../../../../context/AuthProvider";

const TestPage = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div>
      <p>iniciaste sesión como: {auth.username} </p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

export default TestPage;