import React from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./PriceItem.module.scss";

export const PriceItem = ({ price, title, descr, list, btn, isPopular }) => {
  return (
    <div className={styles.item}>
      <div className={styles.infoBlock}>
        <span>{price}</span>
        <h6>{title}</h6>
        <p>{descr}</p>
        {isPopular && <div className={styles.popular}>Popular</div>}
      </div>

      <div className={styles.servicesBlock}>
        <ul className={styles.services}>
          {list.map((s) => (
            <li
              key={uuidv4()}
              className={
                s.color ? `${styles.serv} ${styles.servBlue}` : `${styles.serv}`
              }
            >
              <img src={s.icon} alt="i" />
              <span>{s.text}</span>
            </li>
          ))}
        </ul>

        <div className={styles.btns}>
          <button
            className={
              btn.bg ? `${styles.btn} ${styles.btnBlue}` : `${styles.btn}`
            }
          >
            {btn.text}
          </button>
        </div>
      </div>
    </div>
  );
};
