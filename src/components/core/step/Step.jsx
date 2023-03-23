import React from "react";
import styles from "./Step.module.scss";

export const Step = ({ img, title, descr, number, second }) => {
  return (
    <div
      className={second ? `${styles.item} ${styles.secondItem}` : styles.item}
    >
      <img src={img} alt="img" />
      <h5>{title}</h5>
      <p>{descr}</p>
      <p className={styles.number}>{number}</p>
    </div>
  );
};
