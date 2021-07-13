const express = require("express");

// Router From express
const router = express.Router();

// Client Schema
const Client = require("../Model/client");

//http://localhost:5000/api/Client/

router.post("/checkout", async (req, res) => {
  const {
    lieu,
    DateFirst,
    DateSceonde,
    mail,
    Civilite,
    prenom,
    nom,
    telf,
    adress,
    ville,
    zip,
    avis,
    refresrvation,
    contact,
  } = req.body;

  try {
    const newClient = new Client({
      lieu,
      DateFirst,
      DateSceonde,
      mail,
      Civilite,
      prenom,
      nom,
      telf,
      adress,
      ville,
      zip,
      avis,
      refresrvation,
      contact,
    });
    await newClient.save();

    console.log(newClient);
    res.json({ msg: `Reserver car`, newClient });
  } catch (error) {
    console.log(error);
  }
});

// path : http://localhost:5000/api/Client/
// get all resrvation Client

router.get("/resrvation", async (req, res) => {
  try {
    const resrvation = await Client.find();
    res.json({ msg: "data fetched", resrvation });
  } catch (error) {
    console.log(error);
  }
});

// path : http://localhost:5000/api/Client/
//Delete One resrvation Using model.findByIdAndRemove
//
router.delete("/deleteResrvation/:id", async (req, res) => {
  try {
    const resrvation = await Client.findOneAndDelete({ _id: req.params.id });
    console.log(resrvation);
    res.json({ msg: "resrvation deleted", resrvation });
  } catch (err) {
    console.log(err);
  }
});

router.put("/updateResrvation/:id", async (req, res) => {
  try {
    const resrvation = await Client.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ msg: "resrvation edited", resrvation });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;