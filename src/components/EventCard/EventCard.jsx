import { useState } from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import thumb from "../../assets/thumbsup.png";
import icon from "../../assets/event.png";

import { format } from "date-fns";
import Calendar from "../Calender/Calender";

export default function EventCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Card
      className="p-3 shadow-sm rounded-3 h-60"
    
    >
      <Row className="align-items-start g-3">

        {/* Left Image */}
        <Col xs={3} md={2}>
          <img
            src={icon}
            alt="event-icon"
            className="img-fluid"
            style={{ width: "70px" }}
          />
        </Col>

        {/* Event Details */}
        <Col xs={9} md={7}>
          <h5 className="text-primary text-capitalize fw-bold mb-1">
            {details?.eventName?.toLowerCase() || ""}
          </h5>

          <p className="text-capitalize fw-semibold small mb-1">
            {details?.city?.toLowerCase() || ""}, {details?.state || ""}
          </p>

          <p className="small mb-2">{details?.address || ""}</p>

          {/* Price Section */}
          <div className="d-flex gap-2 align-items-center mb-2 flex-wrap">
            <span className="fw-bold text-success text-uppercase">Free</span>
            <span className="text-decoration-line-through text-muted">₹500</span>
            <span className="small">Booking fee at venue</span>
          </div>

          {/* Rating Badge */}
          <div className="d-inline-flex align-items-center bg-success px-2 py-1 rounded">
            <img
              src={thumb}
              alt="rating"
              width="18"
              height="18"
              className="me-1"
            />
            <span className="text-white fw-bold" style={{ opacity: 0.8 }}>
              {details?.Rating === "Not Available" ? 0 : details?.Rating || 0}
            </span>
          </div>
        </Col>

        {/* Right Action Area */}
        <Col xs={12} md={3} className="text-md-end">
          {!booking ? (
            <>
              <p className="text-success fw-semibold small mb-2 text-center">
                Available Today
              </p>

              <Button
                variant="success"
                className="w-100 text-nowrap"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                {!showCalendar ? "Book FREE Visit" : "Hide Calendar"}
              </Button>
            </>
          ) : (
            <div className="d-flex gap-2 flex-wrap justify-content-md-end">
              <Badge bg="primary" className="p-2 rounded">
                {details?.bookingTime || ""}
              </Badge>

              <Badge bg="success" className="p-2 rounded">
                {details?.bookingDate
                  ? format(new Date(details.bookingDate), "dd MMMM yyyy")
                  : ""}
              </Badge>
            </div>
          )}
        </Col>
      </Row>

      {/* Calendar */}
      {showCalendar && (
        <div className="mt-3">
          <Calendar
            details={details}
            availableSlots={availableSlots}
            handleBooking={handleBooking}
          />
        </div>
      )}
    </Card>
  );
}
