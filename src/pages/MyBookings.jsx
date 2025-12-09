import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

import EventCard from "../components/EventCard/EventCard";
import SearchEventBox from "../section/SearchEventBox/SearchEventBox";
import NavBar from "../components/Navbar/Navbar";
import img from "../assets/eventoffer2.png";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  // Load bookings from localStorage
  useEffect(() => {
    const localBookings = localStorage.getItem("eventBookings") || "[]";

    console.log("LOCAL BOOKINGS → ", JSON.parse(localBookings));  // DEBUG

    setBookings(JSON.parse(localBookings));
  }, []);

  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  return (
    <>
      <NavBar />

      <div
        style={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          paddingBottom: "40px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            paddingTop: "20px",
            paddingBottom: "60px",
            marginBottom: "60px",
          }}
        >
          <Container>
            <Row className="align-items-end">
              <Col md="auto" className="text-center text-md-start mb-3 mb-md-0">
                <h1 className="fw-bold text-white">My Event Bookings</h1>
              </Col>

              <Col md>
                <Card
                  className="p-3 shadow"
                  style={{ transform: "translateY(40px)" }}
                >
                  <SearchEventBox
                    list={bookings}
                    filterList={setFilteredBookings}
                  />
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col md={8}>
              {filteredBookings.length > 0 ? (
                filteredBookings.map((event, index) => (
                  <div
                    key={event?.id || event?.Name || index}
                    className="mb-4"
                  >
                    <EventCard details={event} booking={true} />
                  </div>
                ))
              ) : (
                <Card className="p-4">
                  <h3>No Event Bookings Found!</h3>
                </Card>
              )}
            </Col>

            <Col md={4} className="d-flex justify-content-center">
              <img src={img} width={360} alt="cta" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
