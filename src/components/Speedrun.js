import React, { useState, useEffect } from "react";
import SpeedrunService from "../services/SpeedrunService";

const Speedrun = ({ gameId, categoryId, endDate, gameName, categoryName, onRecordReceived }) => {
  const [record, setRecord] = useState(null);

  useEffect(() => {
    SpeedrunService.getWR(gameId, categoryId, endDate)
      .then((response) => {
        if (response.data && response.data.data) {
          const rawRecord = response.data.data;
          SpeedrunService.getUser(rawRecord.runs[0].run.players[0].id)
            .then((userResponse) => {
              const record = {
                game: gameName,
                category: categoryName,
                user: userResponse.data.data.names.international,
                time: rawRecord.runs[0].run.times.primary_t,
              };
              setRecord(record);

              onRecordReceived(record.time, categoryId);
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => console.error(error));
  }, [gameId, categoryId, endDate, gameName, categoryName, onRecordReceived]);

  return (
    <div>
      {record ? (
        <div>
          <h2>{record.game}</h2>
          <p>Category: {record.category}</p>
          <p>Runner: {record.user}</p>
          <p>Time: {record.time}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Speedrun;
