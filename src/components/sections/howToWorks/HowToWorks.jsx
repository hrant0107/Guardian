import React from "react";

import blondinka from "../../../assets/images/girl.png";
import startIcon from "../../../assets/images/startIcon.png";

import styles from "./HowToWork.module.scss";

export const HowToWorks = () => {
  return (
    <div className={styles.howToWorks}>
      <div className={styles.images}>
        <img className={styles.imgBig} src={blondinka} alt="" />
        <img className={styles.icon} src={startIcon} alt="" />
      </div>
      <div className={styles.descrBlock}>
        <h3>How it Works</h3>
        <span className="line"></span>
        <p className={styles.descr}>
          Your home and family is your most valuable asset. Protecting them is
          now simple and secure with Title Guardian. Our technology will detect
          any attempt to hijack or tamper with your homes title deeds, giving
          you peace of mind.
        </p>
        <p className={`${styles.descr} ${styles.secDescr}`}>
          Please take the time to watch our short video to learn more about the
          risks in todays environment.
        </p>
      </div>
    </div>
  );
};
