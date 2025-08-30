import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations, cancelReservation } from "../redux/thunks/reservationThunks";
import { Table, Button, Container } from "react-bootstrap";

const ReservationList = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <h2>Reservations</h2>
     
        <thead>
          <tr>
            <th>Guest</th>
            <th>Room</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <tr key={r.id}>
              <td>{r.guestName}</td>
              <td>{r.roomId}</td>
              <td>{r.checkIn}</td>
              <td>{r.checkOut}</td>
              <td>
                <Button variant="danger" onClick={() => dispatch(cancelReservation(r.id))}>
                  Cancel
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
  
    </Container>
  );
};

export default ReservationList;
