import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { format } from "date-fns";

export default function BookingModal({
  open,
  setOpen,
  bookingDetails,
  showSuccessMessage,
}) {
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
  e.preventDefault();
  triggerEvent();

  const oldBookings = JSON.parse(localStorage.getItem("eventBookings") || "[]");

  const newBooking = {
    ...bookingDetails,
    bookingEmail: email,
  };

  localStorage.setItem("eventBookings", JSON.stringify([...oldBookings, newBooking]));

  showSuccessMessage("Event Booked Successfully!");
  setEmail("");
  setOpen(false);
};

console.log("Booking Saved:", { ...bookingDetails, bookingEmail: email });

  const triggerEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "first_visit",
      eventDate: new Date().toISOString(),
    });
  };

  const formatDate = (day) => {
    if (!day) return "";
    const date = new Date(day);
    return format(date, "E, d LLL");
  };

  return (
    <Modal show={open} onHide={() => setOpen(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Booking</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="mb-3">
          Please enter your email to confirm booking for{" "}
          <strong>
            {bookingDetails.bookingTime} on{" "}
            {formatDate(bookingDetails.bookingDate)}
          </strong>
        </p>

        <Form onSubmit={handleBooking}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button variant="primary" type="submit">
              Confirm
            </Button>
            <Button variant="outline-secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
