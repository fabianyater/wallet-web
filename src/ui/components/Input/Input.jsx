import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";

const Input = ({
  type,
  label,
  register,
  name,
  required,
  placeholder,
  autoComplete,
}) => {
  return (
    <label title={label} className={styles.inputGroup}>
      {label}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        {...register(name, { required: true })}
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  onChange: () => {},
};

export default Input;
