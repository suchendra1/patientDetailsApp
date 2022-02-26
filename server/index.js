const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const {open} = require("sqlite");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

const dbPath = path.join(__dirname, "patientDetail.sqlite3");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/login", (req, res) => {
  const {memberid, password} = req.body;
  const sql = `SELECT * FROM user WHERE memberid=="${memberid}";`;
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log("Server running!!!");
});