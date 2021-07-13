import axios from "axios";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  USER_LOADING,
  AUTH_ERRORS,
} from "../constants/actionType";

// Loading User

const userLoading = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};

// register

export const registerUser = (formData) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.post("/api/users/register", formData);
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
        type: AUTH_ERRORS,
      });
  }
};

//Login

export const loginUser = (formData) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.post("/api/users/login", formData);
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
        type: AUTH_ERRORS,
      });
  }
};

// Get Auth User
export const getAuthUser = () => async (dispatch) => {
  dispatch(userLoading());
  try {
    // header
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const res = await axios.get("/api/users/authUser", config);

    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
