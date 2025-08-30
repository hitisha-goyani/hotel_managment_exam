import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import RoomList from "./components/RoomList";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/add-reservation" element={<ReservationForm />} />
        <Route path="/reservations" element={<ReservationList />} />
      </Routes>
    </Router>
  );
}

export default App;
