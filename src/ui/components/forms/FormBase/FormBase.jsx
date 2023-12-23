import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const FormBase = ({ showFooter, footerText, link, handleSumbit, children }) => {
  return (
    <form className={`${styles.formBase}`} onSubmit={handleSumbit}>
      {children}
      {showFooter ? (
        <p className={styles.footerText}>
          {footerText}
          <Link to={link}>aquí</Link>
        </p>
      ) : null}
    </form>
  );
};

export default FormBase;
