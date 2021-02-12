const express = require("express");
const cors = require("cors");
const router = express.Router();
const axios = require("axios");

router.get("/objects", cors(), async (req, res) => {
  const page = (req && req.query && req.query.page) || 1;
  const searchTerm = req && req.query && req.query.query;

  let config = {
    method: "get",
    url: `https://api.harvardartmuseums.org/object?apikey=${process.env.APIKEY}&hasimage=1&page=${page}&title=${searchTerm}`,
  };

  try {
    const response = await axios(config);

    res.status(200).json(response.data.records);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
