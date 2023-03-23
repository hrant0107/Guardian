import React from "react";

import { slides } from "../../../constants/constants.js";
import { SwiperComponent } from "../../core/swiper/SwiperComponent";

import styles from "./VicTimes.module.scss";

export const VicTimes = () => {
  return (
    <div className={styles.vicTime}>
      <div className={`${styles.vicTimeBlock} `}>
        <div className={styles.infoBlock}>
          <div className={styles.descrs}>
            <h3>
              <span> Victims</span> of Property Fraud​
            </h3>

            <div className={styles.line}></div>

            <p>
              Property & title fraud is an invisible digital threat that affects
              everyone. Here are just a few examples.
            </p>
          </div>
        </div>
        <div className={styles.sliderBlock}></div>
      </div>
      <SwiperComponent slidesList={slides} />
    </div>
  );
};
