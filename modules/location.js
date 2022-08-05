const axios = require("axios");

const getLocation = async (lat,lon) => {
    const res = await axios({
      method: "get",
      url: "https://nominatim.openstreetmap.org/search?q="+String(lat)+"+"+String(lon)+"&format=json&polygon=1&addressdetails=1",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return res.data;
};

module.exports = getLocation;