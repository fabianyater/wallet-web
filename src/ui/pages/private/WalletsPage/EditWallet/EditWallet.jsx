import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../../../../context/AuthProvider";
import { getWalletDetails } from "../../../../../services/endpoints/wallets";
import EditWalletForm from "../../../../components/forms/EditWalletForm/EditWalletForm";
import CreditCardDetails from "../../../components/CreditCardDetails/CreditCardDetails";
const EditWallet = () => {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const { data, isFetching } = useQuery({
    queryKey: ["wallets"],
    queryFn: () => getWalletDetails(id, auth.token),
    refetchOnWindowFocus: false,
  });

  const walletData = data?.data;

  return (
    <>
      {walletData?.type === "creditCard" ? (
        <CreditCardDetails
          balance={walletData.balance}
          creditLimit={walletData.creditLimit}
          name={walletData.name}
        />
      ) : null}
      <EditWalletForm id={id} data={walletData} isFetching={isFetching} />
    </>
  );
};

export default EditWallet;
