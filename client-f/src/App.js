import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { getAuthUser } from "./js/action/authAction";
import { useSelector, useDispatch } from "react-redux";

import Home from "./components/home";
import Reservation from "./components/reservation/resrvation";
import Checkout from "./components/reservation/checkout";
import CheckReservation from "./components/reservation/checkReservation";

import maReservation from "./components/reservation/maReservation";

import Login from "./components/login";
import Register from "./components/Register";
import User from "./components/userProfile/profil";
import PrivateRoute from "./components/PrivetRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const getUser = () => dispatch(getAuthUser());

  const { isLoading } = useSelector((state) => state.authReducer);

  useEffect(() => {
    getUser();
  }, []);

  // if (isLoading) {
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
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/reservation"  component={Reservation}/>
        <Route exact path="/checkout"  component={Checkout}/>
        <Route exact path="/checkReservation"  component={CheckReservation}/>
        <Route exact path="/maReservation"  component={maReservation}/>
        <Route path="/profil" component={User} />  // Private // 
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Route path="/login" component={Login}  />
            <Route  path="/register"  component={Register} />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
