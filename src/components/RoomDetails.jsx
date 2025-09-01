import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/rooms/${id}`)
      .then(res => setRoom(res.data));
  }, [id]);

  if (!room) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{room.type}</h2>
      <img src={room.image} alt={room.type} className="img-fluid mb-3" />
      <p>Price: ${room.price}</p>
      <p>Features: {room.features.join(', ')}</p>
      <p>{room.available ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default RoomDetails;
