import { useState, useEffect } from "react";
import SpeedrunService from "../services/SpeedrunService";
import { getCurrentDate } from "../utils/utils";

const useSpeedrunRecord = (gameId, categoryId, endDate, setCurrentWRs) => {
  const [record, setRecord] = useState(null);

  useEffect(() => {
    SpeedrunService.getWR(gameId, categoryId, endDate)
      .then((response) => {
        if (response.data && response.data.data) {
          const rawRecord = response.data.data;

          const record = {
            game: rawRecord.game.data.names.international,
            category: rawRecord.category.data.name,
            player: rawRecord.players.data[0].names.international,
            playerProfile: rawRecord.players.data[0].weblink,
            runSubmission: rawRecord.runs[0].run.weblink,
            time: rawRecord.runs[0].run.times.primary_t,
            date: rawRecord.runs[0].run.date,
          };
          setRecord(record);

          if (endDate === getCurrentDate()) {
            setCurrentWRs((prevWRs) => ({
              ...prevWRs,
              [categoryId]: record.time,
            }));
          }
        }
      })
      .catch((error) => console.error(error));
  }, [gameId, categoryId, endDate, setCurrentWRs]);

  return record;
};

export default useSpeedrunRecord;
