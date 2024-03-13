import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AccountsContext } from "../../../../context/AccountsProvider";
import AuthContext from "../../../../context/AuthProvider";
import { addNewWallet } from "../../../../services/endpoints/wallets";
import {
  currenciesList,
  duePaymentDays,
  getDaysOfMonth,
  statementDays,
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
    watch,
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

  const actualDate = new Date();
  const year = actualDate.getFullYear();
  const month = actualDate.getMonth();

  const watchTypeSelect = watch("type");

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
          <Select
            register={register}
            options={walletTypesList}
            label={"Seleccionar tipo"}
            name={"type"}
            errors={errors}
            required
          />
          {watchTypeSelect !== "creditCard" ? (
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
          ) : null}
          {watchTypeSelect === "creditCard" ? (
            <Input
              type="number"
              name="creditLimit"
              register={register}
              label="Límite de credito"
              placeholder="$7.000.000,00"
              errors={errors}
              required
            />
          ) : null}
          <Select
            register={register}
            options={currenciesList}
            label={"Seleccionar moneda"}
            name={"currency"}
            errors={errors}
            required
          />
          {watchTypeSelect === "creditCard" ? (
            <>
              <Select
                register={register}
                options={statementDays}
                label="Día de corte"
                name="statementDay"
                errors={errors}
                required
              />
              <Select
                register={register}
                options={duePaymentDays}
                label="Día de pago"
                name="dueDayPayment"
                errors={errors}
                required
              />
            </>
          ) : null}
          <Input
            type={"color"}
            register={register}
            name={"color"}
            label={"Seleccionar color"}
            errors={errors}
            required
            fullWidth
          />
          {watchTypeSelect !== "creditCard" ? (
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
          ) : null}

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
