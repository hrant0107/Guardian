import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import companyLogo1 from "../../../assets/images/companyLogo1.png";
import companyLogo2 from "../../../assets/images/companyLogo2.png";
import companyLogo3 from "../../../assets/images/companyLogo3.png";
import { SearchInput } from "../../core/searchInput/SearchInput";
import { ScreenSizesContext } from "../../../context/ScreenSizes/ScreenSizes";

import styles from "./Main.module.scss";

const logosList = [companyLogo1, companyLogo2, companyLogo3];

export const Main = () => {
  const { sizes } = useContext(ScreenSizesContext);

  return (
    <div className={styles.main}>
      <div className={`${styles.mainBlock} container`}>
        <h2 className={styles.title}>
          Enter your address to find out if <br /> your property is at risk from
          fraud
        </h2>
        <SearchInput />
        <div className={styles.logoes}>
          {logosList.map((item) => (
            <img key={uuidv4()} src={item} alt="" />
          ))}
        </div>

        {sizes.width > 576 ? (
          <>
            <h4 className={styles.subtitle}>
              The level of fraud in the UK is such that it is a <br />
              <span> National Security</span> threat
            </h4>
            <p>* UK Finance half year fraud update 2021​</p>{" "}
          </>
        ) : (
          <div className={styles.btn}>
            <button>Download Our App</button>
          </div>
        )}
      </div>
    </div>
  );
};
