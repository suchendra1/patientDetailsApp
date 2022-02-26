const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

const createTable = () => {
  console.log("create database table contacts");
  db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, password TEXT)",  insertData);
  db.run("CREATE TABLE IF NOT EXISTS Details(id Integer PRIMARY KEY, mobile TEXT, name TEXT, BP TEXT, RBS TEXT, FBS TEXT, PPBS TEXT, HbA1C TEXT, Urea TEXT, Creatinine TEXT, Microalbuminuria TEXT, Complaints TEXT, OtherSignificantNotes TEXT");
}

let db = new sqlite3.Database("./patientDetails.sqlite3", (err) => { 
  if (err) { 
      console.log('Error when creating the database', err) 
  } else { 
      console.log('Database created!') 
      createTable()
  } 
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log("Server running!!!");
});