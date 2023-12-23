import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className={styles.breadcrumb}>
      <Link to="/">Inicio</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={name}>
            <span className={styles.separator}> &gt; </span>
            {isLast ? (
              <span>{name}</span>
            ) : (
              <Link to={routeTo}>{name}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
