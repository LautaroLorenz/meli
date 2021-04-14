const axios = require("axios");
const BASE_URL = "https://api.mercadolibre.com/";

const getSearch = async (search) => {
  return await axios.get(BASE_URL.concat("sites/MLA/search"), {
    params: { q: search },
  });
};

const getItem = async (id) => {
  return await axios.get(BASE_URL.concat("items/").concat(id));
};

const getItemDescription = async (id) => {
  return await axios.get(
    BASE_URL.concat("items/").concat(id).concat("/description")
  );
};

module.exports = { getSearch, getItem, getItemDescription };
