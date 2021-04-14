const axios = require("axios");
const express = require("express");
const check = require("./validator");
const meliAPI = require("./meli");
const router = express.Router();

router.use(check.validHeaders);

router.get("/:id", async (req, res) => {
  if (check.hasParam(req, "id")) {
    const id = req.params.id;

    const itemDto = await axios
      .all([meliAPI.getItem(id), meliAPI.getItemDescription(id)])
      .then(
        axios.spread((...responses) => {
          const meliItemDto = responses[0].data;
          const { sold_quantity } = meliItemDto;

          const item = {
            ...mapItem(meliItemDto),
            sold_quantity,
            description: responses[1].data.plain_text,
          };

          return { item };
        })
      );

    return res.send(itemDto);
  }

  res.send();
});

router.get("/", async (req, res) => {
  if (check.hasQueryParam(req, "q")) {
    const search = req.query.q;

    const { data } = await meliAPI.getSearch(search).catch(() => {
      return res.status(400).send("Bad Request");
    });

    return res.send(mapSearch(data));
  }

  res.send();
});

module.exports = router;

function mapItem(meliItemDto) {
  const { id, title, condition, currency_id, price, shipping } = meliItemDto;

  let picture;
  if (meliItemDto.pictures) {
    picture = meliItemDto.pictures[0].secure_url;
  } else {
    picture = meliItemDto.thumbnail;
  }

  return {
    id,
    title,
    price: {
      currency: currency_id,
      amount: price,
      decimals: 0, // consultar donde llega
    },
    picture,
    condition,
    free_shipping: shipping.free_shipping,
  };
}

function mapSearch(meliSearchDto) {
  const results = meliSearchDto.results;

  if (!results) {
    return;
  }

  return {
    categories: getCategories(meliSearchDto),
    items: results.slice(0, 4).map((item) => ({
      ...mapItem(item),
      state_name: item.address.state_name, // para cumplir mock
    })),
  };
}

function getCategories(meliSearchDto) {
  const filters = meliSearchDto.filters;

  if (filters.length > 0) {
    const filterCategory = findFilter(filters, "category");
    if (filterCategory.values.length > 0) {
      return filterCategory.values[0].path_from_root;
    }
  }

  const available_filters = meliSearchDto.available_filters;
  const filterCategory = findFilter(available_filters, "category");

  if (!filterCategory) {
    return [];
  }

  const sortedFilters = filterCategory.values.sort(categoryCompare);

  return sortedFilters.slice(0, 4).map(({ id, name }) => ({ id, name }));
}

function findFilter(filters, filterName) {
  return filters.find((filter) => filter.id === filterName);
}

const categoryCompare = (a, b) => {
  if (a.results < b.results) {
    return 1;
  }
  if (a.results > b.results) {
    return -1;
  }
  return 0;
};
