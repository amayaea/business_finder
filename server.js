const express = require("express");
const app = express();
const db = require("./server/db");
const queries = require("./server/queries");

// Search for 100 businesses
app.get("/api/businesses", (req, res) => {
  db.query(queries.selectAll(), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Get best rated businesses
app.get("/api/businesses/best-rated", (req, res) => {
  db.query(queries.selectBestRated(), (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Query for businesses by city
app.get("/api/businesses/city/:city", (req, res, next) => {
  try {
    db.query(queries.selectByCity(req.params.city), (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (err) {
    next(err);
  }
});

// Query for businesses by name
app.get("/api/businesses/name/:name", (req, res, next) => {
  try {
    db.query(queries.searchByName(req.params.name), (err, result) => {
      if (err) throw err;
      res.send(result[0]);
    });
  } catch (err) {
    next(err);
  }
});

// Query for businesses by zip
app.get("/api/businesses/zip/:zip", (req, res, next) => {
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
        const business = { bus: result[0] };
        db.query(
          queries.getCheckins(req.params.businessId.substring(1)),
          (err, result) => {
            if (err) throw err;
            business.checkins = result;
            res.send(business);
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);

module.exports = app;
