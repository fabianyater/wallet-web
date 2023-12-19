import { useContext, useRef } from "react";
import { SidebarContext } from "../../../context/SidebarProvider";
import styles from "./styles.module.css";
import useOutsideClick from "../../../hooks/useOutsideClick";
import useEscapeKey from "../../../hooks/useEscapeKey";

const Avatar = ({ avatar, square, children, onClick }) => {
  const { isDropdownAvatarOpen, toggleDropdownAvatar } =
    useContext(SidebarContext);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (isDropdownAvatarOpen) toggleDropdownAvatar();
  });
  useEscapeKey(isDropdownAvatarOpen, () => toggleDropdownAvatar());

  const avatarBackground = `url(https://ui-avatars.com/api/?name=${avatar}&color=000000&background=0BD08A)`;

  return (
    <>
      <div
        ref={ref}
        className={styles.avatar}
        data-square={square}
        style={{ backgroundImage: avatarBackground }}
        onClick={onClick}
      ></div>
      {children}
    </>
  );
};

export default Avatar;
