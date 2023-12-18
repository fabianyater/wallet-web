import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const FormBase = ({ footerText, link, children }) => {
  return (
    <form className={styles.formBase}>
      {children}
      <p className={styles.footerText}>
        {footerText}
        <Link to={link}>aquí</Link>
      </p>
    </form>
  );
};

export default FormBase;
