import { useContext, useState } from "react";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";
import AuthContext from "../../../../../context/AuthProvider";
import { SidebarContext } from "../../../../../context/SidebarProvider";

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
      <h2>Logged as: {username}</h2>
    </header>
  );
};

export default Header;
