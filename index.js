const express = require("express");
const app = express();

const path = require("path");
const router = express.Router();

router.get("/api", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/", router);
app.listen(process.env.port || "8080");
