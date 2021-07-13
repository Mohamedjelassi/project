import React from "react";
import {  useHistory } from "react-router-dom";


import "../compo.css";

const CardcardReservation = ({ car }) => {
  const history = useHistory();

  const checkout =() => { 
    history.push("/checkout");
  }

  return (
    <div>
      <article className="car">
        <img className="photo" src={car.img} alt="imgbgbg" />
        <h1>{car.marque}</h1>
        <h4 style={{ color: "#617d98" }}> couleur : {car.couleur} </h4>

        <h4 style={{ color: "#617d98" }}>
          Nombre De Place : {car.nombreDePlace}
        </h4>
        <h4 style={{ color: "#617d98" }}> carburant : {car.carburant}</h4>
        <h4 style={{ color: "#617d98" }}> prix : {car.prix}</h4>
        <h4 style={{ color: "#617d98" }}>Transmission : {car.transmission}</h4>
        <h4 style={{ color: "#617d98" }}>Categorie :{car.categorie}</h4>
        <div className="flexaround">
          <button className="ajouter" onClick={checkout}>
            Voir l'offre
          </button>
        </div>
      </article>
    </div>
  );
};

export default CardcardReservation;
