import React from "react";
import CarList from "../userProfile/carListReservation";

function resrvation1() {
  
  return (
    <div>
      <div>
        <div className="profil">
          <div className="logout">
           <h1  id="titleRes" > Reservation </h1>
          </div>
          <div className="alert">
            <div className="vl">
              <div className="-vl">
                <h3> Filtre </h3>
                <h5> Agence </h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Hi Rent Car</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Loc voiture</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Rent car</label>
                </div>

                <h3> Fourchette de prix </h3>
                <div id="rangeBox">
                  <div id="inputRange">
                    <input
                      type="number"
                      step="5"
                      min="0"
                      max="2000"
                      placeholder="Min $"
                      id="min"
                      
                    />
                    <input
                      type="number"
                      step="5"
                      min="0"
                      max="2000"
                      placeholder="Max $"
                      id="max"
                    />
                  </div>
                </div>
                <h5> </h5>
                <h3> Transmission </h3>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Automatique</label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Manuelle</label>
                </div>

                <h3> Politique de carburant</h3>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Payable à l'avance</label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">
                    Réservoir à rendre au même niveau
                  </label>
                </div>

                <h3> Catégorie de voiture</h3>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Petites</label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Moyennes</label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Larges</label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Breaks</label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Premium</label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">Monospaces</label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">SUVs</label>
                </div>
              </div>
            </div>
            <div className="pros">
              <CarList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resrvation1;
