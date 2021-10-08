import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/';

export const singleFileUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'singleFile', data, options);
    } catch (error) {
        throw error;
    }
}
export const getSingleFiles = async () => {
    try {
            const {data} = await axios.get(apiUrl + 'getSingleFiles');
            return data;
    } catch (error) {
        throw error;
    }
}

export const deleteCar = async (idCar) => {
    try {
            const {getSingleFiles} = await axios.delete(apiUrl + 'deleteCars' +"/" + idCar);
            return getSingleFiles;
    } catch (error) {
        throw error;
    }
}


// Edit Car 

export const editCar = (idCar, editedCar)   => { 
    axios
      .put("http://localhost:5000/api/updateCars/"+idCar, editedCar )
      .then(res =>(getSingleFiles()) )
      .catch((err) => console.log(err));
  
  }

  