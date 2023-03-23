import React from "react";

import fb from "../../../assets/icons/fb.svg";
import instagram from "../../../assets/icons/instagram.svg";
import twiter from "../../../assets/icons/twiter.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.block} container`}>
        <p>© 2022 First Guardian Ltd. All rights reserved</p>
        <div className={styles.socials}>
          <img src={fb} alt="fb" />
          <img src={instagram} alt="inst" />
          <img src={twiter} alt="twt" />
        </div>
      </div>
    </div>
  );
};
