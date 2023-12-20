import styles from "./styles.module.css";

const Toggle = ({ label, text, register, name, onChange }) => {
  return (
    <>
      <label className={styles.labelToggle}>
        <input
          type="checkbox"
          {...register(name)}
          onChange={onChange}
          className={styles.toggle}
        />
        {label}
      </label>
      <span className={styles.span}>{text}</span>
    </>
  );
};

export default Toggle;
