import axios from "axios";

const BASE_URL = "https://www.speedrun.com/api/v1";

const SpeedrunService = {
  getWR: function (gameId, categoryId, endDate) {
    return axios.get(
      `${BASE_URL}/leaderboards/${gameId}/category/${categoryId}?date=${endDate}&top=1&embed=players,game,category`
    );
  },
};

export default SpeedrunService;
