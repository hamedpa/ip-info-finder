const axios = require("axios");

const getWeather = async (city) => {
    const res = await axios({
      method: "get",
      url: "https://goweather.herokuapp.com/weather/"+String(city),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return res.data;
};

module.exports = getWeather;