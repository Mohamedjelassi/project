import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const Checkout = () => {
  const [mail, setMail] = useState("");
  const [civil, setCivil] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telf, setTelf] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [gouvernorat, setGouvernorat] = useState("");
  const [zip, setZip] = useState("");

  const [lieu, setLieu] = useState("");
  const [dated, setDated] = useState("");
  const [datef, setDatef] = useState("");

  const [showCarList, setShowCarList] = useState(true);
  const [showAddCar, setShowAddCar] = useState(false);

  const onClickk = () => {
    setShowCarList(true);
    onClickkf1();
  };
  const onClickk1 = () => {
    setShowAddCar(true);
    onClickkf();
  };

  const onClickkf = () => setShowCarList(false);
  const onClickkf1 = () => setShowAddCar(false);

  const Datte = () => (
    <div className="dispb">
      <div className="hReservation">
        <div className="pd1">
          <div>Lieu depart </div>
          <div>Date depart </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="70"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
        <div className="pd">
          <div>Lieu ariver</div>
          <div>Date depart </div>
        </div>
      </div>
      <div>
        <button type="submit" className="ajouter" onClick={onClickk1}>
          Editer
        </button>
      </div>
    </div>
  );

  const Editt = () => (
    <div>
      <Form.Group className="back2">
        <div className="frml">
          <button className="green"> 1 </button>
          <input
            className="inputLieu"
            placeholder="lieu de prise en charge"
            value={lieu}
            onChange={(e) => setLieu(e.target.value)}
          />
          <button className="green"> 2 </button>
          <Form.Control
            type="date"
            name="dob"
            placeholder="Date of Birth"
            id="inpt"
            value={dated}
            onChange={(e) => setDated(e.target.value)}
          />

          <Form.Control
            type="date"
            name="dob"
            placeholder="Date of Birth"
            id="inpt"
            value={datef}
            onChange={(e) => setDatef(e.target.value)}
          />
        </div>
        <div className="dispc">
          <button className="btnR"> update </button>
          <button className="btnR" onClick={onClickk}>
            annuler
          </button>
        </div>
      </Form.Group>
    </div>
  );

  return (
    <div className="Contentb">
      <div>
        <div className="Contentc">
          {showCarList ? <Datte /> : null}
          {showAddCar ? <Editt /> : null}
        </div>
        <div className="disp">
          <div>
            <div className="confirmation">
              <h6> - Confirmation Reservation... </h6>
            </div>
            <div className="anuuler">
              <h5 className="disl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
                Annulation gratuite jusqu'à 48 heures à l'avance{" "}
              </h5>
            </div>

            <div>
              <h1>Car info </h1>
            </div>
            <div>
              <div className="checkoutinfo">
                <form class="ui form">
                  <div>
                    <h6> Informations sur le conducteur principal </h6>
                    <h7> Conformes au permis de conduire </h7>
                  </div>
                  <div class="inline field">
                    <label>Adresse e-mail</label>
                    <div class="ui input">
                      <input
                        type="text"
                        placeholder="Adresse e-mail"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                      />
                    </div>
                    <h7>
                      Pour que nous puissions vous envoyer votre e-mail de
                      confirmation et votre bon de réservation
                    </h7>
                  </div>
                  <Form.Field
                    label="Civilité"
                    control="select"
                    value={civil}
                    onChange={(e) => setCivil(e.target.value)}
                  >
                    <option value="Veuillez sélectionner">
                      Veuillez sélectionner
                    </option>
                    <option value="male">M.</option>
                    <option value="female">Mme</option>
                  </Form.Field>
                  <div class="inline field">
                    <label>Prénom</label>
                    <div class="ui input">
                      <input
                        type="text"
                        placeholder="Prénom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="inline field">
                    <label>Nom</label>
                    <div class="ui input">
                      <input
                        type="text"
                        placeholder="Nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="inline field">
                    <label>Numéro de téléphone</label>
                    <div class="ui input">
                      <input
                        type="text"
                        placeholder="Numéro de téléphone"
                        value={telf}
                        onChange={(e) => setTelf(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <br></br>
                    <h7>---ADRESSE DE FACTURATION---</h7>
                    <div class="inline field">
                      <label>Adresse</label>
                      <div class="ui input">
                        <input
                          type="text"
                          placeholder="Adresse"
                          value={adresse}
                          onChange={(e) => setAdresse(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="inline field">
                      <label>ville</label>
                      <div class="ui input">
                        <input
                          type="text"
                          placeholder="ville"
                          value={ville}
                          onChange={(e) => setVille(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="inline field">
                      <label>Gouvernorat</label>
                      <div class="ui input">
                        <input
                          type="text"
                          placeholder="Gouvernorat"
                          value={gouvernorat}
                          onChange={(e) => setGouvernorat(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="inline field">
                      <label>Code postal</label>
                      <div class="ui input">
                        <input
                          type="text"
                          placeholder="Code postal"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="ajouterM">update</button>
                </form>
              </div>
            </div>
          </div>
          <div className="tarif">
            <h4>Détail du tarif de la location</h4>
            <div className="disp">
              <h6>Montant de la location</h6>
              <h7>234,18 £GB</h7>
            </div>
            <div className="disp">
              <h6>Prix ​​pour 3 jours :</h6>
              <h7>234,18 £GB</h7>
            </div>
            <h6>Très bon choix ! </h6>
            <div className="disp">
              <h6>Évaluation client : </h6>
              <h7> 8,4/10 </h7>
            </div>
            <h6> Agence la plus populaire dans cette location</h6>
            <h6> Comptoir dans le terminal</h6>
            <h6> Politique de carburant avantageuse</h6>
            <h6> Courte file d'attente</h6>
            <h6> Annulation gratuite</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
