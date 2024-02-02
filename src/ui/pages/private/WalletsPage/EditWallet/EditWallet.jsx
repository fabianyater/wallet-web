import { useLocation } from "react-router";
import EditWalletForm from "../../../../components/forms/EditWalletForm/EditWalletForm";
const EditWallet = () => {
  const location = useLocation();
  const record = location.state.record;

  return <EditWalletForm dataFromParams={record} />;
};

export default EditWallet;
