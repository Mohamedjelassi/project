import React, { useState } from "react";


function MaReservation() {
  
  const [mail, setMail] = useState("");
  const [ref, setRef] = useState("");
  return (
    <div>
      <div>
        <div className="profil">
          <div className="logout">
            <h1 id="titleRes"> Ma réservation </h1>
          </div>
          <div className="alert">
            <div className="vl">
              <div className="-vl">
                <h4> Voir votre réservation </h4>
                <h4> À propos de nous </h4>
                <h4> Devenir partenaire </h4>
              </div>
            </div>
            <div className="maReservation">
              <h6>
                Il suffit de nous fournir vos coordonnées pour confirmer un
                devis - ou pour afficher, modifier ou annuler une réservation.
              </h6>
              <div class="margin30">
                <label>Email :</label>
                <div class="ui input">
                  <input type="text" placeholder="Email" value={mail}
                        onChange={(e) => setMail(e.target.value)} />
                </div>
              </div>
              <div class="">
                <label>Numéro de référence :</label>
                <div class="ui input">
                  <input type="text" placeholder="Numéro de référence " value={ref}
                        onChange={(e) => setRef(e.target.value)}/>
                </div>
              </div>
              <a className="btnR" href="/checkreservation">
                Trouver ma réservation
              </a>
              <a>Vous avez oublié votre numéro de référence de réservation ?</a>
              login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaReservation;
