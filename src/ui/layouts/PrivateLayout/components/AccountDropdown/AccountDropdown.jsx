import { useContext } from "react";
import { AccountsContext } from "../../../../../context/AccountsProvider";
import { SidebarContext } from "../../../../../context/SidebarProvider";
import Dropdown from "../../../../components/Dropdown";
import DropdownContainer from "../../../../components/DropdownContainer";
import DropdownItem from "../../../../components/DropdownItem";

const AccountDropdown = () => {
  const { isDropdownOpen, toggleDropdown } = useContext(SidebarContext);

  const { accounts, selectedAccount, updateSelectedAccount, isPending } =
    useContext(AccountsContext);

  let accountNameDisplay;
  if (isPending) {
    accountNameDisplay = "Cargando...";
  } else if (selectedAccount && accounts.length > 0) {
    const currentAccount = accounts.find(
      (account) => account.accountId === selectedAccount
    );
    accountNameDisplay = currentAccount
      ? currentAccount.accountName
      : "Cuenta no encontrada";
  } else {
    accountNameDisplay = "Sin cuentas";
  }

  const onAccountChange = (newAccountId) => {
    updateSelectedAccount(newAccountId);
    toggleDropdown();
  };

  return (
    <Dropdown accountName={accountNameDisplay}>
      <DropdownContainer
        isOpen={isDropdownOpen}
        header={
          <DropdownItem icon={"settings"} title={"Ver todas las cuentas"} />
        }
        footer={<DropdownItem icon={"plus"} title={"Agregar nueva cuenta"} />}
      >
        {accounts.map((account, key) => (
          <DropdownItem
            isAvatar={account.accountName}
            key={key}
            title={account.accountName}
            onClick={() => onAccountChange(account.accountId)}
          />
        ))}
      </DropdownContainer>
    </Dropdown>
  );
};

export default AccountDropdown;
