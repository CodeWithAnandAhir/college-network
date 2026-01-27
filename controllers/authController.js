const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email.endsWith("@yourcollege.ac.in"))
    return res.status(400).json({ message: "College email required" });

  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name, email, hashed],
    () => res.json({ message: "Registered ✅" })
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, result) => {
      if (!result.length) return res.send("Invalid user");

      const valid = await bcrypt.compare(password, result[0].password);
      if (!valid) return res.send("Wrong password");

      const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET);
      res.json({ token });
    }
  );
};
