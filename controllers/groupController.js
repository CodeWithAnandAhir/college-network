const db = require("../config/db");

exports.createGroup = (req, res) => {
  db.query(
    "INSERT INTO groups (name,created_by) VALUES (?,?)",
    [req.body.name, req.user.id],
    (err, result) => {
      db.query(
        "INSERT INTO group_members VALUES (?,?)",
        [result.insertId, req.user.id]
      );
      res.send("Group created ✅");
    }
  );
};
