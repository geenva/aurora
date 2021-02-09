const express = require("express");
const app = express();

const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  console.log("Serving / to user.");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/", router);
app.listen(process.env.port || "8080");
console.log("Listening, loud and clear.");
