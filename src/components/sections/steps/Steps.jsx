import React from "react";
import { v4 as uuidv4 } from "uuid";

import step1 from "../../../assets/images/step1.png";
import step2 from "../../../assets/images/step2.png";
import step3 from "../../../assets/images/step3.png";
import { Step } from "../../core/step/Step";
import { HowToWorks } from "../howToWorks/HowToWorks";

import styles from "./Steps.module.scss";

const stepsArr = [
  {
    img: step1,
    title: "Target Property",
    descr: "Fraudsters search land registry to find a home they want to target",
    number: "01",
  },
  {
    img: step2,
    title: "Steal Identity ",
    descr: "Fraudsters commit identity theft to assume your identity",
    number: "02",
  },
  {
    img: step3,
    title: "Execute Fraud",
    descr: "Fraudsters remortgage or sell your home leaving you homeless ",
    number: "03",
  },
];

export const Steps = () => {
  return (
    <div className={styles.steps}>
      <div className={`${styles.block} container`}>
        <h1 className={styles.title}>
          <span>Title Guardian</span> will <span>protect</span> your property
          from <span>identity theft</span> and <span>property hijacking</span>
        </h1>
        <div className={styles.line}></div>
        <h4>
          3 simple steps that can turn your <br /> world upside down
        </h4>
        <div className={styles.stepsBlock}>
          {stepsArr.map((s, i) => (
            <div key={uuidv4()} className={`stepItem${i + 1}`}>
              <Step {...s} second={i === 1} />
            </div>
          ))}
        </div>
        <HowToWorks />
      </div>
    </div>
  );
};
