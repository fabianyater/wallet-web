import { useContext, useRef } from "react";
import { SidebarContext } from "../../../context/SidebarProvider";
import useEscapeKey from "../../../hooks/useEscapeKey";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Avatar from "../Avatar";
import SvgIcon from "../SvgIcon";
import styles from "./styles.module.css";

const Dropdown = ({ children }) => {
  const { isDropdownOpen, toggleDropdown } = useContext(SidebarContext);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (isDropdownOpen) toggleDropdown();
  });
  useEscapeKey(isDropdownOpen, () => toggleDropdown());

  const accountName = "Bancolombia";

  return (
    <div className={styles.dropdown} data-open={isDropdownOpen} ref={ref}>
      <button className={styles.button} onClick={toggleDropdown}>
        <Avatar avatar={accountName} square />
        <span className={styles.text}>
          <span>Seleccionar cuenta</span>
          <p className={styles.selectedAccount}>Bancolombia</p>
        </span>
        <SvgIcon icon={isDropdownOpen ? "chevronDown" : "chevronUp"} />
      </button>
      {children}
    </div>
  );
};

export default Dropdown;
