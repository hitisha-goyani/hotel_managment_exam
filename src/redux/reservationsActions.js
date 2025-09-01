import axios from 'axios';

export const fetchReservations = () => async dispatch => {
  dispatch({ type: 'FETCH_RESERVATIONS_REQUEST' });
  try {
    const res = await axios.get('http://localhost:5000/reservations');
    dispatch({ type: 'FETCH_RESERVATIONS_SUCCESS', payload: res.data });
  } catch (e) {
    dispatch({ type: 'FETCH_RESERVATIONS_FAILURE', payload: e.message });
  }
};

export const addReservation = (data) => async dispatch => {
  const res = await axios.post('http://localhost:5000/reservations', data);
  dispatch({ type: 'ADD_RESERVATION_SUCCESS', payload: res.data });
};

export const cancelReservation = (id) => async dispatch => {
  await axios.delete(`http://localhost:5000/reservations/${id}`);
  dispatch({ type: 'DELETE_RESERVATION_SUCCESS', payload: id });
};
