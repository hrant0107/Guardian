import React from "react";

import phones from "../../../assets/images/phones.png";
import appStore from "../../../assets/images/appStore.png";
import googlePlay from "../../../assets/images/googleplay.png";

import styles from "./Download.module.scss";

export const Download = () => {
  return (
    <div className={styles.download}>
      <div className="container">
        <div className={styles.downloadBlcok}>
          <div className={styles.infoBlock}>
            <h1>
              <span>Home Protection</span> in your pocket. Download the App
            </h1>
            <div className={styles.line}></div>
            <p>
              Download the Title Guardian mobile App from the App Store or
              Google Play to make protecting your home even easier. Registration
              is simple, secure and fast.
            </p>
            <div className={styles.imgBlocks}>
              <img src={appStore} alt="appStore" />
              <img src={googlePlay} alt="googlePLay" />
            </div>
          </div>
          <div className={styles.phoneImg}>
            <img src={phones} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
