require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const objectsRouter = require("./routes/objects");
app.use("/api", objectsRouter);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
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
