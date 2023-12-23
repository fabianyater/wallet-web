import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import AuthContext from "../../../../context/AuthProvider";
import { authenticate } from "../../../../services/endpoints/auth";
import Button from "../../Button";
import Input from "../../Input";
import FormBase from "../FormBase";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const mutation = useMutation({
    mutationFn: (data) => {
      return authenticate(data);
    },
    onSuccess: (response) => {
      const newAuth = {
        ...auth,
        token: response.data.jwt,
        refreshToken: response.data.refreshToken,
        expirationDate: response.data.expirationDate,
        userId: response.data.userId,
        username: response.data.userName,
        accountId: response.data.accountId,
      };

      setAuth(newAuth);

      localStorage.setItem("auth", JSON.stringify(newAuth));
      Navigate("/overview");
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
        showFooter
        footerText={"¿No tienes una cuenta aún? Create una nueva "}
        link={"signup"}
        handleSumbit={handleSubmit(onSubmit)}
      >
        <Input
          name={"userName"}
          type={"text"}
          label={"Nombre de usuario"}
          placeholder={"fabinryr"}
          required
          autoComplete={true}
          register={register}
        />
        <Input
          name={"password"}
          type={"password"}
          label={"Contraseña"}
          placeholder={"********"}
          register={register}
          required
        />
        <Button
          text={"Iniciar sesión"}
          title={"Iniciar sesión"}
          type={"submit"}
          hideText={false}
          isLoading={mutation.isPending}
        />
      </FormBase>
    </>
  );
};

export default LoginForm;
