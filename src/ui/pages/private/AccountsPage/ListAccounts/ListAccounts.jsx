import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import AuthContext from "../../../../../context/AuthProvider";
import { getAccounts } from "../../../../../services/endpoints/accounts";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import { tableColums } from "../tableColumns";

const ListAccounts = () => {
  const { auth } = useContext(AuthContext);
  const { data, isPending, isError } = useQuery({
    queryKey: ["accounts"],
    queryFn: () => getAccounts(auth.userId, auth.token),
    refetchOnWindowFocus: false,
  });

  const accounts = data?.data || [];

  return (
    <CustomTable
      data={accounts}
      rowKey="accountId"
      isLoading={isPending}
      size="large"
      columns={tableColums}
      path="accounts/edit"
    />
  );
};

export default ListAccounts;
