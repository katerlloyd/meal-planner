const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

let corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));


