import React, { useEffect } from "react";
import useSpeedrunRecord from "../../hooks/useSpeedrunRecord";
import { timeToHHMMSS, getNumberOfDaysFromCurrent, getCurrentDate } from "../../utils/utils";

import styles from "./Speedrun.module.css";
import usePreviousWR from "../../hooks/usePreviousRecord";

const Speedrun = ({
  gameId,
  categoryId,
  previousSprashfectaDate,
  endDate,
  onRecordReceived,
  onPreviousRecordReceived,
  showWRComparison,
  setCurrentWRs,
  currentWRs,
  id,
}) => {
  const record = useSpeedrunRecord(gameId, categoryId, endDate, setCurrentWRs);
  const prevRecord = usePreviousWR(gameId, categoryId, previousSprashfectaDate);

  useEffect(() => {
    if (record) {
      onRecordReceived(record.time, categoryId);
    }
  }, [record, categoryId, onRecordReceived]);

  useEffect(() => {
    if (prevRecord) {
      onPreviousRecordReceived(prevRecord.time, categoryId);
    }
  }, [prevRecord, categoryId, onPreviousRecordReceived]);

  return (
    <div className={styles.speedrun__container}>
      {record ? (
        <div>
          <div className={styles.details__container}>
            <h2>{record.game}</h2>
            <div className={styles.details__details}>
              <p>Category: {record.category}</p>
              <p>
                Runner:{" "}
                <span>
                  <a href={record.playerProfile}>{record.player}</a>
                </span>
              </p>
              <p>
                Time:{" "}
                <span>
                  <a href={record.runSubmission}>{timeToHHMMSS(record.time)}</a>
                </span>
                {showWRComparison && (
                  <span className={styles.speedrun__WRComparison}>
                    {" "}
                    -{timeToHHMMSS(prevRecord.time - record.time)}
                  </span>
                )}
              </p>
              <div style={{ minHeight: "19px" }}>
                {" "}
                {endDate === getCurrentDate() && (
                  <p>{getNumberOfDaysFromCurrent(record.date)} days since last record</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Speedrun;
