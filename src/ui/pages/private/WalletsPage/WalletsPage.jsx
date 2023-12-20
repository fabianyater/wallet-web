import { useNavigate } from "react-router";
import ContentLayout from "../../../layouts/ContentLayout/ContentLayout";

const WalletsPage = () => {
  const navigate = useNavigate();

  return (
    <ContentLayout
      title={"Billeteras"}
      buttonTitle={"Nueva billetera"}
      icon={"plus"}
      type={"button"}
      text={"Nueva billetera"}
      onClick={() => navigate("/wallets/create")}
    ></ContentLayout>
  );
};

export default WalletsPage;
