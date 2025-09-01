import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow-sm">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">
        <i className="bi bi-building"></i> Hotel
      </Link>

      {/* Toggler for mobile view */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible content */}
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/rooms">Rooms</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reservations">Reservations</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reserve">Make Reservation</NavLink>
          </li>
        </ul>

        <div className="d-flex">
          {isAuthenticated ? (
            <button className="btn btn-outline-light" onClick={onLogout}>
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          ) : (
            <NavLink className="btn btn-outline-light" to="/login">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
