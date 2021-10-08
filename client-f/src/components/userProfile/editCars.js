import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MDBInput, MDBInputGroup } from "mdbreact";

import "../compo.css";
import { editCar } from "../data/api";

function EditModal({ car }) {
  const [show, setShow] = useState(false);

  const [marque, setMarque] = useState(car.marque);
  const [kilometrage, setKilometrage] = useState(car.kilometrage);
  const [couleur, setCouleur] = useState(car.couleur);
  const [nombreDePlace, setNombreDePlace] = useState(car.nombreDePlace);
  const [dateMiseDeCirulation, setDateMiseDeCirulation] = useState(
    car.dateMiseDeCirulation
  );
  const [matricule, setMatricule] = useState(car.matricule);
  const [prix, setPrix] = useState(car.prix);
  const [transmission, setTransmission] = useState(car.transmission);
  const [categorie, setCategorie] = useState(car.categorie);
  const [carburant, setCarburant] = useState(car.carburant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const edit = () => {
    editCar(car._id, {
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
    });
    handleClose();
    refreshPage();
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <button className="btnR" onClick={handleShow}>
        Modifier voiture
      </button>
      <div className="modll">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier voiture</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <div className="addcar">
                <MDBInput
                  label="Marque"
                  background
                  size="lg"
                  value={marque}
                  onChange={(e) => setMarque(e.target.value)}
                />
                <MDBInput
                  label="Kilometrage"
                  background
                  size="lg"
                  value={kilometrage}
                  onChange={(e) => setKilometrage(e.target.value)}
                />
                <MDBInput
                  label="Couleur"
                  background
                  size="lg"
                  value={couleur}
                  onChange={(e) => setCouleur(e.target.value)}
                />
                <MDBInput
                  label="Nembre de place"
                  background
                  size="lg"
                  value={nombreDePlace}
                  onChange={(e) => setNombreDePlace(e.target.value)}
                />
                <MDBInput
                  label="Date de mise en circulation"
                  background
                  size="lg"
                  value={dateMiseDeCirulation}
                  onChange={(e) => setDateMiseDeCirulation(e.target.value)}
                />
                <MDBInput
                  label="Matricule voiture"
                  background
                  size="lg"
                  value={matricule}
                  onChange={(e) => setMatricule(e.target.value)}
                />
                <MDBInput
                  label="Prix par jour"
                  background
                  size="lg"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                />
                <MDBInput
                  label="carburant"
                  background
                  size="lg"
                  value={carburant}
                  onChange={(e) => setCarburant(e.target.value)}
                />

                <MDBInputGroup
                  containerClassName="mb-3"
                  prepend="Options"
                  inputs={
                    <select
                      className="browser-default custom-select"
                      value={transmission}
                      onChange={(e) => setTransmission(e.target.value)}
                    >
                      <option value="0">Transmission ...</option>
                      <option value="Manuelle">Manuelle</option>
                      <option value="Automatique">Automatique</option>
                    </select>
                  }
                />
                <MDBInputGroup
                  containerClassName="mb-3"
                  prepend="Options"
                  inputs={
                    <select
                      className="browser-default custom-select"
                      value={categorie}
                      onChange={(e) => setCategorie(e.target.value)}
                    >
                      <option value="0">Catégorie de voiture...</option>
                      <option value="Petites">Petites</option>
                      <option value="Moyennes">Moyennes</option>
                      <option value="Larges">Larges</option>
                      <option value="Breaks">Breaks</option>
                      <option value="Premium">Premium</option>
                      <option value="Monospaces">Monospaces</option>
                      <option value="SUVs">SUVs</option>
                    </select>
                  }
                />
              </div>
            </div>
          </Modal.Body>

          <div className="flexaround">
            <button className="ajouterM" onClick={edit}>
              update
            </button>
            <button className="ajouterM" onClick={handleClose}>
              Annuler
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default EditModal;
