import { SidebarProvider } from "../../../context/SidebarProvider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./styles.module.css";
const PrivateLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className={styles.privateLayout}>
        <Sidebar />
        <Header />
        <main className={styles.content}>{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default PrivateLayout;
