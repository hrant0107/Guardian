import React from "react";

import logo from "../../../assets/images/Master.png";

import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <button>
        <img src={logo} alt="logo" />
      </button>
    </div>
  );
};
