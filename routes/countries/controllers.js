import httpResponse from "../../utils/httpResponse.js";
import axios from 'axios'
const controller = {
  getData: async (req, res) => {
    try {
      let data;
      await axios.get("https://vipankumar.com/SmartHealth/api/getCountries")
        .then(function (response) {
          data = response;
        })
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  add: async (req, res) => {
    const addResponse = await UserService.add(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, addResponse.data);
    }
  },
}

export default controller;
