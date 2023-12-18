import SvgIcon from "../SvgIcon";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const Button = ({ text, icon, type, onClick, isLoading }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {isLoading ? (
        "Cargando..."
      ) : (
        <>
          <span>{text}</span>
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
  onClick: PropTypes.func,
};

export default Button;
