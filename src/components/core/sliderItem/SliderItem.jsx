import React from "react";
import styles from "./SliderItem.module.scss";

export const SliderItem = ({ img, icon, title, descr }) => {
  return (
    <div className={styles.sliderItem}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.descrBlock}>
        <h6 className={styles.title}>{title}</h6>
        {icon && <button>Watch our video</button>}
        <p>{descr}</p>
      </div>
    </div>
  );
};
