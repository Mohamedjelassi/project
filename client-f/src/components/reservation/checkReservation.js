import React from "react";
import { Form } from "semantic-ui-react";

function checkReservation() {
  return (
    <div>
      <div className="Contentb">
        <div>
          <div className="Contentc">
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
                <button type="submit" className="ajouter">
                  Editer
                </button>
              </div>
            </div>
          </div>
          <div className="disp">
            <div>
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
                        <input type="text" placeholder="Adresse e-mail" />
                      </div>
                      <h7>
                        Pour que nous puissions vous envoyer votre e-mail de
                        confirmation et votre bon de réservation
                      </h7>
                    </div>
                    <Form.Field label="Civilité" control="select">
                      <option value="Veuillez sélectionner">
                        Veuillez sélectionner
                      </option>
                      <option value="male">M.</option>
                      <option value="female">Mme</option>
                    </Form.Field>
                    <div class="inline field">
                      <label>Prénom</label>
                      <div class="ui input">
                        <input type="text" placeholder="Prénom" />
                      </div>
                    </div>
                    <div class="inline field">
                      <label>Nom</label>
                      <div class="ui input">
                        <input type="text" placeholder="Nom" />
                      </div>
                    </div>
                    <div class="inline field">
                      <label>Numéro de téléphone</label>
                      <div class="ui input">
                        <input type="text" placeholder="Numéro de téléphone" />
                      </div>
                    </div>
                    <div>
                      <br></br>
                      <h7>---ADRESSE DE FACTURATION---</h7>
                      <div class="inline field">
                        <label>Adresse</label>
                        <div class="ui input">
                          <input type="text" placeholder="Adresse" />
                        </div>
                      </div>
                      <div class="inline field">
                        <label>ville</label>
                        <div class="ui input">
                          <input type="text" placeholder="ville" />
                        </div>
                      </div>
                      <div class="inline field">
                        <label>Gouvernorat</label>
                        <div class="ui input">
                          <input type="text" placeholder="Gouvernorat" />
                        </div>
                      </div>
                      <div class="inline field">
                        <label>Code postal</label>
                        <div class="ui input">
                          <input type="text" placeholder="Code postal" />
                        </div>
                      </div>
                    </div>
                    <div className="dispb">
                      <button className="ajouterM">update</button>
                      <button className="btnR">
                        Anuller ma reservation
                      </button>
                    </div>
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
    </div>
  );
}

export default checkReservation;
