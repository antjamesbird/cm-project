const express = require("express");
const request = require("request");
const port = process.env.PORT || 3001;

require("dotenv").config();
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/repos", (req, res) => {
  //   const query = req.query.q;
  request(
    { url: `https://gh-trending-api.herokuapp.com/repositories` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get("/devs", (req, res) => {
  //   const query = req.query.q;
  request(
    { url: `https://gh-trending-api.herokuapp.com/developers` },

    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.listen(port, () => console.log(`listening on ${port}`));
