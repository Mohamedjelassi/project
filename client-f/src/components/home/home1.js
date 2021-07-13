import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";




import "../compo.css";

function Home() {



  const [lieu, setLieu] = useState("");
  const [dated, setDated] = useState("");
  const [datef, setDatef] = useState("");

  const history = useHistory();

  const rechercher = () => { 
    history.push("/reservation");
  }

 


  return (
 
      <div className="reservation">
          <div className='back01'> 
        <Form.Group  className="back1">
          <div>
            <h1>
              Comparez les prix de toutes les sociétés de location de voitures
            </h1>
            <h3>
              Trouvons ensemble la voiture idéale et réservez votre voiture en 3
              minutes
            </h3>
          </div>
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
            <button className="greenR" onClick={rechercher}> Rechercher </button>
          </div>
        </Form.Group>
      </div>
      </div>
  );
}

export default Home;
