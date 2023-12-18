import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import SidebarItem from "../SidebarItem/SidebarItem";
import { privateRoutes } from "../../../../../utilities/paths";
import { useContext, useRef } from "react";
import { SidebarContext } from "../../../../../context/SidebarProvider";
import useOutsideClick from "../../../../../hooks/useOutsideClick";
import useEscapeKey from "../../../../../hooks/useEscapeKey";

const Sidebar = () => {
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const isActive = (route) => location.pathname === route;
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
      <div>
        <div className={styles.logo}>
          <h1 className={styles.title}>Wallet</h1>
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            {privateRoutes.map((item, index) => (
              <SidebarItem
                key={index}
                path={item.route}
                icon={item.icon}
                isActive={isActive(item.route)}
                onClick={toggleSidebar}
                label={item.label}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
