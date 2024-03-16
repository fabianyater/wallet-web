import React from "react";
import { formatCurrency } from "../../../../utilities/generalUtils";
import styles from "./CreditCardDetails.module.css";

const CreditCardDetails = ({ name, creditLimit, balance }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{name}</h3>
      <p>
        Tú límite de crédito es{" "}
        <span className={styles.currency}>
          {formatCurrency(creditLimit, 2)}.{" "}
        </span>
        Has usado{" "}
        <span className={styles.currency}>
          {formatCurrency(creditLimit - balance, 2)}{" "}
        </span>
        de tu crédito disponible.
      </p>
      <div className={styles.progressBar}>
        <progress max={creditLimit} value={creditLimit - balance}>
          {balance}
        </progress>
        <div>
          <span className={styles.label}>Crédito usado</span>
          <span className={styles.label}>Crédito disponible</span>
        </div>
        <div className={styles.balance}>
          <span className={styles.currency}>
            {formatCurrency(creditLimit - balance, 2)}
          </span>
          <span className={styles.currency}>{formatCurrency(balance, 2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardDetails;
