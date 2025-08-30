export const fetchReservationsRequest = () => ({ type: "FETCH_RESERVATIONS_REQUEST" });
export const fetchReservationsSuccess = (reservations) => ({ type: "FETCH_RESERVATIONS_SUCCESS", payload: reservations });
export const addReservationSuccess = (reservation) => ({ type: "ADD_RESERVATION_SUCCESS", payload: reservation });
export const updateReservationSuccess = (reservation) => ({ type: "UPDATE_RESERVATION_SUCCESS", payload: reservation });
export const deleteReservationSuccess = (id) => ({ type: "DELETE_RESERVATION_SUCCESS", payload: id });
export const fetchReservationsFailure = (error) => ({ type: "FETCH_RESERVATIONS_FAILURE", payload: error });
