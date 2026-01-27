const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nasrin@27",
  database: "college_network"
});

db.connect(err => {
  if (err) console.log("DB Error ❌");
  else console.log("MySQL Connected ✅");
});

module.exports = db;
