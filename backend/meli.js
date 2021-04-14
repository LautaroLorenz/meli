const axios = require("axios");
const BASE_URL = "https://api.mercadolibre.com/";

const getSearch = async (search) => {
  return await axios.get(BASE_URL.concat("sites/MLA/search"), {
    params: { q: search },
  });
};

module.exports = { getSearch };
