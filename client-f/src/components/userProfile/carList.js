import React, { useState, useEffect } from "react";
import { getSingleFiles } from "../data/api";

import Cardcard from "./carCard";

import "../compo.css";

const CarList = () => {
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

  return (
    <div className="Content">
      <div className="container">
        <div className="Carcard">
          {singleFiles.map((el, i) => (
            <Cardcard key={i} car={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;
