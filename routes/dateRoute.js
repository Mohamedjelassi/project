const express = require("express");




// Router From express
const router = express.Router();

// Cars Schema
const Date = require("../Model/date");

//http://localhost:5000/api/Date/

router.post("/date", async (req, res) => {
  const {
    lieu,
    dateF,
    dateS,
   
  } = req.body;

  try {
    const newDate = new Date({
        lieu,
        dateF,
        dateS,
       
    });
    await newDate.save();

    console.log(newDate);
    res.json({ msg: `Date added`, newDate });
  } catch (error) {
    console.log(error);
  }
});

// path : http://localhost:5000/api/Date/
// get all dates

router.get("/", async (req, res) => {
  try {
    const dates = await Date.find();
    res.json({ msg: "data fetched", dates });
  } catch (error) {
    console.log(error);
  }
});

// path : http://localhost:5000/api/Date/
//Delete One date Using model.findByIdAndRemove
//
router.delete("/deleteDate/:id", async (req, res) => {
  try {
    const date = await Date.findOneAndDelete({ _id: req.params.id });
    console.log(date);
    res.json({ msg: "date deleted", date });
  } catch (err) {
    console.log(err);
  }
});

// Edit date

router.put("/updateDate/:id", async (req, res) => {
  try {
    const date = await Date.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ msg: "Date edited", date });
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;
