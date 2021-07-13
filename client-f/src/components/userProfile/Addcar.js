import React, { useState } from "react";
import { MDBInput, MDBInputGroup } from "mdbreact";
import { useDispatch } from "react-redux";
import { addCar } from "../../js/action/carAction";


import "../compo.css";

function Addcar() {
  const [marque, setMarque] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [couleur, setCouleur] = useState("");
  const [nombreDePlace, setNombreDePlace] = useState("");
  const [dateMiseDeCirulation, setDateMiseDeCirulation] = useState("");
  const [matricule, setMatricule] = useState("");
  const [prix, setPrix] = useState("");
  const [transmission, setTransmission] = useState("");
  const [categorie, setCategorie] = useState("");
  const [carburant, setCarburant] = useState("");
  const [img, setImg] = useState("");
  const [name, setName] = useState();
  const [file, setFile] = useState();

  const dispatch = useDispatch();
  function refreshPage() {
    window.location.reload(false);
  }

  const add = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
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
        img,
      })
    );
  };


  return (
    <div className="Content">
      <h1> Ajouter voiture </h1>
      <div className="addcar">
        <form enctype="multipart/form-data" action="api/form.php" method="post">
          <div className="flex">
            <label htmlFor="file">File</label>
            <input type="file" id="file"  onChange={(e) => setImg(e.target.value)}/>
          </div>
        </form>
      </div>
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

      <div className="flexaround">
        <a className="ajouter" href="#" onClick={add}>
          Ajouter X
        </a>
        <a className="ajouter" href="#" onClick={refreshPage}>
          Annuler
        </a>
      </div>
    </div>
  );
}

export default Addcar;
