const express = require("express");
const app = express();
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());

let dbpath = path.join(__dirname, "covid19IndiaPortal.db");

let db = null;

const initializeAnd = async () => {
  try {
    db = await open({ filename: dbpath, driver: sqlite3.Database });
    app.listen(3000, () => {
      console.log("Govinda");
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};
initializeAnd();

// Get Books API

app.get("/district/", async (request, response) => {
  const selectDistrict = `SELECT * FROM district`;
  const dbs = await db.all(selectDistrict);
  response.send(dbs);
});
