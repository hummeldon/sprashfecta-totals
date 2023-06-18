import React from "react";
import Speedrun from "../Speedrun/Speedrun";

import styles from "./SpeedrunList.module.css";

function SpeedrunList({
  games,
  endDate,
  previousSprashfectaDate,
  onRecordReceived,
  onPreviousRecordReceived,
  showWRComparison,
  setCurrentWRs,
  currentWRs,
}) {
  return (
    <div className={styles.speedrunList__container}>
      {games.map((game) => (
        <Speedrun
          key={game.id}
          gameId={game.id}
          categoryId={game.categoryId}
          previousSprashfectaDate={previousSprashfectaDate}
          endDate={endDate}
          onRecordReceived={onRecordReceived}
          onPreviousRecordReceived={onPreviousRecordReceived}
          showWRComparison={showWRComparison}
          setCurrentWRs={setCurrentWRs}
          currentWRs={currentWRs}
          id={game.name}
        />
      ))}
    </div>
  );
}

export default SpeedrunList;
