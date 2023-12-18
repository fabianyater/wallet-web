import SvgIcon from "../SvgIcon";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const Button = ({
  text,
  hideText,
  icon,
  type,
  onClick,
  isLoading,
  onlyIcon,
  theme,
  title
}) => {
  console.log(hideText);
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      data-only-icon={onlyIcon}
      data-theme={theme}
      title={title}
    >
      {isLoading ? (
        "Cargando..."
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
