import React, { useContext } from "react";

import logo from "../../../assets/icons/logo.svg";
import { ScreenSizesContext } from "../../../context/ScreenSizes/ScreenSizes";

import styles from "./Relax.module.scss";

export const Relax = () => {
  const { sizes } = useContext(ScreenSizesContext);

  return (
    <div className={styles.relax}>
      <div className="container">
        <div className={`${styles.relaxBlock} container`}>
          <h1>
            Relax and enjoy your time with those you love and take comfort
            knowing we have you protected
          </h1>
          {sizes.width > 992 && <img src={logo} alt="logo" />}
          <div className={styles.btn}>
            <button>Register My Property </button>
          </div>
        </div>
      </div>
    </div>
  );
};
