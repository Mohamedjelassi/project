import React, { useEffect, useContext, useState } from "react";
import { getSingleFiles } from "../data/api";
import { Form } from "react-bootstrap";

import CardcardReservation from "./carCardReservation";

import "../compo.css";

const CarList = () => {
  const [lieu, setLieu] = useState("");
  const [dated, setDated] = useState("");
  const [datef, setDatef] = useState("");

  const [showCarList, setShowCarList] = useState(true);
  const [showAddCar, setShowAddCar] = useState(false);

  const onClick = () => {
    setShowCarList(true);
    onClickf1();
  };
  const onClick1 = () => {
    setShowAddCar(true);
    onClickf();
  };

  const onClickf = () => setShowCarList(false);
  const onClickf1 = () => setShowAddCar(false);

  
    const [singleFiles, setSingleFiles] = useState([]);
  
    const getSingleFileslist = async () => {
      try {
        const fileslist = await getSingleFiles();
        setSingleFiles(fileslist);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getSingleFileslist();
    }, []);

  // carData.loading ? (
  //   <div class="d-flex justify-content-center">
  //     <div class="spinner-border" role="status">
  //       <span class="sr-only">Loading...</span>
  //     </div>
  //   </div>
  // ) : carData.error ? (
  //   <h2>ERROR</h2>
  // ) : (
  const Datte = () => (
    <div className="dispb">
      <div className="hReservation">
        <div className="pd1">
          <div>Lieu depart : {lieu} </div>
          <div> Date depart : {dated} </div>
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
          <div>Date ariver </div>
        </div>
      </div>
      <div>
        <button type="submit" className="ajouter" onClick={onClick1}>
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
          <button className="btnR" onClick={onClick}>
            annuler
          </button>
        </div>
      </Form.Group>
    </div>
  );

  return (
    <div className="Content">
      <div className="Contenth">
        {showCarList ? <Datte /> : null}
        {showAddCar ? <Editt /> : null}
      </div>
      <div className="Carcard">
        {singleFiles.map((el, i) => (
          <CardcardReservation key={i} car={el} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
