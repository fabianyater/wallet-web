import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { signup } from "../../../../services/endpoints/auth";
import Button from "../../Button";
import Input from "../../Input";
import FormBase from "../FormBase";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();
  const mutation = useMutation({
    mutationFn: (data) => {
      return signup(data);
    },
    onSuccess: (response) => {
      toast.success(response.data.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Toaster position="top-center" />
      <FormBase
        footerText={"¿Ya tienes una cuenta? Inicia sesión "}
        link={"/"}
        handleSumbit={handleSubmit(onSubmit)}
      >
        <Input
          name={"fullName"}
          label={"Nombre completo"}
          placeholder={"Fabian Yate"}
          type={"text"}
          required
          autoComplete={true}
          register={register}
        />
        <Input
          name={"userName"}
          label={"Nombre de usuario"}
          placeholder={"fabianyr"}
          type={"text"}
          required
          autoComplete={true}
          register={register}
        />
        <Input
          name={"password"}
          label={"Contraseña"}
          placeholder={"*******"}
          type={"password"}
          required
          register={register}
          autoComplete={false}
        />
        <Button
          text={"Registrarme"}
          title={"Registrarme"}
          type={"submit"}
          hideText={false}
          isLoading={mutation.isPending}
        />
      </FormBase>
    </>
  );
};

export default SignUpForm;
