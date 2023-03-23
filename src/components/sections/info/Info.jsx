import React from "react";

import { v4 as uuidv4 } from "uuid";
import { infoList } from "../../../constants/constants";
import logo from "../../../assets/images/TitleGuardian.png";

import styles from "./Info.module.scss";

export const Info = () => {
  return (
    <div className={styles.info}>
      <div className="container">
        <div className={styles.infoBlock}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.listBlock}>
            {infoList.map((item) => (
              <div key={uuidv4()} className={styles.column}>
                <h6>{item.title}</h6>
                {item.list.map((elem) =>
                  elem.type === "text" ? (
                    <a key={uuidv4()} href="#">
                      <span>{elem.title}</span>
                    </a>
                  ) : (
                    <a key={uuidv4()} href="#">
                      <img src={elem.img} alt="" />
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
          <div className={`${styles.line} ${styles.lineN}`}></div>
        </div>
      </div>
    </div>
  );
};
