import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AccountsContext } from "../../../../../context/AccountsProvider";
import AuthContext from "../../../../../context/AuthProvider";
import { getWallets } from "../../../../../services/endpoints/wallets";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import { columns } from "./tableColumns";

const ListWallets = () => {
  const { auth } = useContext(AuthContext);
  const { selectedAccount } = useContext(AccountsContext);
  const { data, isPending, isError } = useQuery({
    queryKey: ["wallets", selectedAccount],
    queryFn: () => getWallets(selectedAccount, auth.token),
    refetchOnWindowFocus: false
  });

  const wallets = data?.data || [];

  return (
    <CustomTable
      rowKey={"walletId"}
      isLoading={isPending}
      size={"large"}
      data={wallets}
      columns={columns}
      path={"wallets/edit"}
      footer={
        <h1 style={{ color: "#fff", margin: 0 }}>
          Mostrando {wallets.length} resultados
        </h1>
      }
    />
  );
};

export default ListWallets;
