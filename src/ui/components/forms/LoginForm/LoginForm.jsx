import Button from "../../Button";
import Input from "../../Input";
import FormBase from "../FormBase";

const LoginForm = () => {
  return (
    <FormBase
      footerText={"¿No tienes una cuenta aún? Create una nueva "}
      link={"signup"}
    >
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
      <Button text={"Iniciar sesión"} title={"Iniciar sesión"} type={"submit"} hideText={false} />
    </FormBase>
  );
};

export default LoginForm;
