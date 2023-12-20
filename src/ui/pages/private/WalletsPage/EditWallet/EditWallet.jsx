import { useLocation } from "react-router";
const EditWallet = () => {
  const location = useLocation();
  const record = location.state.record;

  return <h1>Comming soon...</h1>;
};

export default EditWallet;
