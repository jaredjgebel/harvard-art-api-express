const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/objects", cors(), (req, res) => {
  res.json({ hello: "hello" });
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
