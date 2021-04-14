const express = require("express");
const check = require("./validator");
const meliAPI = require("./meli");
const router = express.Router();

router.use(check.validHeaders);

router.get("/", async (req, res) => {
  if (check.hasParam(req, "q")) {
    const search = req.query.q;

    const { data } = await meliAPI.getSearch(search).catch(() => {
      return res.status(400).send("Bad Request");
    });

    return res.send(mapSearch(data));
  }

  res.send();
});

router.get("/:id", function (req, res) {
  const item = {};

  res.send(item);
});

module.exports = router;

function mapSearch(meliSearchDto) {
  const results = meliSearchDto.results;

  if (!results) {
    return;
  }

  return {
    categories: getCategories(meliSearchDto),
    items: results.slice(0, 4),
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
