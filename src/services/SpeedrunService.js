import axios from "axios";

const BASE_URL = "https://www.speedrun.com/api/v1";

const SpeedrunService = {
  getWR: function (gameId, categoryId, endDate) {
    return axios.get(
      `${BASE_URL}/leaderboards/${gameId}/category/${categoryId}?date=${endDate}&top=1`
    );
  },
  getUser: function (userId) {
    return axios.get(`${BASE_URL}/users/${userId}`);
  },
};

export default SpeedrunService;
