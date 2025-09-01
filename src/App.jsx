import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoomList from './components/RoomList';
import RoomDetails from './components/RoomDetails';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isAuthenticated = true; // Replace with real auth logic

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={()=>{}} />
      <Routes>
        <Route path="/" element={<Navigate to="/rooms" />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/reserve" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ReservationForm />
          </PrivateRoute>
        } />
        <Route path="/reservations" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ReservationList />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
