const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "yelp",
});

db.connect((err) => {
  if (err) return err;
  else console.log("Successfully made connection to db");
});

module.exports = db;
