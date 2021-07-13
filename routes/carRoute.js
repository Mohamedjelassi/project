const express = require("express");

const multer = require("multer");

const upload = require("../Midlewares/upload");

// Router From express
const router = express.Router();

// Cars Schema
const CarsM = require("../Model/car");

//http://localhost:5000/api/Cars/

router.post("/addCar", upload.single("img"), async (req, res) => {
  const {
    marque,
    kilometrage,
    couleur,
    nombreDePlace,
    dateMiseDeCirulation,
    matricule,
    prix,
    transmission,
    categorie,
    carburant,
    nbsieges,
    img,
  } = req.body;

  try {
    const newCar = new CarsM({
      marque,
      kilometrage,
      couleur,
      nombreDePlace,
      dateMiseDeCirulation,
      matricule,
      prix,
      transmission,
      categorie,
      carburant,
      nbsieges,
      img,
    });
    if (req.file) {
      newCar.img = req.file.path;
    }

    await newCar.save();

    console.log(newCar);
    res.json({ msg: `Car added`, newCar });
  } catch (error) {
    console.log(error);
  }
});

// path : http://localhost:5000/api/Cars/
// get all Cars

router.get("/", async (req, res) => {
  try {
    const cars = await CarsM.find();
    res.json({ msg: "data fetched", cars });
  } catch (error) {
    console.log(error);
  }
});

// path : http://localhost:5000/api/Cars/
//Delete One Car Using model.findByIdAndRemove
//
router.delete("/deleteCars/:id", async (req, res) => {
  try {
    const car = await CarsM.findOneAndDelete({ _id: req.params.id });
    console.log(car);
    res.json({ msg: "car deleted", car });
  } catch (err) {
    console.log(err);
  }
});

// Edit Car

router.put("/updateCars/:id", async (req, res) => {
  try {
    const Car = await CarsM.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ msg: "Cars edited", Car });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
