const express = require("express");
const cors = require("cors");

const PORT = 3200;
const items = require("./items");
const app = express();

app.use(cors());
app.use("/api/items", items);

app.listen(PORT, () => {
  console.log("Servidor inicializado: PORT ".concat(PORT));
});
