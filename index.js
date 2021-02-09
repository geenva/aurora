const express = require("express");
const path = require("path");
const app = express();

const router = express.Router();

router.get("/", function (req, res) {
  console.log("Serving / to user.");
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.use("/", router);
app.listen(process.env.port || "8080");
console.log("Listening, loud and clear.");
