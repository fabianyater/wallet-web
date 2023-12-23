import Avatar from "../Avatar";
import SvgIcon from "../SvgIcon";
import styles from "./styles.module.css";

const DropdownItem = ({ title, onClick, isAvatar, icon, border }) => {
  const borderClass = border ? styles[border] : "";
  return (
    <div className={`${styles.wrapper} ${borderClass}`}>
      <div className={styles.item} onClick={onClick}>
        {isAvatar && <Avatar square={false} avatar={title} />}
        {icon && <SvgIcon icon={icon} />}
        <span>{title}</span>
      </div>
    </div>
  );
};

export default DropdownItem;
