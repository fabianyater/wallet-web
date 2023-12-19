import CreateAccountForm from "../../../components/forms/CreateAccountForm";
import styles from "./styles.module.css";

const CreateFirstAccountPage = () => {
  return (
    <main className={styles.container}>
      <h1>
        Comienza a tomar el <span>control</span> de tus <span>finanzas</span>{" "}
        creando tu primera cuenta hoy
      </h1>
      <CreateAccountForm />
    </main>
  );
};

export default CreateFirstAccountPage;
