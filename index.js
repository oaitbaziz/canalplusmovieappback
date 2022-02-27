const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const apiRouter = require("./routes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(helmet());

app.use("/", apiRouter);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});
