import React from "react";

import { PropertySteps } from "./propertySteps/PropertySteps";

import styles from "./Property.module.scss";

export const Property = () => {
  return (
    <div className={styles.property}>
      <div className={`${styles.propertyBlock} container`}>
        <div className={styles.titles}>
          <h1>
            <span> Protect</span> Your Property
          </h1>
          <div className={styles.line}></div>
          <p>
            Title Guardian will protect your property from fraud and identy
            theft. Our smart technology will identify all activity on your
            property and alert you immediately
          </p>
        </div>

        <PropertySteps />
      </div>
    </div>
  );
};
