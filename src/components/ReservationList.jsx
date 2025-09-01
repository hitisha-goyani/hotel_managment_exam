import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, cancelReservation } from '../redux/reservationsActions';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>My Reservations</h2>
      <ul className="list-group">
        {list.map(r => (
          <li key={r.id} className="list-group-item">
            {r.guestName} — Room ID: {r.roomId} — {r.checkIn} to {r.checkOut}
            <button className="btn btn-sm btn-danger float-end" onClick={() => dispatch(cancelReservation(r.id))}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
