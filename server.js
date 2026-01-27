const express = require("express");
const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/groups", require("./routes/groupRoutes"));

app.listen(5000, () => console.log("Server running 🚀"));
