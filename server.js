const express = require("express");
const app = express();
const db = require("./server/db");
const queries = require("./server/queries");

// Search for businesses by zipcode
app.get("/api/businesses", (req, res) => {
  db.query(queries.selectAll(), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Query for businesses by zipcode
app.get("/businesses/zipcode/:zip", (req, res, next) => {
  try {
    db.query(queries.selectByZip(req.params.zip), (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (err) {
    next(err);
  }
});

// Get one business by businessId
app.get("/api/business/:businessId", (req, res, next) => {
  try {
    db.query(
      queries.selectOne(req.params.businessId.substring(1)),
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (err) {
    next(err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);

module.exports = app;
