import axios from "axios";
import {
  fetchReservationsRequest,
  fetchReservationsSuccess,
  addReservationSuccess,
  updateReservationSuccess,
  deleteReservationSuccess,
  fetchReservationsFailure,
} from "../actions/reservationActions";

export const fetchReservations = () => async (dispatch) => {
  dispatch(fetchReservationsRequest());
  try {
    const response = await axios.get("http://localhost:5000/reservations");
    dispatch(fetchReservationsSuccess(response.data));
  } catch (error) {
    dispatch(fetchReservationsFailure(error.message));
  }
};

export const makeReservation = (reservation) => async (dispatch) => {
  const response = await axios.post("http://localhost:5000/reservations", reservation);
  dispatch(addReservationSuccess(response.data));
};

export const updateReservation = (id, updated) => async (dispatch) => {
  const response = await axios.put(`http://localhost:5000/reservations/${id}`, updated);
  dispatch(updateReservationSuccess(response.data));
};

export const cancelReservation = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/reservations/${id}`);
  dispatch(deleteReservationSuccess(id));
};
