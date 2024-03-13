import { useMutation } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthProvider";
import { updateWallet } from "../../../../services/endpoints/wallets";
import {
  currenciesList,
  duePaymentDays,
  fields,
  statementDays,
  walletTypesList,
} from "../../../../utilities/generalUtils";
import Button from "../../Button";
import Input from "../../Input";
import Select from "../../Select/Select";
import Spinner from "../../Spinner";
import Toggle from "../../Toggle";
import styles from "../CreateWalletForm/styles.module.css";
import FormBase from "../FormBase";

const EditWalletForm = ({ data, id, isFetching }) => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const watchTypeSelect = watch("type");
  const creditCardTypeSelected = watchTypeSelect === "creditCard";

  const updateMutation = useMutation({
    mutationFn: (dataToUpdate) => updateWallet(id, dataToUpdate, auth.token),
    onSuccess: () => {
      toast.success("Billetera actualizada");
      setTimeout(() => {
        navigate("/wallets");
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "Algo salió mal");
    },
  });

  useEffect(() => {
    if (data) {
      fields.forEach((field) => setValue(field, data[field]));
    }
  }, [data, setValue]);

  const onSubmit = (dataToUpdate) => {
    updateMutation.mutate({ ...dataToUpdate, accountId: auth.accountId });
  };

  if (isFetching) return <Spinner />;

  return (
    <>
      <Toaster position="top-center" />
      <FormBase handleSumbit={handleSubmit(onSubmit)}>
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
          {!creditCardTypeSelected ? (
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
          {creditCardTypeSelected ? (
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
          {creditCardTypeSelected ? (
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
                name="duePaymentDay"
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
          {!creditCardTypeSelected ? (
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
              text={"Actualizar"}
              isLoading={updateMutation.isPending}
              type={"submit"}
              title={"Actualizar"}
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

export default EditWalletForm;
