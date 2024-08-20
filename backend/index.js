const express = require("express");
const { Pool, Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
});

// app.get("/data", function (req, res) {
//   pool.query("SELECT movie, hero from movie_hero", [], (err, result) => {
//     if (err) {
//       return res.status(405).jsonp({
//         error: err,
//       });
//     }

//     return res.status(200).jsonp({
//       data: result.rows,
//     });
//   });
// });

app.get("/data", function (req, res) {
  pool.query("SELECT movie, hero FROM movie_hero", [], (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({
        error: 'Database query failed',
        details: err.message
      });
    }

    console.log('Database query result:', result.rows);
    return res.status(200).json({
      data: result.rows
    });
  });
});


app.get('/health', (req, res) => {
  res.status(200).send('OK');
});


app.listen(port, () =>
  console.log(`Backend rest api listening on port ${port}!`)
);
