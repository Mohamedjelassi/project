"use strict";

const router = require("express").Router();
const {upload} = require("../helpers/filehelper");
const {
  singleFileUpload,
  getallSingleFiles,
  delet,
  update,
} = require("../controllers/CarController");


router.post("/singleFile/:id", upload.single("file"), singleFileUpload);
router.get("/getSingleFiles", getallSingleFiles);
router.delete("/deleteCars/:id", delet);
router.put("/updateCars/:id", update);


module.exports =router;
