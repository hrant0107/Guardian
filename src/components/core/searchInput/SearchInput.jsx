import React, { useState } from "react";

import { searchList } from "../../../constants/constants";
import searchIcon from "./../../../assets/icons/searchIcon.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import { v4 as uuidv4 } from "uuid";

import styles from "./SearchInput.module.scss";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [isList, setIsList] = useState(false);

  const getIncludesValues = () => {
    return searchList.filter((val) =>
      val.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    );
  };

  const handleDelete = () => {
    setInputValue("");
    setIsList(false);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim()) {
      setIsList(true);
      return;
    }
    setIsList(false);
  };

  return (
    <div className={styles.inputBlock}>
      <input
        className={isList ? styles.inp : null}
        type="text"
        placeholder="Start typing your address...."
        value={inputValue}
        onChange={handleChange}
      />
      <div className={styles.imgBlock}>
        <img src={searchIcon} alt="search" />
      </div>
      {isList && (
        <div className={styles.deleteIcon}>
          <img onClick={handleDelete} src={deleteIcon} alt="search" />
        </div>
      )}

      {isList && (
        <div className={styles.selectedValues}>
          {getIncludesValues().map((val) => (
            <div key={uuidv4()} className={styles.item}>
              <span>{val}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
