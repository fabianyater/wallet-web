import { useContext } from "react";
import { AccountsContext } from "../../../../../context/AccountsProvider";
import Spinner from "../../../../components/Spinner";
import CreateFirstAccountPage from "../../../../pages/private/CreateFirstAccountPage";

const AccountChecker = ({ children }) => {
  const { hasAccounts, isPending } = useContext(AccountsContext);

  if (isPending) {
    return <Spinner />;
  }

  if (!hasAccounts()) {
    return <CreateFirstAccountPage />; // Aquí puedes colocar tu formulario
  }

  return <>{children}</>;
};

export default AccountChecker;
