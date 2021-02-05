require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const axios = require("axios");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/objects", cors(), async (req, res) => {
  let config = {
    method: "get",
    url: `https://api.harvardartmuseums.org/object?apikey=${process.env.APIKEY}&hasimage=1`,
  };

  try {
    const response = await axios(config);

    res.status(200).json(response.data.records);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const host = "localhost";
const port = 5000;

let args;
// eslint-disable-next-line no-unused-expressions
process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);

args.push(() => {
  console.log(`Listening: http://${host}:${port}\n`);
});

// If file is being run directly, start the server
if (require.main === module) {
  // eslint-disable-next-line prefer-spread
  app.listen.apply(app, args);
}

module.exports = app;
