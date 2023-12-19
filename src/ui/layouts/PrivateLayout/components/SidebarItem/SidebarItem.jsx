import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import SvgIcon from "../../../../components/SvgIcon";

const SidebarItem = ({ label, path, icon, onClick }) => {
  const location = useLocation();
  const isActive = (route) => location.pathname === route;

  return (
    <li
      key={path}
      className={styles.listItem}
      title={label}
      data-active={isActive(path)}
      onClick={onClick}
    >
      <Link to={path}>
        <SvgIcon icon={icon} />
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
