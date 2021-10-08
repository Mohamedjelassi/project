"use strict";
const SingleFile = require("../model/singlefile");
const User = require("../Model/User");

const singleFileUpload =  (req, res)=>{
  const newfile= new SingleFile ({
          marque:req.body.marque,
          kilometrage :req.body.kilometrage,
          couleur:req.body.couleur,
          nombreDePlace:req.body.nombreDePlace,
          dateMiseDeCirulation:req.body.dateMiseDeCirulation,
          matricule:req.body.matricule,
          prix:req.body.prix,
          transmission:req.body.transmission,
          categorie:req.body.categorie,
          carburant:req.body.carburant,
          nbsieges:req.body.nbsieges,
          fileName: req.newFile.originalname,
          filePath: req.newFile.path,
          fileType: req.newFile.mimetype,
          fileSize: fileSizeFormatter(req.newFile.size, 2)
  });
  
  newfile.save((err, file) => {
      if (err) {
        return res.status(400).json(err);
      }
      User.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { userCar: file._id } },
        { new: true, upsert: true },
        (err, docs) => {
          if (err) {
            return res.status(400).json(err);
          }
          res.status(201).json(file);
        }
      );
    });
};

// const singleFileUpload = async (req, res, next) => {
//   const {
//     marque,
//     kilometrage,
//     couleur,
//     nombreDePlace,
//     dateMiseDeCirulation,
//     matricule,
//     prix,
//     transmission,
//     categorie,
//     carburant,
//     nbsieges,
//     userCar,
//   } = req.body;
//   try {
//     const newFile = new SingleFile({
//       marque,
//       kilometrage,
//       couleur,
//       nombreDePlace,
//       dateMiseDeCirulation,
//       matricule,
//       prix,
//       transmission,
//       categorie,
//       carburant,
//       nbsieges,
//       userCar,
//       fileName: req.newFile.originalname,
//       filePath: req.newFile.path,
//       fileType: req.newFile.mimetype,
//       fileSize: fileSizeFormatter(req.newFile.size, 2)
//     });
//     // file.save();

//     await newFile.save((err, file) => {
//       if (err) {
//         return res.status(400).json(err);
//       }
//       User.findByIdAndUpdate(
//         req.params.id,
//         { $addToSet: { userCar: file._id } },
//         { new: true, upsert: true },
//         (err, docs) => {
//           if (err) {
//             return res.status(400).json(err);
//           }
//           res.status(201).json(file);
//         }
//       );
//     });
//   }catch(error){
//     res.status(400).send(error.message);
//   };
// };

 
  


//     res.json({ msg: `Car Added Successfully`, file });
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };



const getallSingleFiles = async (req, res, next) => {
  try {
    const files = await SingleFile.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const delet = async (req, res) => {
  try {
      const postDeleted = await SingleFile.findOneAndDelete({
        _id: req.params.id,
      });
      res.json({ msg: "car deleted", postDeleted });
  } catch (error) {
    res.send("server error");
  }
};
const update = async (req, res) => {
  try {
    const editedProfile = await SingleFile.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ msg: "Cars edited", editedProfile });
  } catch (error) {
    res.send("server error");
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

module.exports = {
  singleFileUpload,
  getallSingleFiles,
  update,
  delet,
};
