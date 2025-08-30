import axios from "axios";
import { fetchRoomsRequest, fetchRoomsSuccess, fetchRoomsFailure } from "../actions/roomActions";

export const fetchRooms = () => async (dispatch) => {
  dispatch(fetchRoomsRequest());
  try {
    const response = await axios.get("http://localhost:5000/rooms");
    dispatch(fetchRoomsSuccess(response.data));
  } catch (error) {
    dispatch(fetchRoomsFailure(error.message));
  }
};
