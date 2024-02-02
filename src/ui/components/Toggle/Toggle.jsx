import { useState } from "react";
import styles from "./styles.module.css";

const Toggle = ({ label, text, register, name, defaultValue }) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  const handleToggleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <label className={styles.labelToggle}>
        <input
          type="checkbox"
          {...register(name)}
          onChange={handleToggleChange}
          className={styles.toggle}
          defaultValue={defaultValue}
          checked={isChecked}
        />
        {label}
      </label>
      <span className={styles.span}>{text}</span>
    </>
  );
};

export default Toggle;
