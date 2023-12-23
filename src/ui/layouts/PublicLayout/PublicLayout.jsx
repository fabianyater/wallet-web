import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";
import styles from "./styles.module.css";

export default function PublicLayout({ children }) {
  return (
    <section className={styles.section}>
      <div className={styles.theme}>
        <ToggleTheme />
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
