import { useContext } from "react";
import {
  AccountsProvider
} from "../../../context/AccountsProvider";
import AuthContext from "../../../context/AuthProvider";
import { SidebarProvider } from "../../../context/SidebarProvider";
import AccountChecker from "./components/AccountChecker/";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./styles.module.css";
const PrivateLayout = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return (
    <SidebarProvider>
      <AccountsProvider auth={auth}>
        <AccountChecker>
          <div className={styles.privateLayout}>
            <Sidebar />
            <Header />
            <main className={styles.content}>{children}</main>
          </div>
        </AccountChecker>
      </AccountsProvider>
    </SidebarProvider>
  );
};

export default PrivateLayout;
