export const fetchRoomsRequest = () => ({ type: "FETCH_ROOMS_REQUEST" });
export const fetchRoomsSuccess = (rooms) => ({ type: "FETCH_ROOMS_SUCCESS", payload: rooms });
export const fetchRoomsFailure = (error) => ({ type: "FETCH_ROOMS_FAILURE", payload: error });
