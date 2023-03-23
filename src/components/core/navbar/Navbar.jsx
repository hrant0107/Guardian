import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../constants/routes";

import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <ul className={styles.list}>
      {routes.map(({ path, title }, i) => (
        <Link key={path} to={path}>
          <li
            className={
              i === 0 ? `${styles.item} ${styles.activeItem}` : `${styles.item}`
            }
          >
            {title}
          </li>
        </Link>
      ))}
    </ul>
  );
};
