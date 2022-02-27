const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const disksotrage = multer.diskStorage({
  destination: path.join(__dirname, "../images"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "imagen" + file.originalname);
  },
});
const fileupload = multer({
  storage: disksotrage,
}).single("image");

router.get("/", (req, res) => {
  res.send("image page");
});
router.post("/image/post", fileupload, (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send("server error");

    const type = req.file.mimetype;
    const name = req.file.originalname;
    const data = fs.readFileSync(
      path.join(__dirname, "../images/" + req.file.filename)
    );

    conn.query(
      "INSERT INTO image set ?",
      [{ type, name, data }],
      (err, rows) => {
        if (err) return res.status(500).send("server error");}
    );
  });

  console.log(req.file);
});
module.exports = router;
