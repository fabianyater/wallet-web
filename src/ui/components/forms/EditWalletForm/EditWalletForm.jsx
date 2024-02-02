import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthProvider";
import { updateWallet } from "../../../../services/endpoints/wallets";
import {
  currenciesList,
  walletTypesList,
} from "../../../../utilities/generalUtils";
import Button from "../../Button";
import ControlledInput from "../../ControlledInput/ControlledInput";
import Select from "../../Select/Select";
import Toggle from "../../Toggle";
import styles from "../CreateWalletForm/styles.module.css";
import FormBase from "../FormBase";

const EditWalletForm = ({ dataFromParams }) => {
  const { auth } = useContext(AuthContext);
  const [name, setName] = useState(dataFromParams.name);
  const [balance, setBalance] = useState(dataFromParams.balance);
  const [color, setColor] = useState(dataFromParams.color);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data) => {
      return updateWallet(dataFromParams.walletId, data, auth.token);
    },
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

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleBalanceChange = (event) => {
    setBalance(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const update = (dataToUpdate) => {
    const newData = { ...dataToUpdate, accountId: auth.accountId };
    mutation.mutate(newData);
  };

  return (
    <>
      <Toaster position="top-center" />
      <FormBase handleSumbit={handleSubmit(update)}>
        <div className={styles.formGrid}>
          <ControlledInput
            type={"text"}
            name={"name"}
            register={register}
            autoComplete
            label={"Nombre de la billetera"}
            placeholder={"Ahorros"}
            required
            errors={errors}
            value={name}
            onChange={handleChange}
          />
          <ControlledInput
            type={"number"}
            name={"balance"}
            register={register}
            autoComplete
            label={"Balance inicial"}
            placeholder={"$ 100.000,00"}
            errors={errors}
            required
            value={balance}
            onChange={handleBalanceChange}
          />
          <Select
            register={register}
            options={walletTypesList}
            label={"Seleccionar tipo"}
            name={"type"}
            errors={errors}
            required
            value={dataFromParams.type}
          />
          <Select
            register={register}
            options={currenciesList}
            label={"Seleccionar moneda"}
            name={"currency"}
            errors={errors}
            required
            value={dataFromParams.currency}
          />
          <ControlledInput
            type={"color"}
            register={register}
            name={"color"}
            label={"Seleccionar color"}
            errors={errors}
            required
            fullWidth
            value={color}
            onChange={handleColorChange}
          />
          <div>
            <Toggle
              label={"Excluir"}
              text={
                "Ignorar el balance de esta billetera en el balance general"
              }
              register={register}
              name={"isExcluded"}
              defaultValue={dataFromParams.isExcluded}
            />
          </div>
          <div className={styles.buttons}>
            <Button
              text={"Actualizar"}
              isLoading={mutation.isPending}
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
