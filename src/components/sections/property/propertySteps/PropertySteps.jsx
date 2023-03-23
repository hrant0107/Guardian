import React, { useContext } from "react";

import propertyImg from "../../../../assets/images/propertyImg.png";
import { ScreenSizesContext } from "../../../../context/ScreenSizes/ScreenSizes";

import styles from "./PropertySteps.module.scss";

export const PropertySteps = () => {
  const { sizes } = useContext(ScreenSizesContext);

  return (
    <div className={styles.propertyBlock}>
      {sizes.width <= 576 && (
        <div className={styles.imgBlock}>
          <img src={propertyImg} alt="img" />
        </div>
      )}
      <div className={`${styles.fristProperty}`}>
        <div className={styles.step}>
          <span>01</span>
          <p>
            Title Guardian will protect your property and enable friends and
            family to act as joint guardians . Ideal for elderly owners or
            people based overseas.
          </p>
        </div>
      </div>

      <div className={styles.thirdProperty}>
        {sizes.width > 576 && <img src={propertyImg} alt="img" />}
        <div className={styles.step}>
          <span>03</span>
          <p>
            Title Guardian has thousands of integrated data points enabling
            early stage notification of any activity on your property .
          </p>
        </div>
      </div>

      <div className={styles.secondProperty}>
        <div className={styles.step}>
          <span>02</span>
          <p>
            Landlords can protect thier income by registering on our portfolio
            plan . We will provide landlords with complete cover along with
            updated portfolio valuations
          </p>
        </div>
      </div>
    </div>
  );
};
