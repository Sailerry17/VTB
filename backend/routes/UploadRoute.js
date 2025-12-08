const express = require("express");
const router = express.Router();

const upload = require("../middlewares/Upload");
const File = require("../models/FileModel");

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const newFile = await File.create({
      filename: req.file.filename,
      url: `http://localhost:5000/uploads/${req.file.filename}`
    });

    res.json({
      status: "success",
      data: newFile
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
