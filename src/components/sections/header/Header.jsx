import React, { useContext } from "react";

import { Logo } from "../../core/logo/Logo";
import { Navbar } from "../../core/navbar/Navbar";
import { LoginRegister } from "../../core/loginRegister/LoginRegister";
import { ScreenSizesContext } from "../../../context/ScreenSizes/ScreenSizes";

import styles from "./Header.module.scss";

export const Header = () => {
  const { sizes } = useContext(ScreenSizesContext);

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.block}>
          <Logo />
          {sizes.width >= 768 && <Navbar />}
          <LoginRegister />
        </div>
      </div>
    </div>
  );
};
