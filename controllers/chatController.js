const db = require("../config/db");

exports.send = (req, res) => {
  const { receiver_id, message } = req.body;
  db.query(
    "INSERT INTO messages VALUES (?,?,?,NOW())",
    [req.user.id, receiver_id, message],
    () => res.send("Message sent ✅")
  );
};
