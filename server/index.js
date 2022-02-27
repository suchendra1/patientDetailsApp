const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const {open} = require("sqlite");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3005;

const dbPath = path.join(__dirname, "patientDetail.sqlite3");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(PORT, () => {
      console.log(`Server Running at http://localhost:${PORT}/`);
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// POST REQUEST TO LOGIN
app.post("/login", async (req, res) => {
  const {memberid, password} = req.body;
  const sql = `SELECT * FROM user WHERE memberid=="${memberid}";`;
  const userdetail = await db.get(sql);
  console.log(sql);
  if(userdetail === undefined){
    res.status(400);
    res.send("Invalid user");
  }
  else if(userdetail.password===password){
    res.status(200);
    res.send("Password match");
  }
  else{
    res.status(400);
    res.send("Invalid password");
  }
});

app.post("/register" , async (req, res)=>{
  const {memberid, password} = req.body;
  const checkUserSql = `SELECT * FROM user where memberid == "${memberid}"`;
  const user = await db.get(checkUserSql);
  if(user!==undefined){
    res.status(400);
    res.send("User already exists");
  }
  else{
    const sql = `INSERT INTO user (memberid, password) VALUES ("${memberid}","${password}");`;
    await db.run(sql);
    res.status(200);
    res.send("Success!!!");
  }
});

app.post("/newrecord", async (req,res)=>{
  const {memberid, name,date,mobile,bp,fbs,ppbs,rbs,HbA1c,urea,creatinine,complains,othersignifantnotes} = req.body;
  const sql = `INSERT INTO medicalhistory (memberid,name,date,mobile,bp,fbs,ppbs,rbs,HbA1c,urea,creatinine,complaints,othersignificantnotes) VALUES ("${memberid}","${name}","${date}","${mobile}","${bp}","${fbs}","${ppbs}","${rbs}","${HbA1c}","${urea}","${creatinine}","${complains}","${othersignifantnotes}");`;
  try{
    await db.run(sql);
    console.log(sql);
    res.status(200);
    res.send("Data added successfully!");
  }
  catch(err){
    console.log(err);
    res.status(400);
    res.send("Unable to save data into database!");
  }
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
