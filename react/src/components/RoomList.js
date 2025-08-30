import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../redux/thunks/roomThunks";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const RoomList = () => {
  const dispatch = useDispatch();
  const { rooms, loading } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  if (loading) return <p>Loading rooms...</p>;

  return (
    <Container className="mt-4">
      <Row>
        {rooms.map((room) => (
          <Col md={4} key={room.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{room.type}</Card.Title>
                <Card.Text>Price: ${room.price}</Card.Text>
                <Card.Text>Available: {room.available ? "Yes" : "No"}</Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RoomList;
