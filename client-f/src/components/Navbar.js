import React from "react";

import logo from "../IMG/hirentcarLOGO.jpg";
import telflogo from "../IMG/smartphone-avec-e-mail.png";

import "./compo.css";

function Navbar() {
 

  return (
    <header>
      <div className="topnav">
        <a href="/">
          <img src={logo} alt="Logo" width="100" height="100" />
        </a>
        <div className="h1Nav">
          <h1> Always Cheaper </h1>
          <h1 style={{ color: "rgb(229, 57, 55)" }}> Gruaranteed</h1>
        </div>
        <div className="resrv">
          <img
            src={telflogo}
            className="telf"
            alt="Logo"
            width="50"
            height="50"
          />
          <a className="btnn" href='/maReservation'>
            {" "}
            Gérer votre réservation{" "}
          </a>
          
        </div>
      </div>
    </header>
  );
}

export default Navbar;
