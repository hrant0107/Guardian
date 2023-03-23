import React from "react";
import { v4 as uuidv4 } from "uuid";

import { PriceItem } from "./priceItem/PriceItem";
import { priceListArray } from "../../../constants/constants";

import styles from "./PriceList.module.scss";

export const PriceList = () => {
  return (
    <div className={styles.price}>
      <div className={`${styles.priceBlock} container`}>
        <div className={styles.about}>
          <h1>
            <span>Title Guardian</span> Pricing
          </h1>
          <div className={styles.line}></div>
          <p>
            There are 3 subscription plans to suit your personal circumstances.
            Select your required plan and start below.
          </p>
        </div>

        <div className={styles.list}>
          {priceListArray.map((item) => (
            <PriceItem key={uuidv4()} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
