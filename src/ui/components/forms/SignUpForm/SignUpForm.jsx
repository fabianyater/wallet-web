import Button from "../../Button";
import Input from "../../Input";
import FormBase from "../FormBase";

const SignUpForm = () => {
  return (
    <FormBase footerText={"¿Ya tienes una cuenta? Inicia sesión "} link={"/"}>
      <Input
        name={"fullname"}
        label={"Nombre completo"}
        placeholder={"Fabian Yate"}
        type={"text"}
        required
        autoComplete={"true"}
      />
      <Input
        name={"username"}
        label={"Nombre de usuario"}
        placeholder={"fabianyr"}
        type={"text"}
        required
        autoComplete={"true"}
      />
      <Input
        name={"password"}
        label={"Contraseña"}
        placeholder={"*******"}
        type={"password"}
        required
      />
      <Button text={"Registrarme"} title={"Registrarme"} type={"submit"} hideText={false} />
    </FormBase>
  );
};

export default SignUpForm;
