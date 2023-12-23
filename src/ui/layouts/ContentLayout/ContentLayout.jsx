import { Outlet } from "react-router";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./styles.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcumb";

const ContentLayout = ({ title, buttonTitle, text, onClick, type, icon }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Función para navegar hacia atrás
  const handleBack = () => {
    navigate(-1);
  };
  const isEditOrCreateRoute = /\/(create|edit)/.test(location.pathname);

  return (
    <section className={styles.container}>
      <Breadcrumb />
      <header className={styles.header} data-route={isEditOrCreateRoute}>
        <h1 className={styles.title}>{title}</h1>
        {isEditOrCreateRoute ? (
          <Button
            type={type}
            hideText
            onlyIcon
            icon={"chevronLeft"}
            onClick={handleBack}
          />
        ) : (
          <Button
            title={buttonTitle}
            text={text}
            onClick={onClick}
            type={type}
          />
        )}
      </header>
      <section className={styles.content}>
        <Outlet />
      </section>
    </section>
  );
};

export default ContentLayout;
