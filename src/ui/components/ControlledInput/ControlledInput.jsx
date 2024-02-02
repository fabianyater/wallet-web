import PropTypes from "prop-types";
import React from "react";
import styles from "../Input/styles.module.css";

const ControlledInput = ({
  type,
  label,
  register,
  name,
  placeholder,
  autoComplete,
	value,
	onChange,
  errors,
  fullWidth
}) => {
  const isError = errors && errors[name];

  return (
    <label title={label} className={styles.inputGroup}>
      {label}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, { required: true })}
        data-error={isError?.type === "required"}
        data-width={fullWidth}
				value={value}
        onChange={onChange}
      />
    </label>
  );
};

ControlledInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.bool,
  placeholder: PropTypes.string,
};

ControlledInput.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  onChange: () => {},
};

export default ControlledInput;
