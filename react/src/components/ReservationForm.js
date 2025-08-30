import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeReservation } from "../redux/thunks/reservationThunks";
import { Form, Button, Container } from "react-bootstrap";

const ReservationForm = () => {
  const [form, setForm] = useState({
    guestName: "",
    roomId: "",
    checkIn: "",
    checkOut: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    dispatch(makeReservation(form));
    setForm({ guestName: "", roomId: "", checkIn: "", checkOut: "" });
  };

  return (
    <Container className="mt-4">
      <h2>Make Reservation</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Guest Name</Form.Label>
          <Form.Control
            name="guestName"
            value={form.guestName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Room ID</Form.Label>
          <Form.Control
            name="roomId"
            value={form.roomId}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Check In</Form.Label>
          <Form.Control
            type="date"
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Check Out</Form.Label>
          <Form.Control
            type="date"
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className="mt-3" type="submit">
          Reserve
        </Button>
      </Form>
    </Container>
  );
};

export default ReservationForm;
