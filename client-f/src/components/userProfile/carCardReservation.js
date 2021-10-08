import React from "react";
import { useHistory } from "react-router-dom";

import "../compo.css";

const CardcardReservation = ({ car }) => {
  const history = useHistory();

  const checkout = () => {
    history.push("/checkout");
  };

  return (
    <div>
      <article className="car">
        <div className="disp">
          <div className="carimg">
            <img
              src={`http://localhost:5000/${car.filePath}`}
              height="230"
              width="300"
              style={{ borderRadius: "8px" }}
              alt="img"
            />
          </div>
          <div>
            <h2>{car.marque}</h2>
            <div className="disp">
              <div>
                <h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  Nombre De Place : {car.nombreDePlace}
                </h6>
                <h6>
                  {" "}
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/dotty/80/000000/gas-station.png"
                  />{" "}
                  carburant : {car.carburant}
                </h6>

                <h6>
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/pastel-glyph/50/000000/gearbox-selector.png"
                  />
                  Transmission : -{car.transmission}
                </h6>
              </div>
              <div>
                <h6>Categorie : {car.categorie}</h6>
                <h6> Couleur : {car.couleur} </h6>
                <h6> Prix par jour : {car.prix}</h6>
              </div>
            </div>
          </div>
        </div>
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
