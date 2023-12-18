import { Link } from "react-router-dom";
import Button from "../../Button";
import Input from "../../Input";
import styles from "./styles.module.css";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <Input
        name={"username"}
        type={"text"}
        label={"Nombre de usuario"}
        placeholder={"fabinryr"}
        required
        autoComplete={"true"}
      />
      <Input
        name={"password"}
        type={"password"}
        label={"Contraseña"}
        placeholder={"********"}
        required
      />
      <Button text={"Iniciar sesión"} type={"submit"} />
      <p className={styles.signupText}>
        ¿No tiene una cuenta aún? Create una nueva{" "}
        <Link to={"signup"}>aquí</Link>
      </p>
    </form>
  );
};

export default LoginForm;
