import axios from "axios";
import { FETCH_CARS } from "../constants/actionType";



// Get Cars

export const getCars = () => dispatch => {
  axios
    .get("http://localhost:5000/api/Cars/")
    .then((res) => dispatch({ type: FETCH_CARS, payload: res.data }))
    .catch((err) => console.log(err));
};



//  Add Car 
export const addCar = (newCar) => dispatch => { 
  axios
    .post("http://localhost:5000/api/Cars/addCar", newCar)
    .then(res =>dispatch(getCars()) )
    .catch((err) => console.log(err));

}
 


// Delete Car

export const deleteCar = (idCar) => dispatch => { 
  axios
    .delete("http://localhost:5000/api/Cars/deleteCars/"+idCar)
    .then(res =>dispatch(getCars()) )
    .catch((err) => console.log(err));

}


// Edit Car 

export const editCar = (idCar, editedCar) => dispatch => { 
  axios
    .put("http://localhost:5000/api/Cars/updateCars/"+idCar, editedCar )
    .then(res =>dispatch(getCars()) )
    .catch((err) => console.log(err));

}