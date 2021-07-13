import React from "react";
import { useDispatch } from "react-redux";
import { deleteCar } from "../../js/action/carAction";
import EditModal from './editCars'



import "../compo.css";


const Cardcard = ({car}) => {

  const dispatch = useDispatch();

  const delet = () => {
dispatch(deleteCar(car._id))
 }



  return (
    <div>
      <article className="car">
       
          <img className="photo" width='300px' height="300px" src={car.img} alt="img" />
          {console.log(car.img)}
          <h1>{car.marque}</h1>
          <h4 style={{ color: "#617d98" }}> couleur : {car.couleur} </h4>
      
        <h4 style={{ color: "#617d98" }}>Nombre De Place : {car.nombreDePlace}</h4>
        <h4 style={{ color: "#617d98" }}> kilometrage : {car.kilometrage}</h4>
        <h4 style={{ color: "#617d98" }}>date Mise De Cirulation : {car.dateMiseDeCirulation}</h4>
        <h4 style={{ color: "#617d98" }}>matricule : {car.matricule}</h4>
        <h4 style={{ color: "#617d98" }}> carburant : {car.carburant}</h4>
        <h4 style={{ color: "#617d98" }}> prix : {car.prix}</h4>
        <h4 style={{ color: "#617d98" }}> Nombre de sieges : {car.nbsieges}</h4>
        <h4 style={{ color: "#617d98" }}>Transmission : {car.transmission}</h4>
        <h4 style={{ color: "#617d98" }}>Categorie :{car.categorie}</h4>
        <div className="flexaround">
        <button className="btnR" onClick={delet} >
        Supprimer   voiture
        </button>
      
       <EditModal car={car} />
        
        </div>
      </article>
    </div>
  );
};

export default Cardcard;
