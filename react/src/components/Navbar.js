import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="ms-3">Hotel Management</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Rooms</Nav.Link>
          <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
          <Nav.Link as={Link} to="/add-reservation">Add Reservation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
