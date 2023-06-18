import React, { useCallback, useState, useEffect, useRef } from "react";

import DatePicker from "./components/DatePicker/DatePicker";
import Dropdown from "./components/Dropdown/Dropdown";
import WRToggle from "./components/WRToggle/WRToggle";
import SpeedrunList from "./components/SpeedrunList/SpeedrunList";
import TotalTime from "./components/TotalTime/TotalTime";

import { games, buttons } from "./utils/constants";
import { getCurrentDate, getPreviousSprashfectaDate, timeToHHMMSS } from "./utils/utils";

import styles from "./App.module.css";

function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [previousTotalTime, setPreviousTotalTime] = useState(0);
  const [currentWRs, setCurrentWRs] = useState({});
  const [endDate, setEndDate] = useState(getCurrentDate());
  const [showWRComparison, setShowWRComparison] = useState(false);

  const recordedCategories = useRef(new Set());
  const previousRecordedCategories = useRef(new Set());

  const addToTotalTime = useCallback((time, categoryId) => {
    if (!recordedCategories.current.has(categoryId)) {
      recordedCategories.current.add(categoryId);
      setTotalTime((prevTime) => prevTime + time);
    }
  }, []);

  const addToPreviousTotalTime = useCallback((time, categoryId) => {
    if (!previousRecordedCategories.current.has(categoryId)) {
      previousRecordedCategories.current.add(categoryId);
      setPreviousTotalTime((prevTime) => prevTime + time);
    }
  }, []);

  const previousSprashfectaDate = getPreviousSprashfectaDate(buttons, endDate);

  useEffect(() => {
    setTotalTime(0);
    setPreviousTotalTime(0);
    recordedCategories.current.clear();
    previousRecordedCategories.current.clear();
  }, [endDate]);

  return (
    <div className={styles.App}>
      <h1>Sprashfecta WR Totals</h1>
      <div className={styles.SelectorContainer}>
        <Dropdown options={buttons} setEndDate={setEndDate} />
        {/* <DatePicker date={endDate} setDate={setEndDate} /> */}
        <WRToggle onToggle={setShowWRComparison} />
        <TotalTime time={totalTime} prevTime={previousTotalTime} />
      </div>
      <div className={styles.SummaryContainer}></div>
      <SpeedrunList
        games={games}
        endDate={endDate}
        previousSprashfectaDate={previousSprashfectaDate}
        onRecordReceived={addToTotalTime}
        onPreviousRecordReceived={addToPreviousTotalTime}
        showWRComparison={showWRComparison}
        setCurrentWRs={setCurrentWRs}
        currentWRs={currentWRs}
      />
    </div>
  );
}

export default App;
