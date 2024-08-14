const express = require("express");
const { Pool, Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
});

app.get("/data", function (req, res) {
  pool.query("SELECT movie, hero from movie_hero", [], (err, result) => {
    if (err) {
      return res.status(405).jsonp({
        error: err,
      });
    }

    return res.status(200).jsonp({
      data: result.rows,
    });
  });
});

app.listen(port, () =>
  console.log(`Backend rest api listening on port ${port}!`)
);
