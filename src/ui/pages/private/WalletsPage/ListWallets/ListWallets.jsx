import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AccountsContext } from "../../../../../context/AccountsProvider";
import AuthContext from "../../../../../context/AuthProvider";
import { PaginationContext } from "../../../../../context/PaginationProvider";
import { getWallets } from "../../../../../services/endpoints/wallets";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import { columns } from "./tableColumns";

const ListWallets = () => {
  const { auth } = useContext(AuthContext);
  const { current, onChange } = useContext(PaginationContext);
  const { selectedAccount } = useContext(AccountsContext);
  const { data, isPending, isError } = useQuery({
    queryKey: ["wallets", selectedAccount, current],
    queryFn: () => getWallets(selectedAccount, current, 10, auth.token),
    refetchOnWindowFocus: false,
  });

  const wallets = data?.data.wallets || [];
  const pagination = data?.data || [];

  return (
    <CustomTable
      rowKey={"walletId"}
      isLoading={isPending}
      size={"large"}
      data={wallets}
      columns={columns}
      path={"wallets/edit"}
      total={pagination.totalItems}
      page={current}
      onChange={onChange}
    />
  );
};

export default ListWallets;
