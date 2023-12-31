import "ldrs/ring2";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";
import SvgIcon from "../SvgIcon";
import styles from "./styles.module.css";
import Spinner from "../Spinner";

const Button = ({
  text,
  hideText,
  icon,
  type,
  onClick,
  isLoading,
  onlyIcon,
  cancel,
  title,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      data-only-icon={onlyIcon}
      data-theme={theme}
      title={title}
      data-cancel={cancel}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {hideText ? null : <span>{text}</span>}
          <SvgIcon icon={icon} />
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  hideText: PropTypes.bool,
  title: PropTypes.string,
  theme: PropTypes.bool,
  onlyIcon: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
