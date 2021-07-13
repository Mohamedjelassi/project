import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../js/action/carAction";

import Cardcard from "./carCard";


import "../compo.css";

const CarList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  const cars = useSelector((state) => state.carReducer.cars);

  // carData.loading ? (
  //   <div class="d-flex justify-content-center">
  //     <div class="spinner-border" role="status">
  //       <span class="sr-only">Loading...</span>
  //     </div>
  //   </div>
  // ) : carData.error ? (
  //   <h2>ERROR</h2>
  // ) : (

  return (
    <div className="Content">
      <div className="Carcard">
        {cars.map((el, i) => (
          <Cardcard key={i} car={el} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
