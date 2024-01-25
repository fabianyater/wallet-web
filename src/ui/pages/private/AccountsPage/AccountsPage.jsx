import { useNavigate } from "react-router-dom";
import ContentLayout from "../../../layouts/ContentLayout/ContentLayout";

const AccountsPage = () => {
  const navigate = useNavigate();

  return (
    <ContentLayout
      title={"Cuentas"}
      buttonTitle={"Nueva cuenta"}
      icon={"plus"}
      type={"button"}
      text={"Nueva cuenta"}
      onClick={() => navigate("/accounts/create")}
    ></ContentLayout>
  );
};

export default AccountsPage;
