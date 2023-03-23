import React, { useContext } from "react";

import burger from "../../../assets/icons/burger.svg";
import { Button } from "../button/Button";
import { ScreenSizesContext } from "../../../context/ScreenSizes/ScreenSizes";

import styles from "./LoginRegister.module.scss";

export const LoginRegister = () => {
  const { sizes } = useContext(ScreenSizesContext);

  return (
    <div className={styles.block}>
      <Button className={styles.login}>Login</Button>
      <Button className={styles.register}>Register</Button>
      {sizes.width <= 768 && (
        <Button>
          <img src={burger} alt="" />
        </Button>
      )}
    </div>
  );
};
