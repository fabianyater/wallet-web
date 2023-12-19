import { useContext } from "react";
import { SidebarContext } from "../../../../../context/SidebarProvider";
import Dropdown from "../../../../components/Dropdown";
import DropdownContainer from "../../../../components/DropdownContainer";
import DropdownItem from "../../../../components/DropdownItem";

const AccountDropdown = ({ data }) => {
  const { isDropdownOpen } = useContext(SidebarContext);

  return (
    <Dropdown>
      <DropdownContainer
        isOpen={isDropdownOpen}
        header={
          <DropdownItem icon={"settings"} title={"Ver todas las cuentas"} />
        }
        footer={<DropdownItem icon={"plus"} title={"Agregar nueva cuenta"} />}
      >
        {data.map((data) => (
          <DropdownItem
            isAvatar={data.value}
            key={data.id}
            title={data.value}
          />
        ))}
      </DropdownContainer>
    </Dropdown>
  );
};

export default AccountDropdown;
