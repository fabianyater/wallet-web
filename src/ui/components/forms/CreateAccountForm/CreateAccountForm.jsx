import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import AuthContext from "../../../../context/AuthProvider";
import { addNewAccount } from "../../../../services/endpoints/accounts";
import Button from "../../Button";
import Input from "../../Input";
import Select from "../../Select/";
import FormBase from "../FormBase";
import { AccountsContext } from "../../../../context/AccountsProvider";

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const { refetchAccounts } = useContext(AccountsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mutation = useMutation({
    mutationFn: (data) => {
      return addNewAccount({ ...data, userId: auth.userId }, auth.token);
    },
    onSuccess: (data) => {
      toast.success(data.data.message);

      refetchAccounts();

      setTimeout(() => {
        navigate("/accounts");
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "Algo salió mal");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const options = [
    {
      id: 1,
      value: "cop",
      name: "COP",
    },
    {
      id: 2,
      value: "us",
      name: "US",
    },
  ];

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
          errors={errors}
        />
        <Select
          name={"accountCurrency"}
          type={"text"}
          register={register}
          autoComplete={true}
          label={"Moneda"}
          placeholder={"COP"}
          required
          errors={errors}
          options={options}
        />
        <Input
          name={"color"}
          type={"color"}
          register={register}
          autoComplete={true}
          label={"Seleccionar color"}
          fullWidth
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
