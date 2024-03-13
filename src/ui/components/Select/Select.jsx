import styles from "./styles.module.css";

const Select = ({
  label,
  register,
  name,
  errors,
  placeholder,
  options,
  value,
}) => {
  const isError = errors && errors[name];

  return (
    <label title={label} className={styles.selectGroup}>
      {label}
      <select
        id={name}
        placeholder={placeholder}
        {...register(name, { required: true })}
        data-error={isError?.type === "required"}
        defaultValue={value}
      >
        <option value="">Seleccionar opción</option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
