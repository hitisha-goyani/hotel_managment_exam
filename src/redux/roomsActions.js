import axios from 'axios';

export const fetchRooms = () => async dispatch => {
  dispatch({ type: 'FETCH_ROOMS_REQUEST' });
  try {
    const res = await axios.get('http://localhost:5000/rooms');
    dispatch({ type: 'FETCH_ROOMS_SUCCESS', payload: res.data });
  } catch (e) {
    dispatch({ type: 'FETCH_ROOMS_FAILURE', payload: e.message });
  }
};
