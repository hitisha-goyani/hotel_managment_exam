import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/roomsActions';
import { Link } from 'react-router-dom';

const RoomList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>Rooms</h2>
      <div className="row">
        {list.map(room => (
          <div key={room.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={room.image} className="card-img-top" alt={room.type} />
              <div className="card-body">
                <h5 className="card-title">{room.type}</h5>
                <p className="card-text">${room.price} / night</p>
                <Link to={`/rooms/${room.id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
