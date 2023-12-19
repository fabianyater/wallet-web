import styles from "./styles.module.css";

const DropdownContainer = ({
  header,
  footer,
  children,
  isOpen,
  isMenuAvatarOpen,
}) => {
  return (
    <div
      className={styles.container}
      data-menu={isOpen}
      data-avatar-open={isMenuAvatarOpen}
    >
      {header && header}
      {children}
      {footer && footer}
    </div>
  );
};

export default DropdownContainer;
