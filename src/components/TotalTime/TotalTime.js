import React from "react";
import { timeToHHMMSS } from "../../utils/utils";

import styles from "./TotalTime.module.css";

function TotalTime({ time, prevTime }) {
  return (
    <div className={styles.TotalTime}>
      <p>
        Total: {timeToHHMMSS(time)}{" "}
        <span className={styles.WRComparison}> -{timeToHHMMSS(prevTime - time)}</span>
      </p>
    </div>
  );
}

export default TotalTime;
