import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/roomsActions';
import { addReservation } from '../redux/reservationsActions';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.list);

  const [form, setForm] = useState({ roomId: '', guestName: '', checkIn: '', checkOut: '' });

  useEffect(() => {
    if (!rooms.length) dispatch(fetchRooms());
  }, [dispatch, rooms.length]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addReservation(form));
    setForm({ roomId: '', guestName: '', checkIn: '', checkOut: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <select name="roomId" className="form-select mb-3" value={form.roomId} onChange={handleChange} required>
          <option value="">Select Room</option>
          {rooms.map(r => <option key={r.id} value={r.id}>{r.type}</option>)}
        </select>
        <input className="form-control mb-3" name="guestName" placeholder="Guest Name" value={form.guestName} onChange={handleChange} required />
        <input type="date" className="form-control mb-3" name="checkIn" value={form.checkIn} onChange={handleChange} required />
        <input type="date" className="form-control mb-3" name="checkOut" value={form.checkOut} onChange={handleChange} required />
        <button className="btn btn-primary">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
