import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import AuthContext from "../../../../context/AuthProvider";
import { addNewAccount } from "../../../../services/endpoints/accounts";
import Button from "../../Button";
import Input from "../../Input";
import FormBase from "../FormBase";

const CreateAccountForm = () => {
  const { auth } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const mutation = useMutation({
    mutationFn: (data) => {
      return addNewAccount({ ...data, userId: auth.userId }, auth.token);
    },
    onSuccess: () => {
      window.location.reload();
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
      <FormBase handleSumbit={handleSubmit(onSubmit)} showFooter={false}>
        <Input
          type={"text"}
          name={"accountName"}
          register={register}
          autoComplete={true}
          label={"Nombre de la cuenta"}
          placeholder={"Bancolombia"}
          required
        />
        <Input
          name={"accountCurrency"}
          type={"text"}
          register={register}
          autoComplete={true}
          label={"Moneda"}
          placeholder={"COP"}
          required
        />
        <Button
          type={"submit"}
          text={"Guardar"}
          title={"Guardar"}
          isLoading={mutation.isPending}
        />
      </FormBase>
    </>
  );
};

export default CreateAccountForm;
