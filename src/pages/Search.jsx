import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchEventBox from "../section/SearchEventBox/SearchEventBox";
import BookingModal from "../components/BookingModal/BookingModal";
import NavBar from "../components/Navbar/Navbar";
import EventCard from "../components/EventCard/EventCard";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";

export default function Search() {
  const [searchParams] = useSearchParams();

  const [state, setState] = useState(searchParams.get("state") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Dummy available slots
  const availableSlots = {
    morning: ["09:30 AM", "10:00 AM", "11:00 AM"],
    afternoon: ["12:30 PM", "01:00 PM", "02:30 PM"],
    evening: ["05:00 PM", "06:00 PM", "07:00 PM"],
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
console.log(toastMessage)
  // Fetch events
  useEffect(() => {
    const getEvents = async () => {
      setEvents([]);
      setIsLoading(true);

      try {
        const { data } = await axios.get(
          `https://eventdata.onrender.com/events?state=${state}&city=${city}`
        );

        setEvents(data);
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    };

    if (state && city) getEvents();
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  // Handle booking modal + snackbar
  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  // ⭐ Called when booking is successful
  const showSuccessToast = (msg) => {
    setToastMessage(msg);
    setToastOpen(true);
  };

  return (
    <>
      <NavBar />

      {/* SEARCH CONTENT */}
      <Container
        fluid
        style={{ background: "#f5f7ff", marginTop: "40px" }}
      >
        {/* Search Box */}
        <Container
          className="bg-white p-4 rounded shadow-lg mb-4"
          style={{ marginTop: "-40px" }}
        >
          <SearchEventBox />
        </Container>

        {/* Events */}
        <Container>
          {events.length > 0 && (
            <h4 className="mb-4">
              {events.length} events found in{" "}
              <b style={{ textTransform: "capitalize" }}>{city}</b>,{" "}
              <b>{state}</b>
            </h4>
          )}

          {isLoading && (
            <div className="text-center py-5">
              <Spinner animation="border" />
            </div>
          )}

          {!state || !city ? (
            <Card body className="text-center p-4">
              Please select a State and City.
            </Card>
          ) : null}

          <Row>
            {events.length > 0 &&
              events.map((event) => (
                <Col md={9} lg={8} key={event.id} className="mb-4">
                  <EventCard
                    details={event}
                    availableSlots={availableSlots}
                    handleBooking={handleBookingModal}
                  />
                </Col>
              ))}
          </Row>
        </Container>

        {/* Booking Modal */}
      <Container fluid style={{ background: "#f5f7ff", marginTop: "40px" }}>
    ...
    <BookingModal
      open={isModalOpen}
      setOpen={setIsModalOpen}
      bookingDetails={bookingDetails}
      showSuccessMessage={(msg) => showSuccessToast(msg)}
    />
  </Container>

  {/* Toast MUST be outside container */}
  <AutohideSnackbar
    open={toastOpen}
    setOpen={setToastOpen}
    message={toastMessage}
  />
      </Container>
    </>
  );
}
