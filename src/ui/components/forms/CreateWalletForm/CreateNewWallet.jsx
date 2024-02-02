import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AccountsContext } from "../../../../context/AccountsProvider";
import AuthContext from "../../../../context/AuthProvider";
import { addNewWallet } from "../../../../services/endpoints/wallets";
import {
  currenciesList,
  walletTypesList,
} from "../../../../utilities/generalUtils";
import Button from "../../Button";
import Input from "../../Input";
import Select from "../../Select/Select";
import Toggle from "../../Toggle";
import FormBase from "../FormBase";
import styles from "./styles.module.css";

const CreateNewWallet = () => {
  const { auth } = useContext(AuthContext);
  const { selectedAccount } = useContext(AccountsContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mutation = useMutation({
    mutationFn: (data) => {
      return addNewWallet({ ...data, accountId: selectedAccount }, auth.token);
    },
    onSuccess: () => {
      toast.success("Billetera creada");

      setTimeout(() => {
        navigate("/wallets");
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "Algo salió mal");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Toaster position="top-center" />
      <FormBase showFooter={false} handleSumbit={handleSubmit(onSubmit)}>
        <div className={styles.formGrid}>
          <Input
            type={"text"}
            name={"name"}
            register={register}
            autoComplete
            label={"Nombre de la billetera"}
            placeholder={"Ahorros"}
            required
            errors={errors}
          />
          <Input
            type={"number"}
            name={"balance"}
            register={register}
            autoComplete
            label={"Balance inicial"}
            placeholder={"$ 100.000,00"}
            errors={errors}
            required
          />
          <Select
            register={register}
            options={walletTypesList}
            label={"Seleccionar tipo"}
            name={"type"}
            errors={errors}
            required
          />
          <Select
            register={register}
            options={currenciesList}
            label={"Seleccionar moneda"}
            name={"currency"}
            errors={errors}
            required
          />
          <Input
            type={"color"}
            register={register}
            name={"color"}
            label={"Seleccionar color"}
            errors={errors}
            required
            fullWidth
          />
          <div>
            <Toggle
              label={"Excluir"}
              text={
                "Ignorar el balance de esta billetera en el balance general"
              }
              register={register}
              name={"isExcluded"}
            />
          </div>
          <div className={styles.buttons}>
            <Button
              text={"Crear"}
              isLoading={mutation.isPending}
              type={"submit"}
              title={"Crear"}
            />
            <Button
              text={"Cancelar"}
              type={"button"}
              title={"Cancelar"}
              onClick={() => navigate(-1)}
              cancel
            />
          </div>
        </div>
      </FormBase>
    </>
  );
};

export default CreateNewWallet;
