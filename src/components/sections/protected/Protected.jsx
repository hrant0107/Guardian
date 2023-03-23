import React from "react";

import logo from "../../../assets/icons/logo.svg";

import styles from "./Protected.module.scss";

export const Protected = () => {
  return (
    <div className={styles.protected}>
      <div className={`${styles.protectedBlock} container`}>
        <h1>
          Don't want to be the next victim of
          <span> Title Fraud?</span>
        </h1>
        <div className={styles.line}></div>
        <p>
          Time to register and protect your most valuable asset- your Home and
          family. Registration is simple and secure and our technology will
          identify and register your property in minutes.
        </p>
        <button>
          <img src={logo} alt="logo" />
          <p>I want to be protected</p>
        </button>
      </div>
    </div>
  );
};
