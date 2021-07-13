import React from "react";
import logo from "../../IMG/hirentcarLOGO.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "../compo.css";

import { logout } from "../../js/action/authAction";
import CarList from "./carList";
import Addcar from "./Addcar";


function UserProfil() {
  const dispatch = useDispatch();

  const history = useHistory();

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const logoutUser = () => {
    dispatch(logout());
    history.push("/login");
  };

  // Hide Show Prosses Page User Agence

  const [showCarList, setShowCarList] = React.useState(true);
  const [showAddCar, setShowAddCar] = React.useState(false);
 
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


  // if (!user) {
  //   return (
  //     <div>
  //       <div class="d-flex justify-content-center">
  //         <div class="spinner-border" role="status">
  //           <span class="sr-only">Loading...</span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="profil">
        <div className="logout">
          <button className="dct" onClick={logoutUser}>
            {" "}
            déconnection{" "}
          </button>
        </div>
        <div className="dispc">
          <div class="wrapper">
            <div class="link_wrapper">
              <button className="ajouter" onClick={onClick1}>
                Ajouter voiture
              </button>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
          <img src={logo} alt="logo" width="190" height="190" />
          <div>
            <button className="ajouter" onClick={onClick}>
              Liste des Voitures
            </button>
            <h3> {user && `Welcome ${user.nameAgence}`} </h3>
          </div>
        </div>
        <div className="alert">
          <div className="vl">
            <div className="-vl">
              <h3> Alerts </h3>
              <h5> </h5>
              <h5> </h5>
              <h5> </h5>
              <h3> date retour </h3>
              <h5> </h5>
              <h5> </h5>
              <h5> </h5>
              <h3> liste resrvation </h3>
              <h5> </h5>
              <h5> </h5>
              <h5> </h5>
              <h3> entretien et reglement </h3>
              <h5> </h5>
              <h5> </h5>
              <h5> </h5>
            </div>
          </div>
          <div className="pros">
            {showCarList ? <CarList /> : null}
            {showAddCar ? <Addcar /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfil;
