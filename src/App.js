import React, { useCallback, useState, useEffect, useRef } from "react";
import Speedrun from "./components/Speedrun";
import timeToHHMMSS from "./utils/utils";

function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [endDate, setEndDate] = useState(new Date().toISOString().split("T")[0]);
  const recordedCategories = useRef(new Set());

  const addToTotalTime = useCallback((time, categoryId) => {
    if (!recordedCategories.current.has(categoryId)) {
      recordedCategories.current.add(categoryId);
      setTotalTime((prevTime) => prevTime + time);
    }
  }, []);

  useEffect(() => {
    recordedCategories.current.clear();
    setTotalTime(0);
    // Clearing the recordedCategories and totalTime which will trigger fetching of records with updated endDate
  }, [endDate]);

  console.log(timeToHHMMSS(8374));

  return (
    <div className="App">
      <label htmlFor="datePicker">Select date:</label>
      <input
        type="date"
        id="datePicker"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
      />
      <button onClick={() => setEndDate("2014-12-07")}>Sprashfecta 1</button>
      <button onClick={() => setEndDate("2015-12-13")}>Sprashfecta 2</button>
      <button onClick={() => setEndDate("2016-12-04")}>Sprashfecta 3</button>
      <button onClick={() => setEndDate("2017-12-09")}>Sprashfecta 4</button>
      <button onClick={() => setEndDate("2018-12-08")}>Sprashfecta 5</button>
      <button onClick={() => setEndDate("2019-12-28")}>Sprashfecta 6</button>
      <button onClick={() => setEndDate("2020-12-19")}>Sprashfecta 7</button>
      <button onClick={() => setEndDate("2021-12-18")}>Sprashfecta 8</button>
      <button onClick={() => setEndDate("2022-12-17")}>Sprashfecta 8</button>
      <button onClick={() => setEndDate(new Date().toISOString().split("T")[0])}>
        Current WRs
      </button>

      <hr />
      <Speedrun
        gameId={"576rje18"}
        categoryId={"7wkp1gkr"}
        endDate={endDate}
        gameName={"Spyro the Dragon"}
        categoryName={"120%"}
        onRecordReceived={addToTotalTime}
      />
      <hr />
      <Speedrun
        gameId={"9j1l9v1g"}
        categoryId={"7wk6nq21"}
        endDate={endDate}
        gameName={"Spyro 2: Ripto's Rage!"}
        categoryName={"100%"}
        onRecordReceived={addToTotalTime}
      />
      <hr />
      <Speedrun
        gameId={"4pd02v1e"}
        categoryId={"4xk9r4k0"}
        endDate={endDate}
        gameName={"Spyro: Year of the Dragon"}
        categoryName={"117%"}
        onRecordReceived={addToTotalTime}
      />
      <hr />
      <Speedrun
        gameId={"8nd2wvd0"}
        categoryId={"p7kjqnd3"}
        endDate={endDate}
        gameName={"Crash Bandicoot"}
        categoryName={"100%"}
        onRecordReceived={addToTotalTime}
      />
      <hr />
      <Speedrun
        gameId={"n4d7pgd7"}
        categoryId={"gq257ydo"}
        endDate={endDate}
        gameName={"Crash Bandicoot 2: Cortex Strikes Back"}
        categoryName={"100%"}
        onRecordReceived={addToTotalTime}
      />
      <hr />
      <Speedrun
        gameId={"29d37g6l"}
        categoryId={"r02qpjdy"}
        endDate={endDate}
        gameName={"Crash Bandicoot: Warped"}
        categoryName={"105%"}
        onRecordReceived={addToTotalTime}
      />
      <hr />
      <p>Total: {totalTime}</p>
    </div>
  );
}

export default App;
