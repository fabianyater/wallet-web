import { useContext } from "react";
import { AccountsContext } from "../../../../../context/AccountsProvider";
import Spinner from "../../../../components/Spinner";

const AccountChecker = ({ children }) => {
  const { hasAccounts, isPending } = useContext(AccountsContext);

  if (isPending) {
    return <Spinner />;
  }

  if (!hasAccounts()) {
    return <h1>Crear cuenta</h1>; // Aquí puedes colocar tu formulario
  }

  return <>{children}</>;
};

export default AccountChecker;
