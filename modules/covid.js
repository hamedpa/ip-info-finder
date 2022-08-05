const axios = require("axios");

const getCovid = async (country) => {
    if(country.includes('United States')) country = 'USA';
    const res = await axios({
      method: "get",
      url: "https://coronavirus-19-api.herokuapp.com/countries/"+String(country),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return res.data;
};

module.exports = getCovid;