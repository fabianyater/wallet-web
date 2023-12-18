import styles from "./styles.module.css";

export default function PublicLayout({ children }) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.title}>Una aplicación, todo sobre el dinero</h1>
        <p>Gestione y controle todos tus ingresos y gastos. Te ayudamos a hacer un seguimiento de manera sencilla.</p>
      </header>
      <main className={styles.main}>{children}</main>
    </section>
  );
}
