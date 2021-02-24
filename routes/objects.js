const express = require("express");
const cors = require("cors");
const throttle = require("express-throttle");
const router = express.Router();
const axios = require("axios");

router.get("/objects", throttle({ rate: "1/s" }), async (req, res) => {
  const page = (req && req.query && req.query.page) || 1;
  const searchTerm = (req && req.query && req.query.query) || "";
  const classification = (req.query && req.query.classification) || "";

  let config = {
    method: "get",
    url: `https://api.harvardartmuseums.org/object?apikey=${process.env.APIKEY}&hasimage=1&page=${page}&title=${searchTerm}&classification=${classification}&q=imagepermissionlevel:0`,
  };

  try {
    const response = await axios(config);
    res.status(200).json({
      records: response.data.records,
      pageInfo: {
        page: response.data.info.page,
        pages: response.data.info.pages,
        totalrecords: response.data.info.totalrecords,
      },
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
