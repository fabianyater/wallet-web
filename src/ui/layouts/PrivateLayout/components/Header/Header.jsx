import { useContext } from "react";
import AuthContext from "../../../../../context/AuthProvider";
import { SidebarContext } from "../../../../../context/SidebarProvider";
import Button from "../../../../components/Button";
import ToggleTheme from "../../../../components/ToggleTheme/ToggleTheme";
import styles from "./styles.module.css";

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const { auth } = useContext(AuthContext);
  const username = auth.username;

  return (
    <header className={styles.header}>
      <div className={styles.hamburgerIcon}>
        <Button
          icon={"menuIcon"}
          hideText
          onlyIcon
          onClick={toggleSidebar}
          type={"button"}
        />
      </div>
      <h2 className={styles.greet}>Bienvenida/o, <span>{username}</span></h2>
      <div className={styles.headerOptions}>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
