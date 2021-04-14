const isHeaderValid = (req, header, value) =>
  req.headers[header] && req.headers[header] === value;

const isAuthorValid = (req) =>
  isHeaderValid(req, "name", "LAUTARO") &&
  isHeaderValid(req, "lastname", "LORENZ");

const validHeaders = (req, res, next) => {
  if (!isAuthorValid(req)) {
    res.status(400).send("Bad Author");
  }

  next();
};

const hasQueryParam = (req, paramName) => !!req.query[paramName];
const hasParam = (req, paramName) => !!req.params[paramName];

module.exports = { validHeaders, hasQueryParam, hasParam };
