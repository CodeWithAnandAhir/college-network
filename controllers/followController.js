const db = require("../config/db");

exports.follow = (req, res) => {
  db.query(
    "INSERT INTO follows VALUES (?,?)",
    [req.user.id, req.params.id],
    () => res.send("Followed ✅")
  );
};
