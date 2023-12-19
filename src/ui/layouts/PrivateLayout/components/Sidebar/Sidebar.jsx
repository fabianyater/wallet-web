import { useContext, useRef } from "react";
import AuthContext from "../../../../../context/AuthProvider";
import { SidebarContext } from "../../../../../context/SidebarProvider";
import useEscapeKey from "../../../../../hooks/useEscapeKey";
import useOutsideClick from "../../../../../hooks/useOutsideClick";
import { accounts } from "../../../../../utilities/dropdownOptions";
import { privateRoutes } from "../../../../../utilities/paths";
import AccountDropdown from "../AccountDropdown";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./styles.module.css";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const { logout } = useContext(AuthContext);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (isSidebarOpen) toggleSidebar();
  });
  useEscapeKey(isSidebarOpen, () => toggleSidebar());

  return (
    <aside
      className={styles.sidebar}
      data-toggle-sidebar={isSidebarOpen}
      ref={ref}
    >
      <div className={styles.logo}>
        <h1 className={styles.title}>Wallet</h1>
      </div>
      <AccountDropdown data={accounts} />
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          {privateRoutes.map((item, index) => (
            <SidebarItem
              key={index}
              path={item.route}
              icon={item.icon}
              onClick={toggleSidebar}
              label={item.label}
            />
          ))}
        </ul>
        <ul className={styles.list}>
          <SidebarItem icon={"profile"} label={"Perfil"} />
          <SidebarItem
            icon={"logout"}
            label={"Cerrar sesión"}
            onClick={logout}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
