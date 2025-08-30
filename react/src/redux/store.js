import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./reducers/roomReducer";
import reservationReducer from "./reducers/reservationReducer";

const store = configureStore({
  reducer: {
    rooms: roomReducer,
    reservations: reservationReducer,
  },
});

export default store;
