import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";
import Button from "../../components/Button";
import styles from "./styles.module.css";

export default function PublicLayout({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <section className={styles.section}>
      <div className={styles.theme}>
        <Button
          hideText
          onClick={toggleTheme}
          onlyIcon
          theme={theme}
          title={"Cambiar tema"}
          icon={theme === "dark" ? "lightTheme" : "darkTheme"}
        />
      </div>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Una aplicación, todo sobre el <span>dinero</span>
        </h1>
        <p>
          Gestione y controle todos tus ingresos y gastos. Te ayudamos a hacer
          un seguimiento de manera sencilla.
        </p>
      </header>
      <main className={styles.main}>{children}</main>
    </section>
  );
}
