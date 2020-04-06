const express = require("express");
const app = express();
const db = require("./server/db");
const query = require("./server/queries");

app.get("/api/businesses", (req, res) => {
  db.query(query.selectByZip(28078), (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);

module.exports = app;
